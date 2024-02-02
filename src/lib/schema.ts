import fs from 'node:fs/promises'

import { type ValidatorOptions, lint } from '@exodus/schemasafe'
import consola from 'consola'

import type { Schema } from '~/types/schema'

import * as pointer from './pointer'

const logger = consola.withTag('utils')

export async function vendorSchemas(
  schemaUrls: Record<string, string>,
  path: string,
) {
  const writePromises = Object.entries(schemaUrls)
    .map(async ([id, url]) => {
      const response = await fetch(url)
      const schema = await response.json() as Schema
      const filePath = `${path}/${id}.json`
      const fileContent = Object.assign(schema, {
        $id: id,
      })

      await fs.writeFile(filePath, JSON.stringify(fileContent, null, 2))
    })

  await Promise.all(writePromises)
}

export async function readSchemas(path: string) {
  const schemas = new Map<string, Schema>()
  const schemaFiles = await fs.readdir(path)

  for (const fileName of schemaFiles) {
    const file = await fs.readFile(`${path}/${fileName}`, 'utf-8')
    const schema = JSON.parse(file)
    schemas.set(`https://regioni.local/schema/${schema.$id}`, schema)
  }

  return schemas
}

export function lintSchema(schema: Schema, options: ValidatorOptions) {
  return lint(schema, options)
    .map((error) => {
      const refs = pointer.resolveReference(
        error.schema as Schema,
        options.schemas as Map<string, Schema>,
        error.keywordLocation,
      )

      logger.warn(
        error.message
          .slice(0, -error.keywordLocation.length)
          .concat(`\n${schema.$id}\n`)
          .concat(error.keywordLocation)
          .concat(' -> '),
        refs
          .map(([fr]) => {
            return stringifyWithDepth(fr, 2, 2)
          })
          .join('\n'),

      )

      return error
    })
}

export function getName(id: string) {
  const url = id.split('/')
    .pop()
    ?.toLowerCase()

  return url?.endsWith('.json') ? url.slice(0, -5) : url
}

export function stringifyWithDepth(obj: any, depth = Number.MAX_SAFE_INTEGER, indent = 2) {
  return JSON.stringify(
    traverse(obj),
    null,
    indent,
  )

  function traverse(o: any, level: number = 0, pointer: string = '#') {
    if (level > depth) {
      return `󰆐 ${pointer}`
    }

    if (typeof o !== 'object') {
      return o
    }

    const isArr = Array.isArray(o)
    const result = isArr ? [] : {} as any

    Object.entries(o)
      .forEach(([k, v]) => {
        result[k] = traverse(v, isArr ? level : level + 1, `${pointer}/${k}`)
      })

    return result
  }
}
