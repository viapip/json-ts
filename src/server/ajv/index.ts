import { TRPCError } from '@trpc/server'
import Ajv from 'ajv/dist/jtd'
import localize from 'ajv-i18n/localize/ru'
import consola from 'consola'

import type { JTDShemas } from './schema'
import type { AnySchema, AnySchemaObject, KeywordCxt } from 'ajv/dist/jtd'

const logger = consola.withTag('ajv')

export const ajv = new Ajv({
  jtd: true,
  meta: true,

  discriminator: true,
  parseDate: true,
  inlineRefs: true,
  allErrors: true,
  messages: false,
})

ajv.addKeyword({
  keyword: 'name',
  type: 'string',
  schemaType: 'string',
  code(context: KeywordCxt) {
    const { data, schema } = context
    if (data !== schema) {
      context.fail()
    }
  },
})

// ajv.addSchema(userSchema, 'user')

export function validateJTDSchema() {
  return (data: unknown) => {
    logger.info('validateJTDSchema', data)
    const validate = ajv.compile(data as AnySchema)
    logger.info('validateJTDSchema', validate.schema)
    if (validate.schema) {
      return data as AnySchemaObject
    }

    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: ajv.errorsText(ajv.errors, { separator: '\n' }),
      cause: ajv.errors,
    })
  }
}

export function validateSchema<T extends keyof JTDShemas>(schema: T) {
  return (i: unknown) => {
    const valid = ajv.validate(schema as string, i)

    if (valid) {
      return i as JTDShemas[T]
    }

    localize(ajv.errors)
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: ajv.errorsText(ajv.errors, { separator: '\n' }),
      cause: ajv.errors,
    })
  }
}
