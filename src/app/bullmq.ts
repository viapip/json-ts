import { Queue } from 'bullmq'
import IORedis from 'ioredis'

// Create a connection to Redis
export const connection = new IORedis({
  host: 'redis',
  port: 6379,
})

// Create a new Queue
export const queue = new Queue('myQueue', {
  connection,
})
