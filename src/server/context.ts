import { queue } from '~/server/queue'
import { createRedisStore } from '~/server/redis'

import { validateSchema } from './ajv'

import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone'
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws'

const redis = await createRedisStore()

export async function createContext(
  _opts: CreateHTTPContextOptions | CreateWSSContextFnOptions,
) {
  return {
    validateSchema,
    queue,
    redis,
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>
