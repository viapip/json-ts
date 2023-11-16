import Ajv from 'ajv'
import consola from 'consola'

import type { SomeJSONSchema } from 'ajv/dist/types/json-schema'

const logger = consola.withTag('ajv')

const ajv = new Ajv({
  logger,

  schemaId: '$id',

  meta: true,
  strict: true,
  verbose: true,
  messages: true,
  allErrors: true,
  inlineRefs: true,
  passContext: true,
  ownProperties: true,
  validateSchema: true,

  code: {
    esm: true,
    source: true,
    optimize: true,
  },
})

export function addSchema<S extends SomeJSONSchema>(schema: S, id: string) {
  ajv.addSchema(schema, id)
}

export function getSchema<S extends SomeJSONSchema>(id: string) {
  return ajv.getSchema<S>(id)
}
