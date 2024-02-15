import { createDb } from './db'

import type { User } from './db'
import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone'
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws'

export async function createContext({ req }: CreateHTTPContextOptions | CreateWSSContextFnOptions) {
  const db = {
    user: await createDb<User>('user'),
  }

  return { db, req }
}

export type Context = Awaited<ReturnType<typeof createContext>>
