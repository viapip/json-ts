import { router } from '../trpc'

import { postRouter } from './posts'
import { usersRouter } from './users'

// Merge routers together
export const appRouter = router({
  users: usersRouter,
  post: postRouter,
})

export type AppRouter = typeof appRouter
