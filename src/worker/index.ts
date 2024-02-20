import { Worker } from 'bullmq'
import consola from 'consola'

import { sleep } from '~/utils'

const logger = consola.withTag('worker')

const worker = new Worker<
{ message: string },
{ status: number }
>('appQueue',
  async (job) => {
    if (job.data.message === '1') {
      await sleep(1000)
    }

    logger.log('Message received', job.data.message)

    return { status: 200 + Number(job.data.message) }
  },
  {
    concurrency: 100,
    connection: {
      host: 'redis',
      port: 6379,
    },
  },
)

worker.on('completed', (job) => {
  logger.log('Job completed', job?.returnvalue.status)
})

worker.on('failed', (job, err) => {
  logger.error('Job failed', job?.data, err)
})
