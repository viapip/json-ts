import consola from 'consola'

const logger = consola.withTag('server/trpc')

export const transformer = {
  input: {
    serialize: (obj: unknown) => {
      logger.log('input.serialize', obj)

      return obj
    },
    deserialize: (obj: unknown) => {
      logger.log('input.deserialize', obj)

      return obj
    },
  },
  output: {
    serialize: (obj: unknown) => {
      logger.log('output.serialize', obj)

      return obj
    },
    deserialize: (obj: unknown) => {
      logger.log('output.deserialize', obj)

      return obj
    },
  },
}
