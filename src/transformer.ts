import { decode, encode } from '@msgpack/msgpack'
import consola from 'consola'

const logger = consola.withTag('server/trpc')

export const transformer = {
  input: {
    serialize: (obj: unknown) => {
      logger.log('input.serialize', obj)
      if (!obj) {
        return
      }

      return encode(obj)
    },
    deserialize: (obj: unknown) => {
      logger.log('input.deserialize', obj)
      if (!obj) {
        return
      }

      return decode(Object.values(obj))
    },
  },
  output: {
    serialize: (obj: unknown) => {
      logger.log('output.serialize', obj)

      if (!obj) {
        return
      }

      return encode(obj)
    },
    deserialize: (obj: unknown) => {
      logger.log('output.deserialize', obj)
      if (!obj) {
        return
      }

      return decode(Object.values(obj))
    },
  },
}
