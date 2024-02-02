import consola from 'consola'
import { createApp, defineEventHandler } from 'h3'

const logger = consola.withTag('schema')
const app = createApp()

app.use('/', defineEventHandler((event) => {
  logger.info(event.context)
  logger.info(event.node.req.url)
}))

export default app
