import { observable } from '@trpc/server/observable'
import { QueueEvents } from 'bullmq'
import consola from 'consola'
import { z } from 'zod'

import { publicProcedure, router, wsProcedure } from '../trpc'

import { sleep } from '~/utils'

const logger = consola.withTag('server/users')

const queueEvents = new QueueEvents('appQueue', {
  connection: {
    host: 'redis',
    port: 6379,
  },
})

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
    .input(z.object({
      name: z.string(),
    }))
    .mutation(async ({ input, ctx: { redis } }) => {
      const user = await redis.users.insert(input)

      return user
    }),

  randomNumber: wsProcedure.subscription(() => {
    return observable<{ status: number }>((emit) => {
      queueEvents.on('completed', ({ returnvalue }: { returnvalue: any }) => {
        const next = returnvalue as { status: number }
        emit.next(next)
      })
    })
  }),
})

export type UsersRouter = typeof usersRouter
