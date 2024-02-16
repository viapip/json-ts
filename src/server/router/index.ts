import { router } from '../trpc'

import { usersRouter } from './users'

// Merge routers together
export const appRouter = router({
  users: usersRouter,
})

export type AppRouter = typeof appRouter
