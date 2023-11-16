import * as fs from 'node:fs'
import * as path from 'node:path'
import * as process from 'node:process'

import consola from 'consola'

import * as lib from './lib'

import type { SomeJSONSchema } from 'ajv/dist/types/json-schema'

const logger = consola.withTag('index')

/* ***************** Data ***************** */

const ss: SomeJSONSchema[] = [
  {
    $id: 'foo',

    type: 'object',
    required: ['bar'],
    properties: {
      bar: { type: 'string' },
    },
    additionalProperties: false,
  },
  {
    $id: 'bar',

    type: 'object',
    required: ['baz'],
    properties: {
      bar: { type: 'string' },
      baz: { $ref: 'foo' },
    },
    additionalProperties: {
      type: 'object',
      required: ['bar1'],
      properties: {
        bar1: {
          $ref: '#/properties/bar',
        },
      },
    },
  },
]

/* ***************** Functions ***************** */

async function main() {
  await lib.connect()

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
      fs.writeFileSync(
        path.resolve(`.out/${s.source.validateName}.js`),
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

/* ***************** Main ***************** */

main()
  .catch((err) => {
    logger.error(err)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
