import consola from 'consola'
import { z } from 'zod'

import { validateJTDSchema } from '../ajv'
import { publicProcedure, router } from '../trpc'

const logger = consola.withTag('server/users')

export const schemaRouter = router({
  schemaList: publicProcedure
    .query(async ({ ctx: { redis } }) => {
      const schemas = await redis.schema.getAll()

      return schemas
    }),

  schemaById: publicProcedure
    .input(z.string())
    .query(async ({ input, ctx: { redis, queue } }) => {
      const job = await queue.add(input, { message: input })
      logger.log('Added user to queue:', job.id)
      const schema = await redis.schema.getOneById(input)

      return schema
    }),

  schemaCreate: publicProcedure
    .input(validateJTDSchema())
    .mutation(async ({ input, ctx: { redis } }) => {
      // validateSchema('user', input)
      const schema = await redis.schema.insert(input)

      return schema
    }),
})

export type SchemaRouter = typeof schemaRouter
