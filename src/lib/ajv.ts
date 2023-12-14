import Ajv from 'ajv'
import standalone from 'ajv/dist/standalone'
import consola from 'consola'

import { getSchema as loadSchema } from './redis'

import type { AnySchema, AnySchemaObject, JSONSchemaType, ValidateFunction } from 'ajv/dist/core'

const logger = consola.withTag('ajv')

const ajv = new Ajv({
  schemaId: '$id',

  logger,
  loadSchema,

  meta: true,
  strict: true,
  verbose: true,
  messages: true,
  allErrors: true,
  inlineRefs: true,
  passContext: true,
  ownProperties: true,
  validateSchema: true,
  allowUnionTypes: true,

  code: {
    esm: true,
    source: true,
    optimize: true,
  },
})

export function validate<T, S extends AnySchema = JSONSchemaType<T>>(schema: S | string, data: T) {
  return ajv.validate<T>(schema, data)
}

export function compile<S extends AnySchema>(schema: S) {
  return ajv.compile<S>(schema)
}

export function addSchema<S extends AnySchema>(schema: S, id: string) {
  ajv.addSchema(schema, id)
}

export function compileAsync<S extends AnySchemaObject>(schema: S) {
  return ajv.compileAsync<S>(schema)
}

export function standaloneCode<S extends AnySchema>(validate: ValidateFunction<S>) {
  return standalone(ajv, validate)
}

export function getSchema<S extends AnySchema = AnySchema>(id: string) {
  return ajv.getSchema<S>(id)
}
