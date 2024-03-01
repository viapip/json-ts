import type { JTDDataType } from 'ajv/dist/jtd'

export const userSchema = {
  metadata: {
    name: 'user',
  },
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    // test: {}
    // age: { type: 'int8' },
  },
} as const

// export const definitions = {
//   properties: {
//     userProp: {
//       properties: {
//         name: { type: 'string' },
//       },
//     },
//   },
// }

export const testSchema = {
  metadata: {
    name: 'test',
  },
  // definitions: {
  //   coordinates: {
  //     ref: '$user',
  //   },
  // },
  // properties: {
  //   userLoc: { ref: 'coordinates' },
  //   serverLoc: { ref: 'coordinates' },
  // },
} as const
export interface JTDShemas {
  user: JTDDataType<typeof userSchema>
}
