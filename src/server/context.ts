import { queue } from '../queue'
import { createRedisStore } from '../redis'

import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone'
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws'

const redis = await createRedisStore()

export async function createContext(
  _opts: CreateHTTPContextOptions | CreateWSSContextFnOptions,
) {
  return {
    queue,
    redis,
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>
