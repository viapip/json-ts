import { createTRPCProxyClient, createWSClient, wsLink } from '@trpc/client'
import consola from 'consola'
import { WebSocket } from 'ws'

import type { AppRouter } from '../server/router'

const logger = consola.withTag('client')

const wsClient = createWSClient({
  url() {
    return 'ws://localhost:4000'
  },
  WebSocket: WebSocket as any,
  onOpen() {
    logger.log('connected')
  },
  onClose() {
    logger.log('disconnected')
  },
})

const trpc = createTRPCProxyClient<AppRouter>({
  links: [wsLink({ client: wsClient })],
})

const users = await trpc.users.userList.query()
logger.log('Users:', users)

const createdUser = await trpc.users.userCreate.mutate({ name: 'sachinraja' })
logger.log('Created user:', createdUser)

for (let i = 0; i < 10; i++) {
  trpc.users.userById.query(i.toString())
    .then((user) => {
      logger.log('User:', user)
    })
}

trpc.users.randomNumber.subscribe(undefined, {
  onStarted() {
    logger.log('started')
  },
  onData(data) {
    logger.log('job done', data)
  },
  onComplete() {
    logger.log('complete')
  },
  onError(err) {
    logger.error('error', err)
  },
})
