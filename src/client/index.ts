import { createTRPCProxyClient, createWSClient, wsLink } from '@trpc/client'
import consola from 'consola'
import { WebSocket } from 'ws'

import type { AppRouter } from '~/server/router'
import { transformer } from '~/transformer'

const logger = consola.withTag('client')

const wsClient = createWSClient({
  url: 'ws://localhost:4000',
  WebSocket: WebSocket as any,
})

const ws = wsClient.getConnection()

ws.addEventListener(
  'open',
  () => {
    logger.log('Connection opened')
  },
)
ws.addEventListener(
  'close',
  () => {
    logger.log('Connection closed')
  },
)
ws.addEventListener(
  'message',
  ({ data, type }) => {
    logger.log(type, data.toString())
  },
)
ws.addEventListener(
  'error',
  (err) => {
    logger.error('Connection error', err)
  },
)

const trpc = createTRPCProxyClient<AppRouter>({
  links: [wsLink({ client: wsClient })],
  transformer,
})

const users = await trpc.users.userList.query()
logger.log('Users:', users)

const createdUser = await trpc.users.userCreate.mutate({
  name: 'Test',
})
logger.log('Created user:', createdUser)

for (let i = 0; i < 10; i++) {
  trpc.users.userById.query(i.toString())
    .then((user) => {
      logger.log('User:', user?.id)
    })
}

trpc.users.randomNumber.subscribe(undefined, {
  onStarted() {
    logger.log('Started')
  },
  onData(data) {
    logger.log('Job done', data.status)
  },
  onComplete() {
    logger.log('Complete')
  },
  onError(err) {
    logger.error('Error', err)
  },
})
