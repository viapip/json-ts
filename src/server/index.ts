import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { applyWSSHandler } from '@trpc/server/adapters/ws'
import consola from 'consola'
import { WebSocketServer } from 'ws'

import { ajv, validateJTDSchema } from './ajv'
import { testSchema, userSchema } from './ajv/schema'
import { createContext } from './context'
import { redis } from './redis'
import { appRouter } from './router'

import type { AppRouter } from './router'

const logger = consola.withTag('server')
await addSchemaToRedisTEST()
await initSchemaLoader()

export const app = createHTTPServer({
  router: appRouter,
  createContext,

  batching: { enabled: true },

  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      logger.error('Something went wrong', error)
    }
  },
})

const wss = new WebSocketServer(app)
applyWSSHandler<AppRouter>({
  wss,
  router: appRouter,
  batching: { enabled: true },
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      logger.error('Something went wrong', error)
    }
  },
  createContext,
})

app.listen(4000)

async function initSchemaLoader() {
  const listSchemas = await redis.schema.getAll()
  logger.info('listSchemas', listSchemas)
  for (const schema of listSchemas) {
    delete schema.id
    const name = schema.metadata.name
    if (!ajv.getSchema(name)) {
      ajv.addSchema(schema, name)
    }
  }
}

async function addSchemaToRedisTEST() {
  const array = [userSchema, testSchema]
  for (const schema of array) {
    try {
      const validatedSchema = validateJTDSchema()(schema)
      await redis.schema.insert(validatedSchema)
    }
    catch (e) {
      logger.info('error validate')
    }
  }
}
