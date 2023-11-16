import { readFile, readdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { exit } from 'node:process'

import consola from 'consola'

import * as lib from './lib'

import type { SomeJSONSchema } from 'ajv/dist/types/json-schema'

/* ***************** Constants ***************** */

const logger = consola.withTag('index')
const schemaPath = resolve('./schema')

/* ***************** Functions ***************** */

async function main() {
  await lib.connect()

  const ss = await readSchemaFiles()

  for (const s of ss) {
    await lib.set(`${s.$id}`, s)
  }

  const ids = await lib.keys('*')
  for (const id of ids) {
    await lib.get<SomeJSONSchema>(id)
      .then((schema) => {
        schema && lib.addSchema(schema, id)
      })
  }

  for (const id of ids) {
    const s = lib.getSchema(id)
    if (s?.source) {
      await writeFile(
        resolve(`.out/${s.source.validateName}.js`),
        s.source?.validateCode,
      )
    }

    logger.info(
      `schema:${id}`,
      JSON.stringify(s?.schema, null, 2),
    )
  }

  await lib.disconnect()
}

async function readSchemaFiles() {
  const files = await readdir(schemaPath)
  const schemas = await Promise.all(files.map(async (file) => {
    const filePath = resolve(schemaPath, file)
    const content = await readFile(filePath, 'utf-8')

    return JSON.parse(content) as SomeJSONSchema
  }))

  return schemas
}

/* ***************** Run ***************** */

main()
  .catch((err) => {
    logger.error(err)
    exit(1)
  })
  .finally(() => {
    exit(0)
  })
