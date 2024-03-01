// import consola from 'consola'
import { createClient } from 'redis'

// import type { AnySchemaObject } from 'ajv'
import type { AnySchemaObject } from 'ajv/lib/jtd'

export interface User { id: string; name: string }

export const connection = createClient({ url: 'redis://redis:6379' })
await connection.connect()

export const redis = await createRedisStore()

export async function createRedisStore() {
  return {
    users: createCRUD<User>('user'),
    schema: createCRUD<AnySchemaObject & { metadata: { name: string } }>('schema'),
  }
}

function createCRUD<T extends { id?: string }>(prefix = '') {
  const formatPattern = (...args: string[]) => {
    return [prefix, ...args].join(':')
  }

  const keyExists = async (id: string) => {
    const pattern = formatPattern(id)
    const exists = await connection.exists(pattern)

    return exists === 1
  }

  const getKeys = async () => {
    const pattern = formatPattern('*')
    const keys = await connection.keys(pattern)

    return keys
  }

  const deleteManyById = async (...ids: string[]) => {
    const pattern = ids.map((id) => {
      return formatPattern(id)
    })

    await connection.del(pattern)

    return true
  }

  const deleteOneById = async (id: string) => {
    const pattern = formatPattern(id)
    await connection.del(pattern)

    return true
  }

  const insert = async (data: Omit<T, 'id'>) => {
    const id = `${(await getKeys()).length + 1}`
    const item = { id, ...data }

    const pattern = formatPattern(id)
    connection.json.set(pattern, '$', item)

    return item as T
  }

  const getAll = async () => {
    const userKeys = await getKeys()
    if (userKeys.length === 0) {
      return []
    }

    const items = await connection.json.mGet(userKeys, '$')

    return items.flat() as T[]
  }

  const getManyById = async (...ids: string[]) => {
    const pattern = ids.map((id) => {
      return formatPattern(id)
    })
    const items = await connection.json.mGet(pattern, '$')

    return items as T[]
  }

  const getOneById = async (id: string) => {
    const pattern = formatPattern(id)
    const item = await connection.json.get(pattern) as T
    if (!item) {
      return
    }

    return item as T
  }

  const updateById = async (id: string, data: Partial<Omit<T, 'id'>>) => {
    const pattern = formatPattern(id)
    const existingItem = await connection.json.get(pattern) as T | undefined
    if (!existingItem) {
      throw new Error(`Item not found: ${id} `)
    }

    const updatedItem = { ...existingItem, ...data }
    await connection.json.set(pattern, '$', updatedItem)

    return updatedItem as T
  }

  return {
    getKeys,
    keyExists,
    insert,
    updateById,
    getOneById,
    getManyById,
    getAll,
    deleteOneById,
    deleteManyById,
  }
}
