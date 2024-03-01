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
// const fieldGroups = group(fields, (field) => {
//   return field.group
// })

const fieldsJTD = new Map<string, Field[]>()

for (const fieldItem of fields) {
  const fieldsGroup = fieldsJTD.get(fieldItem.group) || []

  fieldsGroup.push(fieldItem)
  fieldsJTD.set(fieldItem.group, fieldsGroup)
}

fieldsJTD.forEach((value, key) => {
  const convertedField = convertFields(value)
  const preparedI18n = convertToI18n(value)
  console.log(preparedI18n)
  writeFile(`./defs/${key}.jtd.json`, convertedField)
  writeFile(`./locales/ru/${key}.i18n.json`, preparedI18n)
})

function converterI18n(object: Record<string, any>, path: string = '') {
  return Object.entries(object)
    .reduce((sum, [k, v]) => {
      const p = path ? `${path}.${k}` : `${k}`

      if (typeof v === 'object') {
        sum = { ...sum, ...converterI18n(v, p) }

        return sum
      }
      sum[p] = v

      return sum
    }, {})
}

function convertToI18n(fields: Field[]) {
  return fields.reduce((sum, field) => {
    sum[field._id] = converterI18n(field)

    return sum
  }, {})
}

function writeFile(path: string, data: unknown) {
  fs.writeFile(path, `${JSON.stringify(data, null, 2)}\n`, {
    encoding: 'utf8',
    flag: 'w',
  })
}

function convertFields(
  fields: Field[] | undefined,
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
