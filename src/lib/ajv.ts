import Ajv from 'ajv'
import consola from 'consola'

import type { SomeJSONSchema } from 'ajv/dist/types/json-schema'

const logger = consola.withTag('ajv')

const ajv = new Ajv({
  logger,

  jtd: true,
  schemaId: '$id',
  timestamp: 'date',

  meta: true,
  verbose: true,
  messages: true,
  allErrors: true,
  passContext: true,
  validateSchema: true,
  ownProperties: true,
  strictTypes: true,
  inlineRefs: true,

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
