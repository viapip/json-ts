import http from 'node:http'

import { createHTTPHandler } from '@trpc/server/adapters/standalone'
import { applyWSSHandler } from '@trpc/server/adapters/ws'
import { WebSocketServer } from 'ws'

// import consola from 'consola'

import { createContext } from './context'
import { appRouter } from './routers'

import type { AppRouter } from './routers'

// const logger = consola.withTag('server')

const app = createHTTPHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      console.error('Something went wrong', error)
    }
  },
})

export const server = http.createServer(app)

const wss = new WebSocketServer({ server })
applyWSSHandler<AppRouter>({
  wss,
  router: appRouter,
  createContext,
})

// wss.on('connection', logger.log)
