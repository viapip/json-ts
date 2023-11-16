import Ajv from 'ajv/dist/jtd'
import consola from 'consola'

import type { SomeJTDSchemaType } from 'ajv/dist/jtd'

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
  inlineRefs: true,
  uriResolver: {
    resolve(base, path) {
      logger.info({ base, path })

      return new URL(path, base).href
    },
    parse(uri) {
      logger.info({ uri })

      return new URL(uri)
    },
    serialize(component) {
      logger.info({ component })

      return component.path || ''
    },
  },

  code: {
    esm: true,
    source: true,
    lines: true,
    optimize: true,
  },
})

export function addSchema<S extends SomeJTDSchemaType>(schema: S, id: string) {
  ajv.addSchema(schema, id, true, true)
}

export function getSchema<S extends SomeJTDSchemaType>(id: string) {
  return ajv.getSchema<S>(id)
}
