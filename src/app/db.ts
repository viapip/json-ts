// import consola from 'consola'
import { createClient } from 'redis'

export interface User { id: string, name: string }

// const logger = consola.withTag('db')

export async function createDb<T>(prefix = '') {
  const connection = createClient({ url: 'redis://redis:6379' })
  await connection.connect()

  const formatPattern = (...args: string[]) => {
    return [prefix, ...args].join(':')
  }

  const count = async () => {
    const pattern = formatPattern('*')
    const keys = await connection.keys(pattern)

    return keys.length
  }

  const create = async (data: { name: string }) => {
    const c = await count()
    const id = `${c + 1}`
    const pattern = formatPattern(id)
    connection.json.set(pattern, '$', { id, ...data })

    return { id, ...data } as T
  }

  const findMany = async () => {
    const pattern = formatPattern('*')
    const userKeys = await connection.keys(pattern)
    if (userKeys.length === 0) {
      return []
    }

    const users = await connection.json.mGet(userKeys, '$')

    return users as T[]
  }

  const findById = async (id: string) => {
    const pattern = formatPattern(id)
    const item = await connection.json.get(pattern) as T
    if (!item) {
      return undefined
    }

    return item as T
  }

  return {
    count,
    create,
    findById,
    findMany,
  }
}
