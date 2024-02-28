import { TRPCError } from '@trpc/server'
import Ajv from 'ajv/dist/jtd'
import localize from 'ajv-i18n/localize/ru'

import { userSchema } from './schema'

// import consola from 'consola'
// const logger = consola.withTag('ajv')

export const ajv = new Ajv({
  jtd: true,
  meta: true,

  discriminator: true,
  parseDate: true,
  inlineRefs: true,
  allErrors: true,
  messages: false,
})

ajv.addSchema(userSchema, 'user')

export function validateSchema(schemaId: string, data: unknown) {
  const valid = ajv.validate(schemaId, data)

  if (!valid) {
    localize(ajv.errors)

    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: ajv.errorsText(ajv.errors, { separator: '\n' }),
      cause: ajv.errors,
    })
  }
}
