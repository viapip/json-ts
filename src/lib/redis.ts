import * as process from 'node:process'

import consola from 'consola'
import { createClient } from 'redis'

const logger = consola.withTag('redis')

const client = createClient({
  url: `${process.env.REDIS_URL}`,
})
  .on('error', (err) => {
    return logger.error(err)
  })
  .on('connect', () => {
    return logger.info('connect')
  })
  .on('end', () => {
    return logger.info('disconnect')
  })

export async function getSchema<T>(id: string) {
  return get<T>(`schema:${id}`)
}

export async function setSchema<T>(id: string, schema: T) {
  return set(`schema:${id}`, schema)
}

export async function disconnect() {
  return client.disconnect()
}

export async function connect() {
  return client.connect()
}

export async function ping() {
  return client.ping()
}

export async function get<T>(path: string) {
  return client.json.get(path) as T
}

export async function set<T>(path: string, value: T) {
  return client.json.set(path, '$', value as any)
}

export async function del(path: string) {
  return client.json.del(path)
}

export async function keys(pattern: string) {
  return client.keys(pattern)
}
