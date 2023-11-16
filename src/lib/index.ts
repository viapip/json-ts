import Ajv from 'ajv/dist/jtd'
import consola from 'consola'

import type { DefinedError } from 'ajv'
import type { ErrorObject, JTDDataType, SomeJTDSchemaType } from 'ajv/dist/jtd'

const logger = consola.withTag('typescript-template')

export class ValidationError extends Error {
  cause: DefinedError[] = []

  constructor(errors: ErrorObject[]) {
    const cause: DefinedError[] = []

    let message = ''
    for (const i in errors) {
      const err = errors[i] as DefinedError
      cause.push(err)

      switch (err.keyword) {
        default:
          message += `\n  - ${err.keyword}: ${err.message}`
          break
      }
    }

    super(message)

    this.cause = cause
    this.name = 'ValidationError'
  }
}

export const ajv = new Ajv({
  logger,
  jtd: true,
  allErrors: true,
  verbose: true,
  passContext: true,
  removeAdditional: 'all',

  strictTypes: 'log',
  strictSchema: 'log',
  validateSchema: 'log',

  code: {
    lines: true,
    source: true,
    esm: true,
  },
})

export function defineSchema<S extends SomeJTDSchemaType>(schema: S) {
  return schema
}
export function createValidator<
  S extends SomeJTDSchemaType,
  T = JTDDataType<S>,
>(schema: S) {
  const validator = ajv.compile<S>(schema, true)

  return (data: T) => {
    if (!validator(data)) {
      throw new ValidationError(validator.errors!)
    }

    return data
  }
}
