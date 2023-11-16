import * as fs from 'node:fs'
import * as path from 'node:path'
import * as process from 'node:process'

import consola from 'consola'

import { addSchema, getSchema } from './lib/ajv'
import { connect, get, keys } from './lib/redis'

import type { SomeJTDSchemaType } from 'ajv/dist/core'

const logger = consola.withTag('index')

const schemas: Record<string, SomeJTDSchemaType> = {
  'definitions:foo': {
    properties: { foo: { type: 'int32' } },
    optionalProperties: { bar: { type: 'string' } },
  },

  'definitions:bar': {
    properties: { bar: { type: 'int32' } },
    optionalProperties: { foo: { ref: 'definitions:foo' } },
  },
}

async function run() {
  await connect()

  for (const [id, schema] of Object.entries(schemas)) {
    addSchema(schema, id)
  }

  const definitionsIds = await keys('definitions:*')
  for (const id of definitionsIds) {
    const schema = await get<SomeJTDSchemaType>(id)
    if (!schema) {
      continue
    }

    addSchema(schema, id)

    const definition = getSchema(id)
    if (!definition || !definition.source) {
      continue
    }

    fs.writeFileSync(
      path.resolve(`.out/${definition.source.validateName}.js`),
      definition.source?.validateCode,
    )

    logger.info(definition)
  }
}

run()
  .catch((err) => {
    logger.error(err)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
