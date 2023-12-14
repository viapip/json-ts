import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import consola from 'consola'

import { compileAsync, standaloneCode } from './lib/ajv'
import { connect, disconnect, setSchema } from './lib/redis'

import type { AnySchemaObject } from 'ajv'

/* ***************** Constants ***************** */
const logger = consola.withTag('index')

const testSchema: AnySchemaObject = {
  $id: 'test',
  $async: true,
  $schema: 'http://json-schema.org/draft-07/schema#',

  title: 'Test Schema',
  type: 'object',
  properties: {
    name: { type: 'string' },
    tileJSON: { $ref: 'tilejson' },
    featureCollection: { $ref: 'geojson' },
  },
  required: ['tileJSON', 'featureCollection'],
  additionalProperties: false,
}
const testData = {
  name: 'validate',
  tileJSON: {
    tiles: ['https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'],
    tilejson: '2.1.0',
    vector_layers: [
      {
        id: 'validate',
        description: '',
        fields: {},
      },
    ],
  },
  featureCollection: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          name: 'validate',
        },
        geometry: {
          type: 'Point',
          coordinates: [0, 0],
        },
      },
    ],
  },
}

/* ***************** Functions ***************** */
async function main() {
  await connect()
  await loadDefinitions('./schema')

  const validate = await compileAsync(testSchema)
  await writeFile('.out/test.cjs', standaloneCode(validate))
  const v = await import('../.out/test.cjs')

  const ok = await validate(testData)
  if (!ok) {
    logger.warn('validate', validate.errors)
  }

  await disconnect()
}

async function loadDefinitions(path: string) {
  const files = await readdir(path)

  for (const file of files) {
    const key = file.slice(0, -5)
    const schema = await readFile(join(path, file), 'utf8')
      .then((data) => {
        return JSON.parse(data)
      })

    logger.info(`schema:${key}`, schema)
    await setSchema(key, schema)
  }
}

/* ***************** Run ***************** */
main()
