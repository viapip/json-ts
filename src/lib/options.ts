import fs from 'node:fs'

import * as c12 from 'c12'

import * as schema from '~/lib/schema'

import type { ValidatorOptions } from '@exodus/schemasafe'

interface Config {
  refsDir: string
  defsDir: string
  outDir: string

  schemaUrls: Record<string, string>

  options: ValidatorOptions
}

export async function loadOptions() {
  const { config } = await loadConfig()
  if (!config) {
    throw new Error('Config file was not specified')
  }

  const { refsDir, defsDir, outDir, schemaUrls, options } = config

  if (!fs.existsSync(refsDir)) {
    fs.mkdirSync(refsDir, { recursive: true })
    await schema.vendorSchemas(schemaUrls, refsDir)
  }

  fs.mkdirSync(outDir, { recursive: true })

  const defs = await schema.readSchemas(defsDir)
  if (!defs.size) {
    throw new Error('Definitions directory is empty')
  }

  const schemas = await schema.readSchemas(refsDir)
  options.schemas = schemas

  return options
}

export function loadConfig() {
  return c12.loadConfig<Config>({
    name: 'schema',

    defaultConfig: {
      defsDir: './defs',
      outDir: './dist',
      refsDir: './vendor',

      schemaUrls: {},

      options: {
        mode: 'struct',
        allErrors: true,
        useDefaults: false,
        requireSchema: true,
        includeErrors: true,
        weakFormats: false,
        extraFormats: true,
        formatAssertion: true,
        complexityChecks: true,
        contentValidation: true,
        removeAdditional: false,
        requireStringValidation: false,
        requireValidation: true,
      },
    },
  })
}
