import { observable } from '@trpc/server/observable'
import consola from 'consola'
import { z } from 'zod'

import { validateSchema } from '../ajv'
import { publicProcedure, router, wsProcedure } from '../trpc'

import { queueEvents } from '~/server/queue/events'
import { sleep } from '~/utils'

const logger = consola.withTag('server/users')

export const usersRouter = router({
  userList: publicProcedure
    .query(async ({ ctx: { redis } }) => {
      const users = await redis.users.getAll()

      return users
    }),

  userById: publicProcedure
    .input(z.string())
    .query(async ({ input, ctx: { redis, queue } }) => {
      const job = await queue.add(input, { message: input })
      logger.log('Added user to queue:', job.id)

      await sleep(input === '1' ? 1000 : 0)
      const user = await redis.users.getOneById(input)

      return user
    }),

  userCreate: publicProcedure
    .input(validateSchema('user'))
    .mutation(async ({ input, ctx: { redis } }) => {
      // const validatedData = validateSchema('user', '', input)
      const user = await redis.users.insert(input)

      return user
    }),

  userUpdate: publicProcedure
    .input(validateSchema('user'))
    .mutation(async ({ input }) => {
      // const user = await redis.users.updateById(input)

      return input
    }),

  randomNumber: wsProcedure
    .subscription(() => {
      return observable<{ status: number }>((emit) => {
        queueEvents.on('completed', ({ returnvalue }) => {
          const next = returnvalue as unknown as { status: number }
          emit.next(next)
        })
      })
    }),
})

export type UsersRouter = typeof usersRouter
