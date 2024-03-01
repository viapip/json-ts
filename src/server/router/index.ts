import { router } from '../trpc'

import { schemaRouter } from './schema'
import { usersRouter } from './users'

// Merge routers together
export const appRouter = router({
  users: usersRouter,
  schema: schemaRouter,
})

export type AppRouter = typeof appRouter
