import Ajv from 'ajv/dist/jtd'
import localize from 'ajv-i18n/localize/ru'
import consola from 'consola'

import { userSchema } from './schema'

const logger = consola.withTag('ajv')

export const ajv = new Ajv({
  jtd: true,
  meta: true,

  inlineRefs: true,
  allErrors: true,
  messages: false,
})

ajv.addSchema(userSchema, 'user')

export function validateSchema(schema: string, data: unknown) {
  const valid = ajv.validate(schema, data)

  if (!valid) {
    localize(ajv.errors)
    logger.error(ajv.errors)
    logger.log(ajv.errorsText(ajv.errors, { separator: '\n' }))
  }
}
