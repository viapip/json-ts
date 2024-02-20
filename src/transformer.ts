import { decode, encode } from '@msgpack/msgpack'
import consola from 'consola'

const logger = consola.withTag('server/trpc')

export const transformer = {
  input: {
    serialize: (obj: unknown): Uint8Array => {
      logger.log('input.serialize', obj)

      return encode(obj)
    },
    deserialize: (obj: object) => {
      logger.log('input.deserialize', obj)

      return decode(Object.values(obj))
    },
  },
  output: {
    serialize: (obj: unknown) => {
      logger.log('output.serialize', obj)

      return encode(obj)
    },
    deserialize: (obj: object) => {
      logger.log('output.deserialize', obj)

      return decode(Object.values(obj))
    },
  },
}
