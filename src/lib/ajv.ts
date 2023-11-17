import Ajv from 'ajv'
import standalone from 'ajv/dist/standalone'
import consola from 'consola'

import type { AnyValidateFunction } from 'ajv/dist/core'
import type { JSONSchema7 } from 'json-schema'

const logger = consola.withTag('ajv')

const ajv = new Ajv({
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

  logger,

  code: {
    esm: true,
    source: true,
    optimize: true,
  },
})

export function addSchema<S extends JSONSchema7>(schema: S, id: string) {
  ajv.addSchema(schema, id)
}

export function getSchema<S extends JSONSchema7 = JSONSchema7>(id: string) {
  return ajv.getSchema<S | string>(id)
}

export function standaloneCode<V extends AnyValidateFunction>(schema: V) {
  return standalone(ajv, schema)
}
