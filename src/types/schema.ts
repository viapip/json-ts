import type { Schema as SchemaOrBoolean } from '@exodus/schemasafe'

type ExtractObjectType<T> = T extends object ? T : never
export type Schema = ExtractObjectType<SchemaOrBoolean>
