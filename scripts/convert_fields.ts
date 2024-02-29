import fs from 'node:fs/promises'

import { fork, keys } from 'radash'

import type { AnySchema } from 'ajv'

export type JTDFieldType = 'string' | 'int32' | 'boolean' | 'enum'

export interface Field {
  _id: string
  mandate: number
  group: string
  info: Info
  type: 10 | 20 | 30 | 40
  validation: string
  values?: Record<string, string>
}

export interface Info {
  name: string
  group_name: string
}

// const logger = consola.withTag('convert:fields')

const fieldsTypeMap: Record<Field['type'], JTDFieldType> = {
  10: 'string',
  20: 'int32',
  30: 'boolean',
  40: 'enum',
}

const fieldsJson = await fs.readFile('./data/fields.json', 'utf8')
const fields: Field[] = JSON.parse(fieldsJson)

const fieldsJTD = new Map<string, { metadata: Record<string, Partial<Field>>; items: Field[] }>()

for (const fieldItem of fields) {
  const fieldsGroup = fieldsJTD.get(fieldItem.group) || {
    metadata: {},
    items: [],
  }

  fieldsGroup.metadata[fieldItem._id] = {
    info: fieldItem.info,
    group: fieldItem.group,
    mandate: fieldItem.mandate,
  }

  fieldsGroup.items.push(fieldItem)
  fieldsJTD.set(fieldItem.group, fieldsGroup)
}

fieldsJTD.forEach((value, key) => {
  const convertedField = convertFields(value.items, value.metadata)

  fs.writeFile(`./defs/${key}.jtd.json`, `${JSON.stringify(convertedField, null, 2)}\n`, {
    encoding: 'utf8',
    flag: 'w',
  })
})

function convertFields(
  fields: Field[] | undefined,
  metadata: Record<string, Partial<Field>>,
): AnySchema {
  if (!fields) {
    return {}
  }

  const [required, optional] = fork(fields, (field) => {
    return !field.validation.startsWith('omitempty')
  })

  const properties = required.reduce((sum, field) => {
    sum[field._id] = fieldToJTD(field)

    return sum
  }, {})

  const optionalProperties = optional.reduce((sum, field) => {
    sum[field._id] = fieldToJTD(field)

    return sum
  }, {})

  return {
    metadata,
    properties,
    optionalProperties: optional.length > 0
      ? optionalProperties
      : false,
  }
}

function fieldToJTD(field: Field): any {
  const type = fieldsTypeMap[field.type]

  if (type === 'enum') {
    return {
      enum: keys(field.values || {}),
    }
  }

  return {
    type,
  }
}
