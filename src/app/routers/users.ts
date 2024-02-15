import { z } from 'zod'

import { publicProcedure, router } from '../trpc'

async function sleep(ms: number) {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms)
  })
}

export const usersRouter = router({
  userList: publicProcedure
    .query(async ({ ctx: { db } }) => {
      const users = await db.user.findMany()

      return users
    }),

  userById: publicProcedure
    .input(z.string())
    .query(async ({ input, ctx: { db } }) => {
      await sleep(input === '1' ? 1000 : 0)
      const user = await db.user.findById(input)

      return user
    }),

  userCreate: publicProcedure
    .input(z.object({
      name: z.string(),
    }))
    .mutation(async ({ input, ctx: { db } }) => {
      const user = await db.user.create(input)

      return user
    }),
})

export type UsersRouter = typeof usersRouter
