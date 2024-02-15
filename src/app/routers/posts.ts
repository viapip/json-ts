import { observable } from '@trpc/server/observable'
import { z } from 'zod'

import { publicProcedure, router, wsProcedure } from '../trpc'

export const postRouter = router({
  createPost: publicProcedure
    .input(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    )
    .mutation(({ input }) => {
      // imagine db call here
      return {
        id: `${Math.random()}`,
        ...input,
      }
    }),

  randomNumber: wsProcedure.subscription(({ ctx: { db } }) => {
    let index = 0

    return observable<{ user?: any }>((emit) => {
      const timer = setInterval(async () => {
        index++
        const user = await db.user.findById(index.toString())
        emit.next({ user })
      }, 100)

      return () => {
        clearInterval(timer)
      }
    })
  }),
})
