import * as process from 'node:process'

import consola from 'consola'
import { createClient } from 'redis'

const logger = consola.withTag('redis')

const client = createClient({
  url: `${process.env.REDIS_URL}`,
})
  .on('error', logger.error)

export async function disconnect() {
  await client.disconnect()
}

export async function connect() {
  await client.connect()
}

export async function get<T>(path: string) {
  const data = await client.json.get(path)
  if (!data) {
    return null
  }

  return data as T
}

export async function set<T>(path: string, value: T) {
  await client.json.set(path, '$', value as any)
}

export async function del(path: string) {
  await client.json.del(path)
}

export async function exists(path: string) {
  const data = await get(path)
  if (!data) {
    return false
  }

  return true
}

export async function keys(pattern: string) {
  const keys = await client.keys(pattern)

  return keys
}
