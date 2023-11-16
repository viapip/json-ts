import * as fs from 'node:fs'
import * as path from 'node:path'
import * as process from 'node:process'

import consola from 'consola'

import { addSchema, getSchema } from './lib/ajv'
import { connect, disconnect, get, keys, set } from './lib/redis'

import type { SomeJSONSchema } from 'ajv/dist/types/json-schema'

const logger = consola.withTag('index')

const ss: SomeJSONSchema[] = [
  {
    $id: 'foo',

    type: 'object',
    required: ['bar'],
    properties: {
      bar: {
        type: 'string',
      },
    },

  },

  {
    $id: 'bar',

    type: 'object',
    required: ['baz'],
    properties: {
      baz: {
        $ref: 'foo',
      },
    },
  },
]

async function run() {
  await connect()

  for (const s of ss) {
    await set(`${s.$id}`, s)
  }

  const ids = await keys('*')
  for (const id of ids) {
    await get<SomeJSONSchema>(id)
      .then((schema) => {
        schema && addSchema(schema, id)
      })
  }

  for (const id of ids) {
    const s = getSchema(id)
    if (s?.source) {
      fs.writeFileSync(
        path.resolve(`.out/${s.source.validateName}.js`),
        s.source?.validateCode,
      )
    }

    logger.info('schema', s)
  }

  await disconnect()
}

run()
  .catch((err) => {
    logger.error(err)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
