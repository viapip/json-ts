import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import consola from 'consola'

import * as lib from './lib'

import type { JSONSchema7 } from 'json-schema'

/* ***************** Constants ***************** */

const logger = consola.withTag('index')
const schemaMap = new Map<string, JSONSchema7 | string>([
  ['geojson', 'https://geojson.org/schema/FeatureCollection.json'],
  ['tilejson', './schema/tilejson.json'],
])

/* ***************** Functions ***************** */

async function main() {
  await lib.connect()
  await loadSchema()

  const ids = await lib.keys('schema:*')
  for (const id of ids) {
    await lib.get<JSONSchema7>(id)
      .then((schema) => {
        schema && lib.addSchema(schema, id)
      })
  }

  for (const id of ids) {
    const validator = lib.getSchema(id)
    if (validator?.source) {
      await writeFile(
        resolve(`.out/${id}.js`),
        lib.standaloneCode(validator),
      )
    }

    logger.info(
      `schema:${id}`,
      JSON.stringify(validator?.schema, null, 2),
    )
  }

  await lib.disconnect()
}

async function loadSchema() {
  for (const [id, schema] of schemaMap) {
    if (typeof schema === 'string') {
      lib.getSchema(schema)
      continue
    }

    lib.addSchema(schema, id)
  }
}

/* ***************** Run ***************** */

main()
