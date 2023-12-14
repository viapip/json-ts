'use strict'; export const validate = validate12; export default validate12; const Error0 = require('ajv/dist/runtime/validation_error').default

const schema11 = { $id: 'test', $async: true, $schema: 'http://json-schema.org/draft-07/schema#', title: 'Test Schema', type: 'object', properties: { name: { type: 'string' }, tileJSON: { $ref: 'tilejson' }, featureCollection: { $ref: 'geojson' } }, required: ['tileJSON', 'featureCollection'], additionalProperties: false }; const schema13 = { $id: 'tilejson', $schema: 'http://json-schema.org/draft-07/schema', additionalProperties: true, properties: { attribution: { type: 'string' }, bounds: { items: { type: 'number' }, type: 'array' }, center: { items: { type: 'number' }, type: 'array' }, data: { items: { type: 'string' }, type: 'array' }, description: { type: 'string' }, fillzoom: { maximum: 30, minimum: 0, type: 'integer' }, grids: { items: { type: 'string' }, type: 'array' }, legend: { type: 'string' }, maxzoom: { maximum: 30, minimum: 0, type: 'integer' }, minzoom: { maximum: 30, minimum: 0, type: 'integer' }, name: { type: 'string' }, scheme: { type: 'string' }, template: { type: 'string' }, tilejson: { pattern: '\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*', type: 'string' }, tiles: { items: { type: 'string' }, type: 'array' }, vector_layers: { items: { additionalProperties: true, properties: { description: { type: 'string' }, fields: { additionalProperties: { type: 'string' }, type: 'object' }, id: { type: 'string' }, maxzoom: { type: 'integer' }, minzoom: { type: 'integer' } }, required: ['id', 'fields'], type: 'object' }, type: 'array' }, version: { pattern: '\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*', type: 'string' } }, required: ['tilejson', 'tiles', 'vector_layers'], title: 'TileJSON', type: 'object' }; const schema16 = { $id: 'geojson', $schema: 'http://json-schema.org/draft-07/schema', properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, features: { items: { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, geometry: { oneOf: [{ type: 'null' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { type: 'number' }, minItems: 2, type: 'array' }, type: { enum: ['Point'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON Point', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, minItems: 2, type: 'array' }, type: { enum: ['LineString'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON LineString', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, minItems: 4, type: 'array' }, type: 'array' }, type: { enum: ['Polygon'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON Polygon', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, type: 'array' }, type: { enum: ['MultiPoint'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON MultiPoint', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, minItems: 2, type: 'array' }, type: 'array' }, type: { enum: ['MultiLineString'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON MultiLineString', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, minItems: 4, type: 'array' }, type: 'array' }, type: 'array' }, type: { enum: ['MultiPolygon'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON MultiPolygon', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, geometries: { items: { oneOf: [{ properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { type: 'number' }, minItems: 2, type: 'array' }, type: { enum: ['Point'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON Point', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, minItems: 2, type: 'array' }, type: { enum: ['LineString'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON LineString', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, minItems: 4, type: 'array' }, type: 'array' }, type: { enum: ['Polygon'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON Polygon', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, type: 'array' }, type: { enum: ['MultiPoint'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON MultiPoint', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, minItems: 2, type: 'array' }, type: 'array' }, type: { enum: ['MultiLineString'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON MultiLineString', type: 'object' }, { properties: { bbox: { items: { type: 'number' }, minItems: 4, type: 'array' }, coordinates: { items: { items: { items: { items: { type: 'number' }, minItems: 2, type: 'array' }, minItems: 4, type: 'array' }, type: 'array' }, type: 'array' }, type: { enum: ['MultiPolygon'], type: 'string' } }, required: ['type', 'coordinates'], title: 'GeoJSON MultiPolygon', type: 'object' }] }, type: 'array' }, type: { enum: ['GeometryCollection'], type: 'string' } }, required: ['type', 'geometries'], title: 'GeoJSON GeometryCollection', type: 'object' }] }, id: { oneOf: [{ type: 'number' }, { type: 'string' }] }, properties: { oneOf: [{ type: 'null' }, { type: 'object' }] }, type: { enum: ['Feature'], type: 'string' } }, required: ['type', 'properties', 'geometry'], title: 'GeoJSON Feature', type: 'object' }, type: 'array' }, type: { enum: ['FeatureCollection'], type: 'string' } }, required: ['type', 'features'], title: 'GeoJSON FeatureCollection', type: 'object' }; const func0 = Object.prototype.hasOwnProperty; const pattern0 = new RegExp('\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*', 'u'); async function validate12(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /* # sourceURL="test" */;let vErrors = null; let errors = 0; if (data && typeof data == 'object' && !Array.isArray(data)) {
    if ((data.tileJSON === undefined) || (!(func0.call(data, 'tileJSON')))) {
      const err0 = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'tileJSON' }, message: 'must have required property \'' + 'tileJSON' + '\'', schema: schema11.required, parentSchema: schema11, data }; if (vErrors === null) {
        vErrors = [err0]
      }
      else {
        vErrors.push(err0)
      }errors++
    } if ((data.featureCollection === undefined) || (!(func0.call(data, 'featureCollection')))) {
      const err1 = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'featureCollection' }, message: 'must have required property \'' + 'featureCollection' + '\'', schema: schema11.required, parentSchema: schema11, data }; if (vErrors === null) {
        vErrors = [err1]
      }
      else {
        vErrors.push(err1)
      }errors++
    } for (const key0 of Object.keys(data)) {
      if (!(((key0 === 'name') || (key0 === 'tileJSON')) || (key0 === 'featureCollection'))) {
        const err2 = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema11, data }; if (vErrors === null) {
          vErrors = [err2]
        }
        else {
          vErrors.push(err2)
        }errors++
      }
    } if (data.name !== undefined && func0.call(data, 'name')) {
      const data0 = data.name; if (typeof data0 !== 'string') {
        const err3 = { instancePath: `${instancePath}/name`, schemaPath: '#/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema11.properties.name.type, parentSchema: schema11.properties.name, data: data0 }; if (vErrors === null) {
          vErrors = [err3]
        }
        else {
          vErrors.push(err3)
        }errors++
      }
    } if (data.tileJSON !== undefined && func0.call(data, 'tileJSON')) {
      const data1 = data.tileJSON; if (data1 && typeof data1 == 'object' && !Array.isArray(data1)) {
        if ((data1.tilejson === undefined) || (!(func0.call(data1, 'tilejson')))) {
          const err4 = { instancePath: `${instancePath}/tileJSON`, schemaPath: 'tilejson/required', keyword: 'required', params: { missingProperty: 'tilejson' }, message: 'must have required property \'' + 'tilejson' + '\'', schema: schema13.required, parentSchema: schema13, data: data1 }; if (vErrors === null) {
            vErrors = [err4]
          }
          else {
            vErrors.push(err4)
          }errors++
        } if ((data1.tiles === undefined) || (!(func0.call(data1, 'tiles')))) {
          const err5 = { instancePath: `${instancePath}/tileJSON`, schemaPath: 'tilejson/required', keyword: 'required', params: { missingProperty: 'tiles' }, message: 'must have required property \'' + 'tiles' + '\'', schema: schema13.required, parentSchema: schema13, data: data1 }; if (vErrors === null) {
            vErrors = [err5]
          }
          else {
            vErrors.push(err5)
          }errors++
        } if ((data1.vector_layers === undefined) || (!(func0.call(data1, 'vector_layers')))) {
          const err6 = { instancePath: `${instancePath}/tileJSON`, schemaPath: 'tilejson/required', keyword: 'required', params: { missingProperty: 'vector_layers' }, message: 'must have required property \'' + 'vector_layers' + '\'', schema: schema13.required, parentSchema: schema13, data: data1 }; if (vErrors === null) {
            vErrors = [err6]
          }
          else {
            vErrors.push(err6)
          }errors++
        } if (data1.attribution !== undefined && func0.call(data1, 'attribution')) {
          const data2 = data1.attribution; if (typeof data2 !== 'string') {
            const err7 = { instancePath: `${instancePath}/tileJSON/attribution`, schemaPath: 'tilejson/properties/attribution/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.attribution.type, parentSchema: schema13.properties.attribution, data: data2 }; if (vErrors === null) {
              vErrors = [err7]
            }
            else {
              vErrors.push(err7)
            }errors++
          }
        } if (data1.bounds !== undefined && func0.call(data1, 'bounds')) {
          const data3 = data1.bounds; if (Array.isArray(data3)) {
            const len0 = data3.length; for (let i0 = 0; i0 < len0; i0++) {
              const data4 = data3[i0]; if (!((typeof data4 == 'number') && (isFinite(data4)))) {
                const err8 = { instancePath: `${instancePath}/tileJSON/bounds/${i0}`, schemaPath: 'tilejson/properties/bounds/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema13.properties.bounds.items.type, parentSchema: schema13.properties.bounds.items, data: data4 }; if (vErrors === null) {
                  vErrors = [err8]
                }
                else {
                  vErrors.push(err8)
                }errors++
              }
            }
          }
          else {
            const err9 = { instancePath: `${instancePath}/tileJSON/bounds`, schemaPath: 'tilejson/properties/bounds/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema13.properties.bounds.type, parentSchema: schema13.properties.bounds, data: data3 }; if (vErrors === null) {
              vErrors = [err9]
            }
            else {
              vErrors.push(err9)
            }errors++
          }
        } if (data1.center !== undefined && func0.call(data1, 'center')) {
          const data5 = data1.center; if (Array.isArray(data5)) {
            const len1 = data5.length; for (let i1 = 0; i1 < len1; i1++) {
              const data6 = data5[i1]; if (!((typeof data6 == 'number') && (Number.isFinite(data6)))) {
                const err10 = { instancePath: `${instancePath}/tileJSON/center/${i1}`, schemaPath: 'tilejson/properties/center/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema13.properties.center.items.type, parentSchema: schema13.properties.center.items, data: data6 }; if (vErrors === null) {
                  vErrors = [err10]
                }
                else {
                  vErrors.push(err10)
                }errors++
              }
            }
          }
          else {
            const err11 = { instancePath: `${instancePath}/tileJSON/center`, schemaPath: 'tilejson/properties/center/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema13.properties.center.type, parentSchema: schema13.properties.center, data: data5 }; if (vErrors === null) {
              vErrors = [err11]
            }
            else {
              vErrors.push(err11)
            }errors++
          }
        } if (data1.data !== undefined && func0.call(data1, 'data')) {
          const data7 = data1.data; if (Array.isArray(data7)) {
            const len2 = data7.length; for (let i2 = 0; i2 < len2; i2++) {
              const data8 = data7[i2]; if (typeof data8 !== 'string') {
                const err12 = { instancePath: `${instancePath}/tileJSON/data/${i2}`, schemaPath: 'tilejson/properties/data/items/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.data.items.type, parentSchema: schema13.properties.data.items, data: data8 }; if (vErrors === null) {
                  vErrors = [err12]
                }
                else {
                  vErrors.push(err12)
                }errors++
              }
            }
          }
          else {
            const err13 = { instancePath: `${instancePath}/tileJSON/data`, schemaPath: 'tilejson/properties/data/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema13.properties.data.type, parentSchema: schema13.properties.data, data: data7 }; if (vErrors === null) {
              vErrors = [err13]
            }
            else {
              vErrors.push(err13)
            }errors++
          }
        } if (data1.description !== undefined && func0.call(data1, 'description')) {
          const data9 = data1.description; if (typeof data9 !== 'string') {
            const err14 = { instancePath: `${instancePath}/tileJSON/description`, schemaPath: 'tilejson/properties/description/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.description.type, parentSchema: schema13.properties.description, data: data9 }; if (vErrors === null) {
              vErrors = [err14]
            }
            else {
              vErrors.push(err14)
            }errors++
          }
        } if (data1.fillzoom !== undefined && func0.call(data1, 'fillzoom')) {
          const data10 = data1.fillzoom; if (!(((typeof data10 == 'number') && (!(data10 % 1) && !Number.isNaN(data10))) && (Number.isFinite(data10)))) {
            const err15 = { instancePath: `${instancePath}/tileJSON/fillzoom`, schemaPath: 'tilejson/properties/fillzoom/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema13.properties.fillzoom.type, parentSchema: schema13.properties.fillzoom, data: data10 }; if (vErrors === null) {
              vErrors = [err15]
            }
            else {
              vErrors.push(err15)
            }errors++
          } if ((typeof data10 == 'number') && (Number.isFinite(data10))) {
            if (data10 > 30 || isNaN(data10)) {
              const err16 = { instancePath: `${instancePath}/tileJSON/fillzoom`, schemaPath: 'tilejson/properties/fillzoom/maximum', keyword: 'maximum', params: { comparison: '<=', limit: 30 }, message: 'must be <= 30', schema: 30, parentSchema: schema13.properties.fillzoom, data: data10 }; if (vErrors === null) {
                vErrors = [err16]
              }
              else {
                vErrors.push(err16)
              }errors++
            } if (data10 < 0 || Number.isNaN(data10)) {
              const err17 = { instancePath: `${instancePath}/tileJSON/fillzoom`, schemaPath: 'tilejson/properties/fillzoom/minimum', keyword: 'minimum', params: { comparison: '>=', limit: 0 }, message: 'must be >= 0', schema: 0, parentSchema: schema13.properties.fillzoom, data: data10 }; if (vErrors === null) {
                vErrors = [err17]
              }
              else {
                vErrors.push(err17)
              }errors++
            }
          }
        } if (data1.grids !== undefined && func0.call(data1, 'grids')) {
          const data11 = data1.grids; if (Array.isArray(data11)) {
            const len3 = data11.length; for (let i3 = 0; i3 < len3; i3++) {
              const data12 = data11[i3]; if (typeof data12 !== 'string') {
                const err18 = { instancePath: `${instancePath}/tileJSON/grids/${i3}`, schemaPath: 'tilejson/properties/grids/items/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.grids.items.type, parentSchema: schema13.properties.grids.items, data: data12 }; if (vErrors === null) {
                  vErrors = [err18]
                }
                else {
                  vErrors.push(err18)
                }errors++
              }
            }
          }
          else {
            const err19 = { instancePath: `${instancePath}/tileJSON/grids`, schemaPath: 'tilejson/properties/grids/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema13.properties.grids.type, parentSchema: schema13.properties.grids, data: data11 }; if (vErrors === null) {
              vErrors = [err19]
            }
            else {
              vErrors.push(err19)
            }errors++
          }
        } if (data1.legend !== undefined && func0.call(data1, 'legend')) {
          const data13 = data1.legend; if (typeof data13 !== 'string') {
            const err20 = { instancePath: `${instancePath}/tileJSON/legend`, schemaPath: 'tilejson/properties/legend/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.legend.type, parentSchema: schema13.properties.legend, data: data13 }; if (vErrors === null) {
              vErrors = [err20]
            }
            else {
              vErrors.push(err20)
            }errors++
          }
        } if (data1.maxzoom !== undefined && func0.call(data1, 'maxzoom')) {
          const data14 = data1.maxzoom; if (!(((typeof data14 == 'number') && (!(data14 % 1) && !isNaN(data14))) && (isFinite(data14)))) {
            const err21 = { instancePath: `${instancePath}/tileJSON/maxzoom`, schemaPath: 'tilejson/properties/maxzoom/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema13.properties.maxzoom.type, parentSchema: schema13.properties.maxzoom, data: data14 }; if (vErrors === null) {
              vErrors = [err21]
            }
            else {
              vErrors.push(err21)
            }errors++
          } if ((typeof data14 == 'number') && (isFinite(data14))) {
            if (data14 > 30 || isNaN(data14)) {
              const err22 = { instancePath: `${instancePath}/tileJSON/maxzoom`, schemaPath: 'tilejson/properties/maxzoom/maximum', keyword: 'maximum', params: { comparison: '<=', limit: 30 }, message: 'must be <= 30', schema: 30, parentSchema: schema13.properties.maxzoom, data: data14 }; if (vErrors === null) {
                vErrors = [err22]
              }
              else {
                vErrors.push(err22)
              }errors++
            } if (data14 < 0 || isNaN(data14)) {
              const err23 = { instancePath: `${instancePath}/tileJSON/maxzoom`, schemaPath: 'tilejson/properties/maxzoom/minimum', keyword: 'minimum', params: { comparison: '>=', limit: 0 }, message: 'must be >= 0', schema: 0, parentSchema: schema13.properties.maxzoom, data: data14 }; if (vErrors === null) {
                vErrors = [err23]
              }
              else {
                vErrors.push(err23)
              }errors++
            }
          }
        } if (data1.minzoom !== undefined && func0.call(data1, 'minzoom')) {
          const data15 = data1.minzoom; if (!(((typeof data15 == 'number') && (!(data15 % 1) && !isNaN(data15))) && (isFinite(data15)))) {
            const err24 = { instancePath: `${instancePath}/tileJSON/minzoom`, schemaPath: 'tilejson/properties/minzoom/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema13.properties.minzoom.type, parentSchema: schema13.properties.minzoom, data: data15 }; if (vErrors === null) {
              vErrors = [err24]
            }
            else {
              vErrors.push(err24)
            }errors++
          } if ((typeof data15 == 'number') && (isFinite(data15))) {
            if (data15 > 30 || isNaN(data15)) {
              const err25 = { instancePath: `${instancePath}/tileJSON/minzoom`, schemaPath: 'tilejson/properties/minzoom/maximum', keyword: 'maximum', params: { comparison: '<=', limit: 30 }, message: 'must be <= 30', schema: 30, parentSchema: schema13.properties.minzoom, data: data15 }; if (vErrors === null) {
                vErrors = [err25]
              }
              else {
                vErrors.push(err25)
              }errors++
            } if (data15 < 0 || isNaN(data15)) {
              const err26 = { instancePath: `${instancePath}/tileJSON/minzoom`, schemaPath: 'tilejson/properties/minzoom/minimum', keyword: 'minimum', params: { comparison: '>=', limit: 0 }, message: 'must be >= 0', schema: 0, parentSchema: schema13.properties.minzoom, data: data15 }; if (vErrors === null) {
                vErrors = [err26]
              }
              else {
                vErrors.push(err26)
              }errors++
            }
          }
        } if (data1.name !== undefined && func0.call(data1, 'name')) {
          const data16 = data1.name; if (typeof data16 !== 'string') {
            const err27 = { instancePath: `${instancePath}/tileJSON/name`, schemaPath: 'tilejson/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.name.type, parentSchema: schema13.properties.name, data: data16 }; if (vErrors === null) {
              vErrors = [err27]
            }
            else {
              vErrors.push(err27)
            }errors++
          }
        } if (data1.scheme !== undefined && func0.call(data1, 'scheme')) {
          const data17 = data1.scheme; if (typeof data17 !== 'string') {
            const err28 = { instancePath: `${instancePath}/tileJSON/scheme`, schemaPath: 'tilejson/properties/scheme/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.scheme.type, parentSchema: schema13.properties.scheme, data: data17 }; if (vErrors === null) {
              vErrors = [err28]
            }
            else {
              vErrors.push(err28)
            }errors++
          }
        } if (data1.template !== undefined && func0.call(data1, 'template')) {
          const data18 = data1.template; if (typeof data18 !== 'string') {
            const err29 = { instancePath: `${instancePath}/tileJSON/template`, schemaPath: 'tilejson/properties/template/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.template.type, parentSchema: schema13.properties.template, data: data18 }; if (vErrors === null) {
              vErrors = [err29]
            }
            else {
              vErrors.push(err29)
            }errors++
          }
        } if (data1.tilejson !== undefined && func0.call(data1, 'tilejson')) {
          const data19 = data1.tilejson; if (typeof data19 === 'string') {
            if (!pattern0.test(data19)) {
              const err30 = { instancePath: `${instancePath}/tileJSON/tilejson`, schemaPath: 'tilejson/properties/tilejson/pattern', keyword: 'pattern', params: { pattern: '\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*' }, message: 'must match pattern "' + '\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*' + '"', schema: '\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*', parentSchema: schema13.properties.tilejson, data: data19 }; if (vErrors === null) {
                vErrors = [err30]
              }
              else {
                vErrors.push(err30)
              }errors++
            }
          }
          else {
            const err31 = { instancePath: `${instancePath}/tileJSON/tilejson`, schemaPath: 'tilejson/properties/tilejson/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.tilejson.type, parentSchema: schema13.properties.tilejson, data: data19 }; if (vErrors === null) {
              vErrors = [err31]
            }
            else {
              vErrors.push(err31)
            }errors++
          }
        } if (data1.tiles !== undefined && func0.call(data1, 'tiles')) {
          const data20 = data1.tiles; if (Array.isArray(data20)) {
            const len4 = data20.length; for (let i4 = 0; i4 < len4; i4++) {
              const data21 = data20[i4]; if (typeof data21 !== 'string') {
                const err32 = { instancePath: `${instancePath}/tileJSON/tiles/${i4}`, schemaPath: 'tilejson/properties/tiles/items/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.tiles.items.type, parentSchema: schema13.properties.tiles.items, data: data21 }; if (vErrors === null) {
                  vErrors = [err32]
                }
                else {
                  vErrors.push(err32)
                }errors++
              }
            }
          }
          else {
            const err33 = { instancePath: `${instancePath}/tileJSON/tiles`, schemaPath: 'tilejson/properties/tiles/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema13.properties.tiles.type, parentSchema: schema13.properties.tiles, data: data20 }; if (vErrors === null) {
              vErrors = [err33]
            }
            else {
              vErrors.push(err33)
            }errors++
          }
        } if (data1.vector_layers !== undefined && func0.call(data1, 'vector_layers')) {
          const data22 = data1.vector_layers; if (Array.isArray(data22)) {
            const len5 = data22.length; for (let i5 = 0; i5 < len5; i5++) {
              const data23 = data22[i5]; if (data23 && typeof data23 == 'object' && !Array.isArray(data23)) {
                if ((data23.id === undefined) || (!(func0.call(data23, 'id')))) {
                  const err34 = { instancePath: `${instancePath}/tileJSON/vector_layers/${i5}`, schemaPath: 'tilejson/properties/vector_layers/items/required', keyword: 'required', params: { missingProperty: 'id' }, message: 'must have required property \'' + 'id' + '\'', schema: schema13.properties.vector_layers.items.required, parentSchema: schema13.properties.vector_layers.items, data: data23 }; if (vErrors === null) {
                    vErrors = [err34]
                  }
                  else {
                    vErrors.push(err34)
                  }errors++
                } if ((data23.fields === undefined) || (!(func0.call(data23, 'fields')))) {
                  const err35 = { instancePath: `${instancePath}/tileJSON/vector_layers/${i5}`, schemaPath: 'tilejson/properties/vector_layers/items/required', keyword: 'required', params: { missingProperty: 'fields' }, message: 'must have required property \'' + 'fields' + '\'', schema: schema13.properties.vector_layers.items.required, parentSchema: schema13.properties.vector_layers.items, data: data23 }; if (vErrors === null) {
                    vErrors = [err35]
                  }
                  else {
                    vErrors.push(err35)
                  }errors++
                } if (data23.description !== undefined && func0.call(data23, 'description')) {
                  const data24 = data23.description; if (typeof data24 !== 'string') {
                    const err36 = { instancePath: `${instancePath}/tileJSON/vector_layers/${i5}/description`, schemaPath: 'tilejson/properties/vector_layers/items/properties/description/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.vector_layers.items.properties.description.type, parentSchema: schema13.properties.vector_layers.items.properties.description, data: data24 }; if (vErrors === null) {
                      vErrors = [err36]
                    }
                    else {
                      vErrors.push(err36)
                    }errors++
                  }
                } if (data23.fields !== undefined && func0.call(data23, 'fields')) {
                  const data25 = data23.fields; if (data25 && typeof data25 == 'object' && !Array.isArray(data25)) {
                    for (const key1 of Object.keys(data25)) {
                      const data26 = data25[key1]; if (typeof data26 !== 'string') {
                        const err37 = { instancePath: `${instancePath}/tileJSON/vector_layers/${i5}/fields/${key1.replace(/~/g, '~0')
.replace(/\//g, '~1')}`, schemaPath: 'tilejson/properties/vector_layers/items/properties/fields/additionalProperties/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.vector_layers.items.properties.fields.additionalProperties.type, parentSchema: schema13.properties.vector_layers.items.properties.fields.additionalProperties, data: data26 }; if (vErrors === null) {
                          vErrors = [err37]
                        }
                        else {
                          vErrors.push(err37)
                        }errors++
                      }
                    }
                  }
                  else {
                    const err38 = { instancePath: `${instancePath}/tileJSON/vector_layers/${i5}/fields`, schemaPath: 'tilejson/properties/vector_layers/items/properties/fields/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema13.properties.vector_layers.items.properties.fields.type, parentSchema: schema13.properties.vector_layers.items.properties.fields, data: data25 }; if (vErrors === null) {
                      vErrors = [err38]
                    }
                    else {
                      vErrors.push(err38)
                    }errors++
                  }
                } if (data23.id !== undefined && func0.call(data23, 'id')) {
                  const data27 = data23.id; if (typeof data27 !== 'string') {
                    const err39 = { instancePath: `${instancePath}/tileJSON/vector_layers/${i5}/id`, schemaPath: 'tilejson/properties/vector_layers/items/properties/id/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.vector_layers.items.properties.id.type, parentSchema: schema13.properties.vector_layers.items.properties.id, data: data27 }; if (vErrors === null) {
                      vErrors = [err39]
                    }
                    else {
                      vErrors.push(err39)
                    }errors++
                  }
                } if (data23.maxzoom !== undefined && func0.call(data23, 'maxzoom')) {
                  const data28 = data23.maxzoom; if (!(((typeof data28 == 'number') && (!(data28 % 1) && !isNaN(data28))) && (isFinite(data28)))) {
                    const err40 = { instancePath: `${instancePath}/tileJSON/vector_layers/${i5}/maxzoom`, schemaPath: 'tilejson/properties/vector_layers/items/properties/maxzoom/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema13.properties.vector_layers.items.properties.maxzoom.type, parentSchema: schema13.properties.vector_layers.items.properties.maxzoom, data: data28 }; if (vErrors === null) {
                      vErrors = [err40]
                    }
                    else {
                      vErrors.push(err40)
                    }errors++
                  }
                } if (data23.minzoom !== undefined && func0.call(data23, 'minzoom')) {
                  const data29 = data23.minzoom; if (!(((typeof data29 == 'number') && (!(data29 % 1) && !isNaN(data29))) && (isFinite(data29)))) {
                    const err41 = { instancePath: `${instancePath}/tileJSON/vector_layers/${i5}/minzoom`, schemaPath: 'tilejson/properties/vector_layers/items/properties/minzoom/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema13.properties.vector_layers.items.properties.minzoom.type, parentSchema: schema13.properties.vector_layers.items.properties.minzoom, data: data29 }; if (vErrors === null) {
                      vErrors = [err41]
                    }
                    else {
                      vErrors.push(err41)
                    }errors++
                  }
                }
              }
              else {
                const err42 = { instancePath: `${instancePath}/tileJSON/vector_layers/${i5}`, schemaPath: 'tilejson/properties/vector_layers/items/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema13.properties.vector_layers.items.type, parentSchema: schema13.properties.vector_layers.items, data: data23 }; if (vErrors === null) {
                  vErrors = [err42]
                }
                else {
                  vErrors.push(err42)
                }errors++
              }
            }
          }
          else {
            const err43 = { instancePath: `${instancePath}/tileJSON/vector_layers`, schemaPath: 'tilejson/properties/vector_layers/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema13.properties.vector_layers.type, parentSchema: schema13.properties.vector_layers, data: data22 }; if (vErrors === null) {
              vErrors = [err43]
            }
            else {
              vErrors.push(err43)
            }errors++
          }
        } if (data1.version !== undefined && func0.call(data1, 'version')) {
          const data30 = data1.version; if (typeof data30 === 'string') {
            if (!pattern0.test(data30)) {
              const err44 = { instancePath: `${instancePath}/tileJSON/version`, schemaPath: 'tilejson/properties/version/pattern', keyword: 'pattern', params: { pattern: '\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*' }, message: 'must match pattern "' + '\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*' + '"', schema: '\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*', parentSchema: schema13.properties.version, data: data30 }; if (vErrors === null) {
                vErrors = [err44]
              }
              else {
                vErrors.push(err44)
              }errors++
            }
          }
          else {
            const err45 = { instancePath: `${instancePath}/tileJSON/version`, schemaPath: 'tilejson/properties/version/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema13.properties.version.type, parentSchema: schema13.properties.version, data: data30 }; if (vErrors === null) {
              vErrors = [err45]
            }
            else {
              vErrors.push(err45)
            }errors++
          }
        }
      }
      else {
        const err46 = { instancePath: `${instancePath}/tileJSON`, schemaPath: 'tilejson/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema13.type, parentSchema: schema13, data: data1 }; if (vErrors === null) {
          vErrors = [err46]
        }
        else {
          vErrors.push(err46)
        }errors++
      }
    } if (data.featureCollection !== undefined && func0.call(data, 'featureCollection')) {
      const data31 = data.featureCollection; if (data31 && typeof data31 == 'object' && !Array.isArray(data31)) {
        if ((data31.type === undefined) || (!(func0.call(data31, 'type')))) {
          const err47 = { instancePath: `${instancePath}/featureCollection`, schemaPath: 'geojson/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.required, parentSchema: schema16, data: data31 }; if (vErrors === null) {
            vErrors = [err47]
          }
          else {
            vErrors.push(err47)
          }errors++
        } if ((data31.features === undefined) || (!(func0.call(data31, 'features')))) {
          const err48 = { instancePath: `${instancePath}/featureCollection`, schemaPath: 'geojson/required', keyword: 'required', params: { missingProperty: 'features' }, message: 'must have required property \'' + 'features' + '\'', schema: schema16.required, parentSchema: schema16, data: data31 }; if (vErrors === null) {
            vErrors = [err48]
          }
          else {
            vErrors.push(err48)
          }errors++
        } if (data31.bbox !== undefined && func0.call(data31, 'bbox')) {
          const data32 = data31.bbox; if (Array.isArray(data32)) {
            if (data32.length < 4) {
              const err49 = { instancePath: `${instancePath}/featureCollection/bbox`, schemaPath: 'geojson/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.bbox, data: data32 }; if (vErrors === null) {
                vErrors = [err49]
              }
              else {
                vErrors.push(err49)
              }errors++
            } const len6 = data32.length; for (let i6 = 0; i6 < len6; i6++) {
              const data33 = data32[i6]; if (!((typeof data33 == 'number') && (isFinite(data33)))) {
                const err50 = { instancePath: `${instancePath}/featureCollection/bbox/${i6}`, schemaPath: 'geojson/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.bbox.items.type, parentSchema: schema16.properties.bbox.items, data: data33 }; if (vErrors === null) {
                  vErrors = [err50]
                }
                else {
                  vErrors.push(err50)
                }errors++
              }
            }
          }
          else {
            const err51 = { instancePath: `${instancePath}/featureCollection/bbox`, schemaPath: 'geojson/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.bbox.type, parentSchema: schema16.properties.bbox, data: data32 }; if (vErrors === null) {
              vErrors = [err51]
            }
            else {
              vErrors.push(err51)
            }errors++
          }
        } if (data31.features !== undefined && func0.call(data31, 'features')) {
          const data34 = data31.features; if (Array.isArray(data34)) {
            const len7 = data34.length; for (let i7 = 0; i7 < len7; i7++) {
              const data35 = data34[i7]; if (data35 && typeof data35 == 'object' && !Array.isArray(data35)) {
                if ((data35.type === undefined) || (!(func0.call(data35, 'type')))) {
                  const err52 = { instancePath: `${instancePath}/featureCollection/features/${i7}`, schemaPath: 'geojson/properties/features/items/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.required, parentSchema: schema16.properties.features.items, data: data35 }; if (vErrors === null) {
                    vErrors = [err52]
                  }
                  else {
                    vErrors.push(err52)
                  }errors++
                } if ((data35.properties === undefined) || (!(func0.call(data35, 'properties')))) {
                  const err53 = { instancePath: `${instancePath}/featureCollection/features/${i7}`, schemaPath: 'geojson/properties/features/items/required', keyword: 'required', params: { missingProperty: 'properties' }, message: 'must have required property \'' + 'properties' + '\'', schema: schema16.properties.features.items.required, parentSchema: schema16.properties.features.items, data: data35 }; if (vErrors === null) {
                    vErrors = [err53]
                  }
                  else {
                    vErrors.push(err53)
                  }errors++
                } if ((data35.geometry === undefined) || (!(func0.call(data35, 'geometry')))) {
                  const err54 = { instancePath: `${instancePath}/featureCollection/features/${i7}`, schemaPath: 'geojson/properties/features/items/required', keyword: 'required', params: { missingProperty: 'geometry' }, message: 'must have required property \'' + 'geometry' + '\'', schema: schema16.properties.features.items.required, parentSchema: schema16.properties.features.items, data: data35 }; if (vErrors === null) {
                    vErrors = [err54]
                  }
                  else {
                    vErrors.push(err54)
                  }errors++
                } if (data35.bbox !== undefined && func0.call(data35, 'bbox')) {
                  const data36 = data35.bbox; if (Array.isArray(data36)) {
                    if (data36.length < 4) {
                      const err55 = { instancePath: `${instancePath}/featureCollection/features/${i7}/bbox`, schemaPath: 'geojson/properties/features/items/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.bbox, data: data36 }; if (vErrors === null) {
                        vErrors = [err55]
                      }
                      else {
                        vErrors.push(err55)
                      }errors++
                    } const len8 = data36.length; for (let i8 = 0; i8 < len8; i8++) {
                      const data37 = data36[i8]; if (!((typeof data37 == 'number') && (isFinite(data37)))) {
                        const err56 = { instancePath: `${instancePath}/featureCollection/features/${i7}/bbox/${i8}`, schemaPath: 'geojson/properties/features/items/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.bbox.items, data: data37 }; if (vErrors === null) {
                          vErrors = [err56]
                        }
                        else {
                          vErrors.push(err56)
                        }errors++
                      }
                    }
                  }
                  else {
                    const err57 = { instancePath: `${instancePath}/featureCollection/features/${i7}/bbox`, schemaPath: 'geojson/properties/features/items/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.bbox.type, parentSchema: schema16.properties.features.items.properties.bbox, data: data36 }; if (vErrors === null) {
                      vErrors = [err57]
                    }
                    else {
                      vErrors.push(err57)
                    }errors++
                  }
                } if (data35.geometry !== undefined && func0.call(data35, 'geometry')) {
                  const data38 = data35.geometry; const _errs84 = errors; let valid26 = false; let passing0 = null; const _errs85 = errors; if (data38 !== null) {
                    const err58 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema16.properties.features.items.properties.geometry.oneOf[0].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[0], data: data38 }; if (vErrors === null) {
                      vErrors = [err58]
                    }
                    else {
                      vErrors.push(err58)
                    }errors++
                  } var _valid0 = _errs85 === errors; if (_valid0) {
                    valid26 = true; passing0 = 0
                  } const _errs87 = errors; if (data38 && typeof data38 == 'object' && !Array.isArray(data38)) {
                    if ((data38.type === undefined) || (!(func0.call(data38, 'type')))) {
                      const err59 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[1].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1], data: data38 }; if (vErrors === null) {
                        vErrors = [err59]
                      }
                      else {
                        vErrors.push(err59)
                      }errors++
                    } if ((data38.coordinates === undefined) || (!(func0.call(data38, 'coordinates')))) {
                      const err60 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[1].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1], data: data38 }; if (vErrors === null) {
                        vErrors = [err60]
                      }
                      else {
                        vErrors.push(err60)
                      }errors++
                    } if (data38.bbox !== undefined && func0.call(data38, 'bbox')) {
                      const data39 = data38.bbox; if (Array.isArray(data39)) {
                        if (data39.length < 4) {
                          const err61 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.bbox, data: data39 }; if (vErrors === null) {
                            vErrors = [err61]
                          }
                          else {
                            vErrors.push(err61)
                          }errors++
                        } const len9 = data39.length; for (let i9 = 0; i9 < len9; i9++) {
                          const data40 = data39[i9]; if (!((typeof data40 == 'number') && (isFinite(data40)))) {
                            const err62 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox/${i9}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.bbox.items, data: data40 }; if (vErrors === null) {
                              vErrors = [err62]
                            }
                            else {
                              vErrors.push(err62)
                            }errors++
                          }
                        }
                      }
                      else {
                        const err63 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.bbox, data: data39 }; if (vErrors === null) {
                          vErrors = [err63]
                        }
                        else {
                          vErrors.push(err63)
                        }errors++
                      }
                    } if (data38.coordinates !== undefined && func0.call(data38, 'coordinates')) {
                      const data41 = data38.coordinates; if (Array.isArray(data41)) {
                        if (data41.length < 2) {
                          const err64 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/properties/coordinates/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.coordinates, data: data41 }; if (vErrors === null) {
                            vErrors = [err64]
                          }
                          else {
                            vErrors.push(err64)
                          }errors++
                        } const len10 = data41.length; for (let i10 = 0; i10 < len10; i10++) {
                          const data42 = data41[i10]; if (!((typeof data42 == 'number') && (isFinite(data42)))) {
                            const err65 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i10}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/properties/coordinates/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.coordinates.items, data: data42 }; if (vErrors === null) {
                              vErrors = [err65]
                            }
                            else {
                              vErrors.push(err65)
                            }errors++
                          }
                        }
                      }
                      else {
                        const err66 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.coordinates, data: data41 }; if (vErrors === null) {
                          vErrors = [err66]
                        }
                        else {
                          vErrors.push(err66)
                        }errors++
                      }
                    } if (data38.type !== undefined && func0.call(data38, 'type')) {
                      const data43 = data38.type; if (typeof data43 !== 'string') {
                        const err67 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.type, data: data43 }; if (vErrors === null) {
                          vErrors = [err67]
                        }
                        else {
                          vErrors.push(err67)
                        }errors++
                      } if (!(data43 === 'Point')) {
                        const err68 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[1].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1].properties.type, data: data43 }; if (vErrors === null) {
                          vErrors = [err68]
                        }
                        else {
                          vErrors.push(err68)
                        }errors++
                      }
                    }
                  }
                  else {
                    const err69 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[1].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[1], data: data38 }; if (vErrors === null) {
                      vErrors = [err69]
                    }
                    else {
                      vErrors.push(err69)
                    }errors++
                  } var _valid0 = _errs87 === errors; if (_valid0 && valid26) {
                    valid26 = false; passing0 = [passing0, 1]
                  }
                  else {
                    if (_valid0) {
                      valid26 = true; passing0 = 1
                    } const _errs99 = errors; if (data38 && typeof data38 == 'object' && !Array.isArray(data38)) {
                      if ((data38.type === undefined) || (!(func0.call(data38, 'type')))) {
                        const err70 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[2].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2], data: data38 }; if (vErrors === null) {
                          vErrors = [err70]
                        }
                        else {
                          vErrors.push(err70)
                        }errors++
                      } if ((data38.coordinates === undefined) || (!(func0.call(data38, 'coordinates')))) {
                        const err71 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[2].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2], data: data38 }; if (vErrors === null) {
                          vErrors = [err71]
                        }
                        else {
                          vErrors.push(err71)
                        }errors++
                      } if (data38.bbox !== undefined && func0.call(data38, 'bbox')) {
                        const data44 = data38.bbox; if (Array.isArray(data44)) {
                          if (data44.length < 4) {
                            const err72 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.bbox, data: data44 }; if (vErrors === null) {
                              vErrors = [err72]
                            }
                            else {
                              vErrors.push(err72)
                            }errors++
                          } const len11 = data44.length; for (let i11 = 0; i11 < len11; i11++) {
                            const data45 = data44[i11]; if (!((typeof data45 == 'number') && (isFinite(data45)))) {
                              const err73 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox/${i11}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.bbox.items, data: data45 }; if (vErrors === null) {
                                vErrors = [err73]
                              }
                              else {
                                vErrors.push(err73)
                              }errors++
                            }
                          }
                        }
                        else {
                          const err74 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.bbox, data: data44 }; if (vErrors === null) {
                            vErrors = [err74]
                          }
                          else {
                            vErrors.push(err74)
                          }errors++
                        }
                      } if (data38.coordinates !== undefined && func0.call(data38, 'coordinates')) {
                        const data46 = data38.coordinates; if (Array.isArray(data46)) {
                          if (data46.length < 2) {
                            const err75 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/coordinates/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.coordinates, data: data46 }; if (vErrors === null) {
                              vErrors = [err75]
                            }
                            else {
                              vErrors.push(err75)
                            }errors++
                          } const len12 = data46.length; for (let i12 = 0; i12 < len12; i12++) {
                            const data47 = data46[i12]; if (Array.isArray(data47)) {
                              if (data47.length < 2) {
                                const err76 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i12}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/coordinates/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.coordinates.items, data: data47 }; if (vErrors === null) {
                                  vErrors = [err76]
                                }
                                else {
                                  vErrors.push(err76)
                                }errors++
                              } const len13 = data47.length; for (let i13 = 0; i13 < len13; i13++) {
                                const data48 = data47[i13]; if (!((typeof data48 == 'number') && (isFinite(data48)))) {
                                  const err77 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i12}/${i13}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.coordinates.items.items, data: data48 }; if (vErrors === null) {
                                    vErrors = [err77]
                                  }
                                  else {
                                    vErrors.push(err77)
                                  }errors++
                                }
                              }
                            }
                            else {
                              const err78 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i12}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.coordinates.items, data: data47 }; if (vErrors === null) {
                                vErrors = [err78]
                              }
                              else {
                                vErrors.push(err78)
                              }errors++
                            }
                          }
                        }
                        else {
                          const err79 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.coordinates, data: data46 }; if (vErrors === null) {
                            vErrors = [err79]
                          }
                          else {
                            vErrors.push(err79)
                          }errors++
                        }
                      } if (data38.type !== undefined && func0.call(data38, 'type')) {
                        const data49 = data38.type; if (typeof data49 !== 'string') {
                          const err80 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.type, data: data49 }; if (vErrors === null) {
                            vErrors = [err80]
                          }
                          else {
                            vErrors.push(err80)
                          }errors++
                        } if (!(data49 === 'LineString')) {
                          const err81 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[2].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2].properties.type, data: data49 }; if (vErrors === null) {
                            vErrors = [err81]
                          }
                          else {
                            vErrors.push(err81)
                          }errors++
                        }
                      }
                    }
                    else {
                      const err82 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[2].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[2], data: data38 }; if (vErrors === null) {
                        vErrors = [err82]
                      }
                      else {
                        vErrors.push(err82)
                      }errors++
                    } var _valid0 = _errs99 === errors; if (_valid0 && valid26) {
                      valid26 = false; passing0 = [passing0, 2]
                    }
                    else {
                      if (_valid0) {
                        valid26 = true; passing0 = 2
                      } const _errs113 = errors; if (data38 && typeof data38 == 'object' && !Array.isArray(data38)) {
                        if ((data38.type === undefined) || (!(func0.call(data38, 'type')))) {
                          const err83 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[3].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3], data: data38 }; if (vErrors === null) {
                            vErrors = [err83]
                          }
                          else {
                            vErrors.push(err83)
                          }errors++
                        } if ((data38.coordinates === undefined) || (!(func0.call(data38, 'coordinates')))) {
                          const err84 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[3].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3], data: data38 }; if (vErrors === null) {
                            vErrors = [err84]
                          }
                          else {
                            vErrors.push(err84)
                          }errors++
                        } if (data38.bbox !== undefined && func0.call(data38, 'bbox')) {
                          const data50 = data38.bbox; if (Array.isArray(data50)) {
                            if (data50.length < 4) {
                              const err85 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.bbox, data: data50 }; if (vErrors === null) {
                                vErrors = [err85]
                              }
                              else {
                                vErrors.push(err85)
                              }errors++
                            } const len14 = data50.length; for (let i14 = 0; i14 < len14; i14++) {
                              const data51 = data50[i14]; if (!((typeof data51 == 'number') && (isFinite(data51)))) {
                                const err86 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox/${i14}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.bbox.items, data: data51 }; if (vErrors === null) {
                                  vErrors = [err86]
                                }
                                else {
                                  vErrors.push(err86)
                                }errors++
                              }
                            }
                          }
                          else {
                            const err87 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.bbox, data: data50 }; if (vErrors === null) {
                              vErrors = [err87]
                            }
                            else {
                              vErrors.push(err87)
                            }errors++
                          }
                        } if (data38.coordinates !== undefined && func0.call(data38, 'coordinates')) {
                          const data52 = data38.coordinates; if (Array.isArray(data52)) {
                            const len15 = data52.length; for (let i15 = 0; i15 < len15; i15++) {
                              const data53 = data52[i15]; if (Array.isArray(data53)) {
                                if (data53.length < 4) {
                                  const err88 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i15}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/coordinates/items/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates.items, data: data53 }; if (vErrors === null) {
                                    vErrors = [err88]
                                  }
                                  else {
                                    vErrors.push(err88)
                                  }errors++
                                } const len16 = data53.length; for (let i16 = 0; i16 < len16; i16++) {
                                  const data54 = data53[i16]; if (Array.isArray(data54)) {
                                    if (data54.length < 2) {
                                      const err89 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i15}/${i16}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/coordinates/items/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates.items.items, data: data54 }; if (vErrors === null) {
                                        vErrors = [err89]
                                      }
                                      else {
                                        vErrors.push(err89)
                                      }errors++
                                    } const len17 = data54.length; for (let i17 = 0; i17 < len17; i17++) {
                                      const data55 = data54[i17]; if (!((typeof data55 == 'number') && (isFinite(data55)))) {
                                        const err90 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i15}/${i16}/${i17}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/coordinates/items/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates.items.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates.items.items.items, data: data55 }; if (vErrors === null) {
                                          vErrors = [err90]
                                        }
                                        else {
                                          vErrors.push(err90)
                                        }errors++
                                      }
                                    }
                                  }
                                  else {
                                    const err91 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i15}/${i16}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates.items.items, data: data54 }; if (vErrors === null) {
                                      vErrors = [err91]
                                    }
                                    else {
                                      vErrors.push(err91)
                                    }errors++
                                  }
                                }
                              }
                              else {
                                const err92 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i15}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates.items, data: data53 }; if (vErrors === null) {
                                  vErrors = [err92]
                                }
                                else {
                                  vErrors.push(err92)
                                }errors++
                              }
                            }
                          }
                          else {
                            const err93 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.coordinates, data: data52 }; if (vErrors === null) {
                              vErrors = [err93]
                            }
                            else {
                              vErrors.push(err93)
                            }errors++
                          }
                        } if (data38.type !== undefined && func0.call(data38, 'type')) {
                          const data56 = data38.type; if (typeof data56 !== 'string') {
                            const err94 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.type, data: data56 }; if (vErrors === null) {
                              vErrors = [err94]
                            }
                            else {
                              vErrors.push(err94)
                            }errors++
                          } if (!(data56 === 'Polygon')) {
                            const err95 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[3].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3].properties.type, data: data56 }; if (vErrors === null) {
                              vErrors = [err95]
                            }
                            else {
                              vErrors.push(err95)
                            }errors++
                          }
                        }
                      }
                      else {
                        const err96 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[3].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[3], data: data38 }; if (vErrors === null) {
                          vErrors = [err96]
                        }
                        else {
                          vErrors.push(err96)
                        }errors++
                      } var _valid0 = _errs113 === errors; if (_valid0 && valid26) {
                        valid26 = false; passing0 = [passing0, 3]
                      }
                      else {
                        if (_valid0) {
                          valid26 = true; passing0 = 3
                        } const _errs129 = errors; if (data38 && typeof data38 == 'object' && !Array.isArray(data38)) {
                          if ((data38.type === undefined) || (!(func0.call(data38, 'type')))) {
                            const err97 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[4].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4], data: data38 }; if (vErrors === null) {
                              vErrors = [err97]
                            }
                            else {
                              vErrors.push(err97)
                            }errors++
                          } if ((data38.coordinates === undefined) || (!(func0.call(data38, 'coordinates')))) {
                            const err98 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[4].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4], data: data38 }; if (vErrors === null) {
                              vErrors = [err98]
                            }
                            else {
                              vErrors.push(err98)
                            }errors++
                          } if (data38.bbox !== undefined && func0.call(data38, 'bbox')) {
                            const data57 = data38.bbox; if (Array.isArray(data57)) {
                              if (data57.length < 4) {
                                const err99 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.bbox, data: data57 }; if (vErrors === null) {
                                  vErrors = [err99]
                                }
                                else {
                                  vErrors.push(err99)
                                }errors++
                              } const len18 = data57.length; for (let i18 = 0; i18 < len18; i18++) {
                                const data58 = data57[i18]; if (!((typeof data58 == 'number') && (isFinite(data58)))) {
                                  const err100 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox/${i18}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.bbox.items, data: data58 }; if (vErrors === null) {
                                    vErrors = [err100]
                                  }
                                  else {
                                    vErrors.push(err100)
                                  }errors++
                                }
                              }
                            }
                            else {
                              const err101 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.bbox, data: data57 }; if (vErrors === null) {
                                vErrors = [err101]
                              }
                              else {
                                vErrors.push(err101)
                              }errors++
                            }
                          } if (data38.coordinates !== undefined && func0.call(data38, 'coordinates')) {
                            const data59 = data38.coordinates; if (Array.isArray(data59)) {
                              const len19 = data59.length; for (let i19 = 0; i19 < len19; i19++) {
                                const data60 = data59[i19]; if (Array.isArray(data60)) {
                                  if (data60.length < 2) {
                                    const err102 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i19}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/properties/coordinates/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.coordinates.items, data: data60 }; if (vErrors === null) {
                                      vErrors = [err102]
                                    }
                                    else {
                                      vErrors.push(err102)
                                    }errors++
                                  } const len20 = data60.length; for (let i20 = 0; i20 < len20; i20++) {
                                    const data61 = data60[i20]; if (!((typeof data61 == 'number') && (isFinite(data61)))) {
                                      const err103 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i19}/${i20}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.coordinates.items.items, data: data61 }; if (vErrors === null) {
                                        vErrors = [err103]
                                      }
                                      else {
                                        vErrors.push(err103)
                                      }errors++
                                    }
                                  }
                                }
                                else {
                                  const err104 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i19}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.coordinates.items, data: data60 }; if (vErrors === null) {
                                    vErrors = [err104]
                                  }
                                  else {
                                    vErrors.push(err104)
                                  }errors++
                                }
                              }
                            }
                            else {
                              const err105 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.coordinates, data: data59 }; if (vErrors === null) {
                                vErrors = [err105]
                              }
                              else {
                                vErrors.push(err105)
                              }errors++
                            }
                          } if (data38.type !== undefined && func0.call(data38, 'type')) {
                            const data62 = data38.type; if (typeof data62 !== 'string') {
                              const err106 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.type, data: data62 }; if (vErrors === null) {
                                vErrors = [err106]
                              }
                              else {
                                vErrors.push(err106)
                              }errors++
                            } if (!(data62 === 'MultiPoint')) {
                              const err107 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[4].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4].properties.type, data: data62 }; if (vErrors === null) {
                                vErrors = [err107]
                              }
                              else {
                                vErrors.push(err107)
                              }errors++
                            }
                          }
                        }
                        else {
                          const err108 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[4].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[4], data: data38 }; if (vErrors === null) {
                            vErrors = [err108]
                          }
                          else {
                            vErrors.push(err108)
                          }errors++
                        } var _valid0 = _errs129 === errors; if (_valid0 && valid26) {
                          valid26 = false; passing0 = [passing0, 4]
                        }
                        else {
                          if (_valid0) {
                            valid26 = true; passing0 = 4
                          } const _errs143 = errors; if (data38 && typeof data38 == 'object' && !Array.isArray(data38)) {
                            if ((data38.type === undefined) || (!(func0.call(data38, 'type')))) {
                              const err109 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[5].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5], data: data38 }; if (vErrors === null) {
                                vErrors = [err109]
                              }
                              else {
                                vErrors.push(err109)
                              }errors++
                            } if ((data38.coordinates === undefined) || (!(func0.call(data38, 'coordinates')))) {
                              const err110 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[5].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5], data: data38 }; if (vErrors === null) {
                                vErrors = [err110]
                              }
                              else {
                                vErrors.push(err110)
                              }errors++
                            } if (data38.bbox !== undefined && func0.call(data38, 'bbox')) {
                              const data63 = data38.bbox; if (Array.isArray(data63)) {
                                if (data63.length < 4) {
                                  const err111 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.bbox, data: data63 }; if (vErrors === null) {
                                    vErrors = [err111]
                                  }
                                  else {
                                    vErrors.push(err111)
                                  }errors++
                                } const len21 = data63.length; for (let i21 = 0; i21 < len21; i21++) {
                                  const data64 = data63[i21]; if (!((typeof data64 == 'number') && (isFinite(data64)))) {
                                    const err112 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox/${i21}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.bbox.items, data: data64 }; if (vErrors === null) {
                                      vErrors = [err112]
                                    }
                                    else {
                                      vErrors.push(err112)
                                    }errors++
                                  }
                                }
                              }
                              else {
                                const err113 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.bbox, data: data63 }; if (vErrors === null) {
                                  vErrors = [err113]
                                }
                                else {
                                  vErrors.push(err113)
                                }errors++
                              }
                            } if (data38.coordinates !== undefined && func0.call(data38, 'coordinates')) {
                              const data65 = data38.coordinates; if (Array.isArray(data65)) {
                                const len22 = data65.length; for (let i22 = 0; i22 < len22; i22++) {
                                  const data66 = data65[i22]; if (Array.isArray(data66)) {
                                    if (data66.length < 2) {
                                      const err114 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i22}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/coordinates/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates.items, data: data66 }; if (vErrors === null) {
                                        vErrors = [err114]
                                      }
                                      else {
                                        vErrors.push(err114)
                                      }errors++
                                    } const len23 = data66.length; for (let i23 = 0; i23 < len23; i23++) {
                                      const data67 = data66[i23]; if (Array.isArray(data67)) {
                                        if (data67.length < 2) {
                                          const err115 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i22}/${i23}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/coordinates/items/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates.items.items, data: data67 }; if (vErrors === null) {
                                            vErrors = [err115]
                                          }
                                          else {
                                            vErrors.push(err115)
                                          }errors++
                                        } const len24 = data67.length; for (let i24 = 0; i24 < len24; i24++) {
                                          const data68 = data67[i24]; if (!((typeof data68 == 'number') && (isFinite(data68)))) {
                                            const err116 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i22}/${i23}/${i24}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/coordinates/items/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates.items.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates.items.items.items, data: data68 }; if (vErrors === null) {
                                              vErrors = [err116]
                                            }
                                            else {
                                              vErrors.push(err116)
                                            }errors++
                                          }
                                        }
                                      }
                                      else {
                                        const err117 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i22}/${i23}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates.items.items, data: data67 }; if (vErrors === null) {
                                          vErrors = [err117]
                                        }
                                        else {
                                          vErrors.push(err117)
                                        }errors++
                                      }
                                    }
                                  }
                                  else {
                                    const err118 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i22}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates.items, data: data66 }; if (vErrors === null) {
                                      vErrors = [err118]
                                    }
                                    else {
                                      vErrors.push(err118)
                                    }errors++
                                  }
                                }
                              }
                              else {
                                const err119 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.coordinates, data: data65 }; if (vErrors === null) {
                                  vErrors = [err119]
                                }
                                else {
                                  vErrors.push(err119)
                                }errors++
                              }
                            } if (data38.type !== undefined && func0.call(data38, 'type')) {
                              const data69 = data38.type; if (typeof data69 !== 'string') {
                                const err120 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.type, data: data69 }; if (vErrors === null) {
                                  vErrors = [err120]
                                }
                                else {
                                  vErrors.push(err120)
                                }errors++
                              } if (!(data69 === 'MultiLineString')) {
                                const err121 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[5].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5].properties.type, data: data69 }; if (vErrors === null) {
                                  vErrors = [err121]
                                }
                                else {
                                  vErrors.push(err121)
                                }errors++
                              }
                            }
                          }
                          else {
                            const err122 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/5/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[5].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[5], data: data38 }; if (vErrors === null) {
                              vErrors = [err122]
                            }
                            else {
                              vErrors.push(err122)
                            }errors++
                          } var _valid0 = _errs143 === errors; if (_valid0 && valid26) {
                            valid26 = false; passing0 = [passing0, 5]
                          }
                          else {
                            if (_valid0) {
                              valid26 = true; passing0 = 5
                            } const _errs159 = errors; if (data38 && typeof data38 == 'object' && !Array.isArray(data38)) {
                              if ((data38.type === undefined) || (!(func0.call(data38, 'type')))) {
                                const err123 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[6].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6], data: data38 }; if (vErrors === null) {
                                  vErrors = [err123]
                                }
                                else {
                                  vErrors.push(err123)
                                }errors++
                              } if ((data38.coordinates === undefined) || (!(func0.call(data38, 'coordinates')))) {
                                const err124 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[6].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6], data: data38 }; if (vErrors === null) {
                                  vErrors = [err124]
                                }
                                else {
                                  vErrors.push(err124)
                                }errors++
                              } if (data38.bbox !== undefined && func0.call(data38, 'bbox')) {
                                const data70 = data38.bbox; if (Array.isArray(data70)) {
                                  if (data70.length < 4) {
                                    const err125 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.bbox, data: data70 }; if (vErrors === null) {
                                      vErrors = [err125]
                                    }
                                    else {
                                      vErrors.push(err125)
                                    }errors++
                                  } const len25 = data70.length; for (let i25 = 0; i25 < len25; i25++) {
                                    const data71 = data70[i25]; if (!((typeof data71 == 'number') && (isFinite(data71)))) {
                                      const err126 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox/${i25}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.bbox.items, data: data71 }; if (vErrors === null) {
                                        vErrors = [err126]
                                      }
                                      else {
                                        vErrors.push(err126)
                                      }errors++
                                    }
                                  }
                                }
                                else {
                                  const err127 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.bbox, data: data70 }; if (vErrors === null) {
                                    vErrors = [err127]
                                  }
                                  else {
                                    vErrors.push(err127)
                                  }errors++
                                }
                              } if (data38.coordinates !== undefined && func0.call(data38, 'coordinates')) {
                                const data72 = data38.coordinates; if (Array.isArray(data72)) {
                                  const len26 = data72.length; for (let i26 = 0; i26 < len26; i26++) {
                                    const data73 = data72[i26]; if (Array.isArray(data73)) {
                                      const len27 = data73.length; for (let i27 = 0; i27 < len27; i27++) {
                                        const data74 = data73[i27]; if (Array.isArray(data74)) {
                                          if (data74.length < 4) {
                                            const err128 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i26}/${i27}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/coordinates/items/items/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items.items, data: data74 }; if (vErrors === null) {
                                              vErrors = [err128]
                                            }
                                            else {
                                              vErrors.push(err128)
                                            }errors++
                                          } const len28 = data74.length; for (let i28 = 0; i28 < len28; i28++) {
                                            const data75 = data74[i28]; if (Array.isArray(data75)) {
                                              if (data75.length < 2) {
                                                const err129 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i26}/${i27}/${i28}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/coordinates/items/items/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items.items.items, data: data75 }; if (vErrors === null) {
                                                  vErrors = [err129]
                                                }
                                                else {
                                                  vErrors.push(err129)
                                                }errors++
                                              } const len29 = data75.length; for (let i29 = 0; i29 < len29; i29++) {
                                                const data76 = data75[i29]; if (!((typeof data76 == 'number') && (isFinite(data76)))) {
                                                  const err130 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i26}/${i27}/${i28}/${i29}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/coordinates/items/items/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items.items.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items.items.items.items, data: data76 }; if (vErrors === null) {
                                                    vErrors = [err130]
                                                  }
                                                  else {
                                                    vErrors.push(err130)
                                                  }errors++
                                                }
                                              }
                                            }
                                            else {
                                              const err131 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i26}/${i27}/${i28}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/coordinates/items/items/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items.items.items, data: data75 }; if (vErrors === null) {
                                                vErrors = [err131]
                                              }
                                              else {
                                                vErrors.push(err131)
                                              }errors++
                                            }
                                          }
                                        }
                                        else {
                                          const err132 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i26}/${i27}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items.items, data: data74 }; if (vErrors === null) {
                                            vErrors = [err132]
                                          }
                                          else {
                                            vErrors.push(err132)
                                          }errors++
                                        }
                                      }
                                    }
                                    else {
                                      const err133 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates/${i26}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.items, data: data73 }; if (vErrors === null) {
                                        vErrors = [err133]
                                      }
                                      else {
                                        vErrors.push(err133)
                                      }errors++
                                    }
                                  }
                                }
                                else {
                                  const err134 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.coordinates, data: data72 }; if (vErrors === null) {
                                    vErrors = [err134]
                                  }
                                  else {
                                    vErrors.push(err134)
                                  }errors++
                                }
                              } if (data38.type !== undefined && func0.call(data38, 'type')) {
                                const data77 = data38.type; if (typeof data77 !== 'string') {
                                  const err135 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.type, data: data77 }; if (vErrors === null) {
                                    vErrors = [err135]
                                  }
                                  else {
                                    vErrors.push(err135)
                                  }errors++
                                } if (!(data77 === 'MultiPolygon')) {
                                  const err136 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[6].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6].properties.type, data: data77 }; if (vErrors === null) {
                                    vErrors = [err136]
                                  }
                                  else {
                                    vErrors.push(err136)
                                  }errors++
                                }
                              }
                            }
                            else {
                              const err137 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/6/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[6].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[6], data: data38 }; if (vErrors === null) {
                                vErrors = [err137]
                              }
                              else {
                                vErrors.push(err137)
                              }errors++
                            } var _valid0 = _errs159 === errors; if (_valid0 && valid26) {
                              valid26 = false; passing0 = [passing0, 6]
                            }
                            else {
                              if (_valid0) {
                                valid26 = true; passing0 = 6
                              } const _errs177 = errors; if (data38 && typeof data38 == 'object' && !Array.isArray(data38)) {
                                if ((data38.type === undefined) || (!(func0.call(data38, 'type')))) {
                                  const err138 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7], data: data38 }; if (vErrors === null) {
                                    vErrors = [err138]
                                  }
                                  else {
                                    vErrors.push(err138)
                                  }errors++
                                } if ((data38.geometries === undefined) || (!(func0.call(data38, 'geometries')))) {
                                  const err139 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/required', keyword: 'required', params: { missingProperty: 'geometries' }, message: 'must have required property \'' + 'geometries' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7], data: data38 }; if (vErrors === null) {
                                    vErrors = [err139]
                                  }
                                  else {
                                    vErrors.push(err139)
                                  }errors++
                                } if (data38.bbox !== undefined && func0.call(data38, 'bbox')) {
                                  const data78 = data38.bbox; if (Array.isArray(data78)) {
                                    if (data78.length < 4) {
                                      const err140 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.bbox, data: data78 }; if (vErrors === null) {
                                        vErrors = [err140]
                                      }
                                      else {
                                        vErrors.push(err140)
                                      }errors++
                                    } const len30 = data78.length; for (let i30 = 0; i30 < len30; i30++) {
                                      const data79 = data78[i30]; if (!((typeof data79 == 'number') && (isFinite(data79)))) {
                                        const err141 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox/${i30}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.bbox.items, data: data79 }; if (vErrors === null) {
                                          vErrors = [err141]
                                        }
                                        else {
                                          vErrors.push(err141)
                                        }errors++
                                      }
                                    }
                                  }
                                  else {
                                    const err142 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.bbox, data: data78 }; if (vErrors === null) {
                                      vErrors = [err142]
                                    }
                                    else {
                                      vErrors.push(err142)
                                    }errors++
                                  }
                                } if (data38.geometries !== undefined && func0.call(data38, 'geometries')) {
                                  const data80 = data38.geometries; if (Array.isArray(data80)) {
                                    const len31 = data80.length; for (let i31 = 0; i31 < len31; i31++) {
                                      const data81 = data80[i31]; const _errs186 = errors; let valid80 = false; let passing1 = null; const _errs187 = errors; if (data81 && typeof data81 == 'object' && !Array.isArray(data81)) {
                                        if ((data81.type === undefined) || (!(func0.call(data81, 'type')))) {
                                          const err143 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0], data: data81 }; if (vErrors === null) {
                                            vErrors = [err143]
                                          }
                                          else {
                                            vErrors.push(err143)
                                          }errors++
                                        } if ((data81.coordinates === undefined) || (!(func0.call(data81, 'coordinates')))) {
                                          const err144 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0], data: data81 }; if (vErrors === null) {
                                            vErrors = [err144]
                                          }
                                          else {
                                            vErrors.push(err144)
                                          }errors++
                                        } if (data81.bbox !== undefined && func0.call(data81, 'bbox')) {
                                          const data82 = data81.bbox; if (Array.isArray(data82)) {
                                            if (data82.length < 4) {
                                              const err145 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.bbox, data: data82 }; if (vErrors === null) {
                                                vErrors = [err145]
                                              }
                                              else {
                                                vErrors.push(err145)
                                              }errors++
                                            } const len32 = data82.length; for (let i32 = 0; i32 < len32; i32++) {
                                              const data83 = data82[i32]; if (!((typeof data83 == 'number') && (isFinite(data83)))) {
                                                const err146 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox/${i32}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.bbox.items, data: data83 }; if (vErrors === null) {
                                                  vErrors = [err146]
                                                }
                                                else {
                                                  vErrors.push(err146)
                                                }errors++
                                              }
                                            }
                                          }
                                          else {
                                            const err147 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.bbox, data: data82 }; if (vErrors === null) {
                                              vErrors = [err147]
                                            }
                                            else {
                                              vErrors.push(err147)
                                            }errors++
                                          }
                                        } if (data81.coordinates !== undefined && func0.call(data81, 'coordinates')) {
                                          const data84 = data81.coordinates; if (Array.isArray(data84)) {
                                            if (data84.length < 2) {
                                              const err148 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/properties/coordinates/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.coordinates, data: data84 }; if (vErrors === null) {
                                                vErrors = [err148]
                                              }
                                              else {
                                                vErrors.push(err148)
                                              }errors++
                                            } const len33 = data84.length; for (let i33 = 0; i33 < len33; i33++) {
                                              const data85 = data84[i33]; if (!((typeof data85 == 'number') && (isFinite(data85)))) {
                                                const err149 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i33}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/properties/coordinates/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.coordinates.items, data: data85 }; if (vErrors === null) {
                                                  vErrors = [err149]
                                                }
                                                else {
                                                  vErrors.push(err149)
                                                }errors++
                                              }
                                            }
                                          }
                                          else {
                                            const err150 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.coordinates, data: data84 }; if (vErrors === null) {
                                              vErrors = [err150]
                                            }
                                            else {
                                              vErrors.push(err150)
                                            }errors++
                                          }
                                        } if (data81.type !== undefined && func0.call(data81, 'type')) {
                                          const data86 = data81.type; if (typeof data86 !== 'string') {
                                            const err151 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.type, data: data86 }; if (vErrors === null) {
                                              vErrors = [err151]
                                            }
                                            else {
                                              vErrors.push(err151)
                                            }errors++
                                          } if (!(data86 === 'Point')) {
                                            const err152 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].properties.type, data: data86 }; if (vErrors === null) {
                                              vErrors = [err152]
                                            }
                                            else {
                                              vErrors.push(err152)
                                            }errors++
                                          }
                                        }
                                      }
                                      else {
                                        const err153 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[0], data: data81 }; if (vErrors === null) {
                                          vErrors = [err153]
                                        }
                                        else {
                                          vErrors.push(err153)
                                        }errors++
                                      } var _valid1 = _errs187 === errors; if (_valid1) {
                                        valid80 = true; passing1 = 0
                                      } const _errs199 = errors; if (data81 && typeof data81 == 'object' && !Array.isArray(data81)) {
                                        if ((data81.type === undefined) || (!(func0.call(data81, 'type')))) {
                                          const err154 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1], data: data81 }; if (vErrors === null) {
                                            vErrors = [err154]
                                          }
                                          else {
                                            vErrors.push(err154)
                                          }errors++
                                        } if ((data81.coordinates === undefined) || (!(func0.call(data81, 'coordinates')))) {
                                          const err155 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1], data: data81 }; if (vErrors === null) {
                                            vErrors = [err155]
                                          }
                                          else {
                                            vErrors.push(err155)
                                          }errors++
                                        } if (data81.bbox !== undefined && func0.call(data81, 'bbox')) {
                                          const data87 = data81.bbox; if (Array.isArray(data87)) {
                                            if (data87.length < 4) {
                                              const err156 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.bbox, data: data87 }; if (vErrors === null) {
                                                vErrors = [err156]
                                              }
                                              else {
                                                vErrors.push(err156)
                                              }errors++
                                            } const len34 = data87.length; for (let i34 = 0; i34 < len34; i34++) {
                                              const data88 = data87[i34]; if (!((typeof data88 == 'number') && (isFinite(data88)))) {
                                                const err157 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox/${i34}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.bbox.items, data: data88 }; if (vErrors === null) {
                                                  vErrors = [err157]
                                                }
                                                else {
                                                  vErrors.push(err157)
                                                }errors++
                                              }
                                            }
                                          }
                                          else {
                                            const err158 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.bbox, data: data87 }; if (vErrors === null) {
                                              vErrors = [err158]
                                            }
                                            else {
                                              vErrors.push(err158)
                                            }errors++
                                          }
                                        } if (data81.coordinates !== undefined && func0.call(data81, 'coordinates')) {
                                          const data89 = data81.coordinates; if (Array.isArray(data89)) {
                                            if (data89.length < 2) {
                                              const err159 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/coordinates/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.coordinates, data: data89 }; if (vErrors === null) {
                                                vErrors = [err159]
                                              }
                                              else {
                                                vErrors.push(err159)
                                              }errors++
                                            } const len35 = data89.length; for (let i35 = 0; i35 < len35; i35++) {
                                              const data90 = data89[i35]; if (Array.isArray(data90)) {
                                                if (data90.length < 2) {
                                                  const err160 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i35}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/coordinates/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.coordinates.items, data: data90 }; if (vErrors === null) {
                                                    vErrors = [err160]
                                                  }
                                                  else {
                                                    vErrors.push(err160)
                                                  }errors++
                                                } const len36 = data90.length; for (let i36 = 0; i36 < len36; i36++) {
                                                  const data91 = data90[i36]; if (!((typeof data91 == 'number') && (isFinite(data91)))) {
                                                    const err161 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i35}/${i36}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.coordinates.items.items, data: data91 }; if (vErrors === null) {
                                                      vErrors = [err161]
                                                    }
                                                    else {
                                                      vErrors.push(err161)
                                                    }errors++
                                                  }
                                                }
                                              }
                                              else {
                                                const err162 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i35}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.coordinates.items, data: data90 }; if (vErrors === null) {
                                                  vErrors = [err162]
                                                }
                                                else {
                                                  vErrors.push(err162)
                                                }errors++
                                              }
                                            }
                                          }
                                          else {
                                            const err163 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.coordinates, data: data89 }; if (vErrors === null) {
                                              vErrors = [err163]
                                            }
                                            else {
                                              vErrors.push(err163)
                                            }errors++
                                          }
                                        } if (data81.type !== undefined && func0.call(data81, 'type')) {
                                          const data92 = data81.type; if (typeof data92 !== 'string') {
                                            const err164 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.type, data: data92 }; if (vErrors === null) {
                                              vErrors = [err164]
                                            }
                                            else {
                                              vErrors.push(err164)
                                            }errors++
                                          } if (!(data92 === 'LineString')) {
                                            const err165 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].properties.type, data: data92 }; if (vErrors === null) {
                                              vErrors = [err165]
                                            }
                                            else {
                                              vErrors.push(err165)
                                            }errors++
                                          }
                                        }
                                      }
                                      else {
                                        const err166 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[1], data: data81 }; if (vErrors === null) {
                                          vErrors = [err166]
                                        }
                                        else {
                                          vErrors.push(err166)
                                        }errors++
                                      } var _valid1 = _errs199 === errors; if (_valid1 && valid80) {
                                        valid80 = false; passing1 = [passing1, 1]
                                      }
                                      else {
                                        if (_valid1) {
                                          valid80 = true; passing1 = 1
                                        } const _errs213 = errors; if (data81 && typeof data81 == 'object' && !Array.isArray(data81)) {
                                          if ((data81.type === undefined) || (!(func0.call(data81, 'type')))) {
                                            const err167 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2], data: data81 }; if (vErrors === null) {
                                              vErrors = [err167]
                                            }
                                            else {
                                              vErrors.push(err167)
                                            }errors++
                                          } if ((data81.coordinates === undefined) || (!(func0.call(data81, 'coordinates')))) {
                                            const err168 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2], data: data81 }; if (vErrors === null) {
                                              vErrors = [err168]
                                            }
                                            else {
                                              vErrors.push(err168)
                                            }errors++
                                          } if (data81.bbox !== undefined && func0.call(data81, 'bbox')) {
                                            const data93 = data81.bbox; if (Array.isArray(data93)) {
                                              if (data93.length < 4) {
                                                const err169 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.bbox, data: data93 }; if (vErrors === null) {
                                                  vErrors = [err169]
                                                }
                                                else {
                                                  vErrors.push(err169)
                                                }errors++
                                              } const len37 = data93.length; for (let i37 = 0; i37 < len37; i37++) {
                                                const data94 = data93[i37]; if (!((typeof data94 == 'number') && (isFinite(data94)))) {
                                                  const err170 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox/${i37}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.bbox.items, data: data94 }; if (vErrors === null) {
                                                    vErrors = [err170]
                                                  }
                                                  else {
                                                    vErrors.push(err170)
                                                  }errors++
                                                }
                                              }
                                            }
                                            else {
                                              const err171 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.bbox, data: data93 }; if (vErrors === null) {
                                                vErrors = [err171]
                                              }
                                              else {
                                                vErrors.push(err171)
                                              }errors++
                                            }
                                          } if (data81.coordinates !== undefined && func0.call(data81, 'coordinates')) {
                                            const data95 = data81.coordinates; if (Array.isArray(data95)) {
                                              const len38 = data95.length; for (let i38 = 0; i38 < len38; i38++) {
                                                const data96 = data95[i38]; if (Array.isArray(data96)) {
                                                  if (data96.length < 4) {
                                                    const err172 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i38}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/coordinates/items/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates.items, data: data96 }; if (vErrors === null) {
                                                      vErrors = [err172]
                                                    }
                                                    else {
                                                      vErrors.push(err172)
                                                    }errors++
                                                  } const len39 = data96.length; for (let i39 = 0; i39 < len39; i39++) {
                                                    const data97 = data96[i39]; if (Array.isArray(data97)) {
                                                      if (data97.length < 2) {
                                                        const err173 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i38}/${i39}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/coordinates/items/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates.items.items, data: data97 }; if (vErrors === null) {
                                                          vErrors = [err173]
                                                        }
                                                        else {
                                                          vErrors.push(err173)
                                                        }errors++
                                                      } const len40 = data97.length; for (let i40 = 0; i40 < len40; i40++) {
                                                        const data98 = data97[i40]; if (!((typeof data98 == 'number') && (isFinite(data98)))) {
                                                          const err174 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i38}/${i39}/${i40}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/coordinates/items/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates.items.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates.items.items.items, data: data98 }; if (vErrors === null) {
                                                            vErrors = [err174]
                                                          }
                                                          else {
                                                            vErrors.push(err174)
                                                          }errors++
                                                        }
                                                      }
                                                    }
                                                    else {
                                                      const err175 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i38}/${i39}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates.items.items, data: data97 }; if (vErrors === null) {
                                                        vErrors = [err175]
                                                      }
                                                      else {
                                                        vErrors.push(err175)
                                                      }errors++
                                                    }
                                                  }
                                                }
                                                else {
                                                  const err176 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i38}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates.items, data: data96 }; if (vErrors === null) {
                                                    vErrors = [err176]
                                                  }
                                                  else {
                                                    vErrors.push(err176)
                                                  }errors++
                                                }
                                              }
                                            }
                                            else {
                                              const err177 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.coordinates, data: data95 }; if (vErrors === null) {
                                                vErrors = [err177]
                                              }
                                              else {
                                                vErrors.push(err177)
                                              }errors++
                                            }
                                          } if (data81.type !== undefined && func0.call(data81, 'type')) {
                                            const data99 = data81.type; if (typeof data99 !== 'string') {
                                              const err178 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.type, data: data99 }; if (vErrors === null) {
                                                vErrors = [err178]
                                              }
                                              else {
                                                vErrors.push(err178)
                                              }errors++
                                            } if (!(data99 === 'Polygon')) {
                                              const err179 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].properties.type, data: data99 }; if (vErrors === null) {
                                                vErrors = [err179]
                                              }
                                              else {
                                                vErrors.push(err179)
                                              }errors++
                                            }
                                          }
                                        }
                                        else {
                                          const err180 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[2], data: data81 }; if (vErrors === null) {
                                            vErrors = [err180]
                                          }
                                          else {
                                            vErrors.push(err180)
                                          }errors++
                                        } var _valid1 = _errs213 === errors; if (_valid1 && valid80) {
                                          valid80 = false; passing1 = [passing1, 2]
                                        }
                                        else {
                                          if (_valid1) {
                                            valid80 = true; passing1 = 2
                                          } const _errs229 = errors; if (data81 && typeof data81 == 'object' && !Array.isArray(data81)) {
                                            if ((data81.type === undefined) || (!(func0.call(data81, 'type')))) {
                                              const err181 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3], data: data81 }; if (vErrors === null) {
                                                vErrors = [err181]
                                              }
                                              else {
                                                vErrors.push(err181)
                                              }errors++
                                            } if ((data81.coordinates === undefined) || (!(func0.call(data81, 'coordinates')))) {
                                              const err182 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3], data: data81 }; if (vErrors === null) {
                                                vErrors = [err182]
                                              }
                                              else {
                                                vErrors.push(err182)
                                              }errors++
                                            } if (data81.bbox !== undefined && func0.call(data81, 'bbox')) {
                                              const data100 = data81.bbox; if (Array.isArray(data100)) {
                                                if (data100.length < 4) {
                                                  const err183 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.bbox, data: data100 }; if (vErrors === null) {
                                                    vErrors = [err183]
                                                  }
                                                  else {
                                                    vErrors.push(err183)
                                                  }errors++
                                                } const len41 = data100.length; for (let i41 = 0; i41 < len41; i41++) {
                                                  const data101 = data100[i41]; if (!((typeof data101 == 'number') && (isFinite(data101)))) {
                                                    const err184 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox/${i41}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.bbox.items, data: data101 }; if (vErrors === null) {
                                                      vErrors = [err184]
                                                    }
                                                    else {
                                                      vErrors.push(err184)
                                                    }errors++
                                                  }
                                                }
                                              }
                                              else {
                                                const err185 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.bbox, data: data100 }; if (vErrors === null) {
                                                  vErrors = [err185]
                                                }
                                                else {
                                                  vErrors.push(err185)
                                                }errors++
                                              }
                                            } if (data81.coordinates !== undefined && func0.call(data81, 'coordinates')) {
                                              const data102 = data81.coordinates; if (Array.isArray(data102)) {
                                                const len42 = data102.length; for (let i42 = 0; i42 < len42; i42++) {
                                                  const data103 = data102[i42]; if (Array.isArray(data103)) {
                                                    if (data103.length < 2) {
                                                      const err186 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i42}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/properties/coordinates/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.coordinates.items, data: data103 }; if (vErrors === null) {
                                                        vErrors = [err186]
                                                      }
                                                      else {
                                                        vErrors.push(err186)
                                                      }errors++
                                                    } const len43 = data103.length; for (let i43 = 0; i43 < len43; i43++) {
                                                      const data104 = data103[i43]; if (!((typeof data104 == 'number') && (isFinite(data104)))) {
                                                        const err187 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i42}/${i43}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.coordinates.items.items, data: data104 }; if (vErrors === null) {
                                                          vErrors = [err187]
                                                        }
                                                        else {
                                                          vErrors.push(err187)
                                                        }errors++
                                                      }
                                                    }
                                                  }
                                                  else {
                                                    const err188 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i42}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.coordinates.items, data: data103 }; if (vErrors === null) {
                                                      vErrors = [err188]
                                                    }
                                                    else {
                                                      vErrors.push(err188)
                                                    }errors++
                                                  }
                                                }
                                              }
                                              else {
                                                const err189 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.coordinates, data: data102 }; if (vErrors === null) {
                                                  vErrors = [err189]
                                                }
                                                else {
                                                  vErrors.push(err189)
                                                }errors++
                                              }
                                            } if (data81.type !== undefined && func0.call(data81, 'type')) {
                                              const data105 = data81.type; if (typeof data105 !== 'string') {
                                                const err190 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.type, data: data105 }; if (vErrors === null) {
                                                  vErrors = [err190]
                                                }
                                                else {
                                                  vErrors.push(err190)
                                                }errors++
                                              } if (!(data105 === 'MultiPoint')) {
                                                const err191 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].properties.type, data: data105 }; if (vErrors === null) {
                                                  vErrors = [err191]
                                                }
                                                else {
                                                  vErrors.push(err191)
                                                }errors++
                                              }
                                            }
                                          }
                                          else {
                                            const err192 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[3], data: data81 }; if (vErrors === null) {
                                              vErrors = [err192]
                                            }
                                            else {
                                              vErrors.push(err192)
                                            }errors++
                                          } var _valid1 = _errs229 === errors; if (_valid1 && valid80) {
                                            valid80 = false; passing1 = [passing1, 3]
                                          }
                                          else {
                                            if (_valid1) {
                                              valid80 = true; passing1 = 3
                                            } const _errs243 = errors; if (data81 && typeof data81 == 'object' && !Array.isArray(data81)) {
                                              if ((data81.type === undefined) || (!(func0.call(data81, 'type')))) {
                                                const err193 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4], data: data81 }; if (vErrors === null) {
                                                  vErrors = [err193]
                                                }
                                                else {
                                                  vErrors.push(err193)
                                                }errors++
                                              } if ((data81.coordinates === undefined) || (!(func0.call(data81, 'coordinates')))) {
                                                const err194 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4], data: data81 }; if (vErrors === null) {
                                                  vErrors = [err194]
                                                }
                                                else {
                                                  vErrors.push(err194)
                                                }errors++
                                              } if (data81.bbox !== undefined && func0.call(data81, 'bbox')) {
                                                const data106 = data81.bbox; if (Array.isArray(data106)) {
                                                  if (data106.length < 4) {
                                                    const err195 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.bbox, data: data106 }; if (vErrors === null) {
                                                      vErrors = [err195]
                                                    }
                                                    else {
                                                      vErrors.push(err195)
                                                    }errors++
                                                  } const len44 = data106.length; for (let i44 = 0; i44 < len44; i44++) {
                                                    const data107 = data106[i44]; if (!((typeof data107 == 'number') && (isFinite(data107)))) {
                                                      const err196 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox/${i44}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.bbox.items, data: data107 }; if (vErrors === null) {
                                                        vErrors = [err196]
                                                      }
                                                      else {
                                                        vErrors.push(err196)
                                                      }errors++
                                                    }
                                                  }
                                                }
                                                else {
                                                  const err197 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.bbox, data: data106 }; if (vErrors === null) {
                                                    vErrors = [err197]
                                                  }
                                                  else {
                                                    vErrors.push(err197)
                                                  }errors++
                                                }
                                              } if (data81.coordinates !== undefined && func0.call(data81, 'coordinates')) {
                                                const data108 = data81.coordinates; if (Array.isArray(data108)) {
                                                  const len45 = data108.length; for (let i45 = 0; i45 < len45; i45++) {
                                                    const data109 = data108[i45]; if (Array.isArray(data109)) {
                                                      if (data109.length < 2) {
                                                        const err198 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i45}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/coordinates/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates.items, data: data109 }; if (vErrors === null) {
                                                          vErrors = [err198]
                                                        }
                                                        else {
                                                          vErrors.push(err198)
                                                        }errors++
                                                      } const len46 = data109.length; for (let i46 = 0; i46 < len46; i46++) {
                                                        const data110 = data109[i46]; if (Array.isArray(data110)) {
                                                          if (data110.length < 2) {
                                                            const err199 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i45}/${i46}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/coordinates/items/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates.items.items, data: data110 }; if (vErrors === null) {
                                                              vErrors = [err199]
                                                            }
                                                            else {
                                                              vErrors.push(err199)
                                                            }errors++
                                                          } const len47 = data110.length; for (let i47 = 0; i47 < len47; i47++) {
                                                            const data111 = data110[i47]; if (!((typeof data111 == 'number') && (isFinite(data111)))) {
                                                              const err200 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i45}/${i46}/${i47}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/coordinates/items/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates.items.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates.items.items.items, data: data111 }; if (vErrors === null) {
                                                                vErrors = [err200]
                                                              }
                                                              else {
                                                                vErrors.push(err200)
                                                              }errors++
                                                            }
                                                          }
                                                        }
                                                        else {
                                                          const err201 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i45}/${i46}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates.items.items, data: data110 }; if (vErrors === null) {
                                                            vErrors = [err201]
                                                          }
                                                          else {
                                                            vErrors.push(err201)
                                                          }errors++
                                                        }
                                                      }
                                                    }
                                                    else {
                                                      const err202 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i45}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates.items, data: data109 }; if (vErrors === null) {
                                                        vErrors = [err202]
                                                      }
                                                      else {
                                                        vErrors.push(err202)
                                                      }errors++
                                                    }
                                                  }
                                                }
                                                else {
                                                  const err203 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.coordinates, data: data108 }; if (vErrors === null) {
                                                    vErrors = [err203]
                                                  }
                                                  else {
                                                    vErrors.push(err203)
                                                  }errors++
                                                }
                                              } if (data81.type !== undefined && func0.call(data81, 'type')) {
                                                const data112 = data81.type; if (typeof data112 !== 'string') {
                                                  const err204 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.type, data: data112 }; if (vErrors === null) {
                                                    vErrors = [err204]
                                                  }
                                                  else {
                                                    vErrors.push(err204)
                                                  }errors++
                                                } if (!(data112 === 'MultiLineString')) {
                                                  const err205 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].properties.type, data: data112 }; if (vErrors === null) {
                                                    vErrors = [err205]
                                                  }
                                                  else {
                                                    vErrors.push(err205)
                                                  }errors++
                                                }
                                              }
                                            }
                                            else {
                                              const err206 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[4], data: data81 }; if (vErrors === null) {
                                                vErrors = [err206]
                                              }
                                              else {
                                                vErrors.push(err206)
                                              }errors++
                                            } var _valid1 = _errs243 === errors; if (_valid1 && valid80) {
                                              valid80 = false; passing1 = [passing1, 4]
                                            }
                                            else {
                                              if (_valid1) {
                                                valid80 = true; passing1 = 4
                                              } const _errs259 = errors; if (data81 && typeof data81 == 'object' && !Array.isArray(data81)) {
                                                if ((data81.type === undefined) || (!(func0.call(data81, 'type')))) {
                                                  const err207 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5], data: data81 }; if (vErrors === null) {
                                                    vErrors = [err207]
                                                  }
                                                  else {
                                                    vErrors.push(err207)
                                                  }errors++
                                                } if ((data81.coordinates === undefined) || (!(func0.call(data81, 'coordinates')))) {
                                                  const err208 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/required', keyword: 'required', params: { missingProperty: 'coordinates' }, message: 'must have required property \'' + 'coordinates' + '\'', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].required, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5], data: data81 }; if (vErrors === null) {
                                                    vErrors = [err208]
                                                  }
                                                  else {
                                                    vErrors.push(err208)
                                                  }errors++
                                                } if (data81.bbox !== undefined && func0.call(data81, 'bbox')) {
                                                  const data113 = data81.bbox; if (Array.isArray(data113)) {
                                                    if (data113.length < 4) {
                                                      const err209 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/bbox/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.bbox, data: data113 }; if (vErrors === null) {
                                                        vErrors = [err209]
                                                      }
                                                      else {
                                                        vErrors.push(err209)
                                                      }errors++
                                                    } const len48 = data113.length; for (let i48 = 0; i48 < len48; i48++) {
                                                      const data114 = data113[i48]; if (!((typeof data114 == 'number') && (isFinite(data114)))) {
                                                        const err210 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox/${i48}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/bbox/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.bbox.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.bbox.items, data: data114 }; if (vErrors === null) {
                                                          vErrors = [err210]
                                                        }
                                                        else {
                                                          vErrors.push(err210)
                                                        }errors++
                                                      }
                                                    }
                                                  }
                                                  else {
                                                    const err211 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/bbox`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/bbox/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.bbox.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.bbox, data: data113 }; if (vErrors === null) {
                                                      vErrors = [err211]
                                                    }
                                                    else {
                                                      vErrors.push(err211)
                                                    }errors++
                                                  }
                                                } if (data81.coordinates !== undefined && func0.call(data81, 'coordinates')) {
                                                  const data115 = data81.coordinates; if (Array.isArray(data115)) {
                                                    const len49 = data115.length; for (let i49 = 0; i49 < len49; i49++) {
                                                      const data116 = data115[i49]; if (Array.isArray(data116)) {
                                                        const len50 = data116.length; for (let i50 = 0; i50 < len50; i50++) {
                                                          const data117 = data116[i50]; if (Array.isArray(data117)) {
                                                            if (data117.length < 4) {
                                                              const err212 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i49}/${i50}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/coordinates/items/items/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items', schema: 4, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items.items, data: data117 }; if (vErrors === null) {
                                                                vErrors = [err212]
                                                              }
                                                              else {
                                                                vErrors.push(err212)
                                                              }errors++
                                                            } const len51 = data117.length; for (let i51 = 0; i51 < len51; i51++) {
                                                              const data118 = data117[i51]; if (Array.isArray(data118)) {
                                                                if (data118.length < 2) {
                                                                  const err213 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i49}/${i50}/${i51}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/coordinates/items/items/items/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items.items.items, data: data118 }; if (vErrors === null) {
                                                                    vErrors = [err213]
                                                                  }
                                                                  else {
                                                                    vErrors.push(err213)
                                                                  }errors++
                                                                } const len52 = data118.length; for (let i52 = 0; i52 < len52; i52++) {
                                                                  const data119 = data118[i52]; if (!((typeof data119 == 'number') && (isFinite(data119)))) {
                                                                    const err214 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i49}/${i50}/${i51}/${i52}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/coordinates/items/items/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items.items.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items.items.items.items, data: data119 }; if (vErrors === null) {
                                                                      vErrors = [err214]
                                                                    }
                                                                    else {
                                                                      vErrors.push(err214)
                                                                    }errors++
                                                                  }
                                                                }
                                                              }
                                                              else {
                                                                const err215 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i49}/${i50}/${i51}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/coordinates/items/items/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items.items.items, data: data118 }; if (vErrors === null) {
                                                                  vErrors = [err215]
                                                                }
                                                                else {
                                                                  vErrors.push(err215)
                                                                }errors++
                                                              }
                                                            }
                                                          }
                                                          else {
                                                            const err216 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i49}/${i50}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/coordinates/items/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items.items, data: data117 }; if (vErrors === null) {
                                                              vErrors = [err216]
                                                            }
                                                            else {
                                                              vErrors.push(err216)
                                                            }errors++
                                                          }
                                                        }
                                                      }
                                                      else {
                                                        const err217 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates/${i49}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/coordinates/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.items, data: data116 }; if (vErrors === null) {
                                                          vErrors = [err217]
                                                        }
                                                        else {
                                                          vErrors.push(err217)
                                                        }errors++
                                                      }
                                                    }
                                                  }
                                                  else {
                                                    const err218 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/coordinates`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/coordinates/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.coordinates, data: data115 }; if (vErrors === null) {
                                                      vErrors = [err218]
                                                    }
                                                    else {
                                                      vErrors.push(err218)
                                                    }errors++
                                                  }
                                                } if (data81.type !== undefined && func0.call(data81, 'type')) {
                                                  const data120 = data81.type; if (typeof data120 !== 'string') {
                                                    const err219 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.type, data: data120 }; if (vErrors === null) {
                                                      vErrors = [err219]
                                                    }
                                                    else {
                                                      vErrors.push(err219)
                                                    }errors++
                                                  } if (!(data120 === 'MultiPolygon')) {
                                                    const err220 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].properties.type, data: data120 }; if (vErrors === null) {
                                                      vErrors = [err220]
                                                    }
                                                    else {
                                                      vErrors.push(err220)
                                                    }errors++
                                                  }
                                                }
                                              }
                                              else {
                                                const err221 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf/5/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf[5], data: data81 }; if (vErrors === null) {
                                                  vErrors = [err221]
                                                }
                                                else {
                                                  vErrors.push(err221)
                                                }errors++
                                              } var _valid1 = _errs259 === errors; if (_valid1 && valid80) {
                                                valid80 = false; passing1 = [passing1, 5]
                                              }
                                              else {
                                                if (_valid1) {
                                                  valid80 = true; passing1 = 5
                                                }
                                              }
                                            }
                                          }
                                        }
                                      } if (!valid80) {
                                        const err222 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries/${i31}`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items.oneOf, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.items, data: data81 }; if (vErrors === null) {
                                          vErrors = [err222]
                                        }
                                        else {
                                          vErrors.push(err222)
                                        }errors++
                                      }
                                      else {
                                        errors = _errs186; if (vErrors !== null) {
                                          if (_errs186) {
                                            vErrors.length = _errs186
                                          }
                                          else {
                                            vErrors = null
                                          }
                                        }
                                      }
                                    }
                                  }
                                  else {
                                    const err223 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/geometries`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/geometries/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.geometries, data: data80 }; if (vErrors === null) {
                                      vErrors = [err223]
                                    }
                                    else {
                                      vErrors.push(err223)
                                    }errors++
                                  }
                                } if (data38.type !== undefined && func0.call(data38, 'type')) {
                                  const data121 = data38.type; if (typeof data121 !== 'string') {
                                    const err224 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.type.type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.type, data: data121 }; if (vErrors === null) {
                                      vErrors = [err224]
                                    }
                                    else {
                                      vErrors.push(err224)
                                    }errors++
                                  } if (!(data121 === 'GeometryCollection')) {
                                    const err225 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry/type`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.geometry.oneOf[7].properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.type.enum, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7].properties.type, data: data121 }; if (vErrors === null) {
                                      vErrors = [err225]
                                    }
                                    else {
                                      vErrors.push(err225)
                                    }errors++
                                  }
                                }
                              }
                              else {
                                const err226 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf/7/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.geometry.oneOf[7].type, parentSchema: schema16.properties.features.items.properties.geometry.oneOf[7], data: data38 }; if (vErrors === null) {
                                  vErrors = [err226]
                                }
                                else {
                                  vErrors.push(err226)
                                }errors++
                              } var _valid0 = _errs177 === errors; if (_valid0 && valid26) {
                                valid26 = false; passing0 = [passing0, 7]
                              }
                              else {
                                if (_valid0) {
                                  valid26 = true; passing0 = 7
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  } if (!valid26) {
                    const err227 = { instancePath: `${instancePath}/featureCollection/features/${i7}/geometry`, schemaPath: 'geojson/properties/features/items/properties/geometry/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema16.properties.features.items.properties.geometry.oneOf, parentSchema: schema16.properties.features.items.properties.geometry, data: data38 }; if (vErrors === null) {
                      vErrors = [err227]
                    }
                    else {
                      vErrors.push(err227)
                    }errors++
                  }
                  else {
                    errors = _errs84; if (vErrors !== null) {
                      if (_errs84) {
                        vErrors.length = _errs84
                      }
                      else {
                        vErrors = null
                      }
                    }
                  }
                } if (data35.id !== undefined && func0.call(data35, 'id')) {
                  const data122 = data35.id; const _errs280 = errors; let valid129 = false; let passing2 = null; const _errs281 = errors; if (!((typeof data122 == 'number') && (isFinite(data122)))) {
                    const err228 = { instancePath: `${instancePath}/featureCollection/features/${i7}/id`, schemaPath: 'geojson/properties/features/items/properties/id/oneOf/0/type', keyword: 'type', params: { type: 'number' }, message: 'must be number', schema: schema16.properties.features.items.properties.id.oneOf[0].type, parentSchema: schema16.properties.features.items.properties.id.oneOf[0], data: data122 }; if (vErrors === null) {
                      vErrors = [err228]
                    }
                    else {
                      vErrors.push(err228)
                    }errors++
                  } var _valid2 = _errs281 === errors; if (_valid2) {
                    valid129 = true; passing2 = 0
                  } const _errs283 = errors; if (typeof data122 !== 'string') {
                    const err229 = { instancePath: `${instancePath}/featureCollection/features/${i7}/id`, schemaPath: 'geojson/properties/features/items/properties/id/oneOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.id.oneOf[1].type, parentSchema: schema16.properties.features.items.properties.id.oneOf[1], data: data122 }; if (vErrors === null) {
                      vErrors = [err229]
                    }
                    else {
                      vErrors.push(err229)
                    }errors++
                  } var _valid2 = _errs283 === errors; if (_valid2 && valid129) {
                    valid129 = false; passing2 = [passing2, 1]
                  }
                  else {
                    if (_valid2) {
                      valid129 = true; passing2 = 1
                    }
                  } if (!valid129) {
                    const err230 = { instancePath: `${instancePath}/featureCollection/features/${i7}/id`, schemaPath: 'geojson/properties/features/items/properties/id/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema16.properties.features.items.properties.id.oneOf, parentSchema: schema16.properties.features.items.properties.id, data: data122 }; if (vErrors === null) {
                      vErrors = [err230]
                    }
                    else {
                      vErrors.push(err230)
                    }errors++
                  }
                  else {
                    errors = _errs280; if (vErrors !== null) {
                      if (_errs280) {
                        vErrors.length = _errs280
                      }
                      else {
                        vErrors = null
                      }
                    }
                  }
                } if (data35.properties !== undefined && func0.call(data35, 'properties')) {
                  const data123 = data35.properties; const _errs286 = errors; let valid130 = false; let passing3 = null; const _errs287 = errors; if (data123 !== null) {
                    const err231 = { instancePath: `${instancePath}/featureCollection/features/${i7}/properties`, schemaPath: 'geojson/properties/features/items/properties/properties/oneOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema16.properties.features.items.properties.properties.oneOf[0].type, parentSchema: schema16.properties.features.items.properties.properties.oneOf[0], data: data123 }; if (vErrors === null) {
                      vErrors = [err231]
                    }
                    else {
                      vErrors.push(err231)
                    }errors++
                  } var _valid3 = _errs287 === errors; if (_valid3) {
                    valid130 = true; passing3 = 0
                  } const _errs289 = errors; if (!(data123 && typeof data123 == 'object' && !Array.isArray(data123))) {
                    const err232 = { instancePath: `${instancePath}/featureCollection/features/${i7}/properties`, schemaPath: 'geojson/properties/features/items/properties/properties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.properties.properties.oneOf[1].type, parentSchema: schema16.properties.features.items.properties.properties.oneOf[1], data: data123 }; if (vErrors === null) {
                      vErrors = [err232]
                    }
                    else {
                      vErrors.push(err232)
                    }errors++
                  } var _valid3 = _errs289 === errors; if (_valid3 && valid130) {
                    valid130 = false; passing3 = [passing3, 1]
                  }
                  else {
                    if (_valid3) {
                      valid130 = true; passing3 = 1
                    }
                  } if (!valid130) {
                    const err233 = { instancePath: `${instancePath}/featureCollection/features/${i7}/properties`, schemaPath: 'geojson/properties/features/items/properties/properties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema16.properties.features.items.properties.properties.oneOf, parentSchema: schema16.properties.features.items.properties.properties, data: data123 }; if (vErrors === null) {
                      vErrors = [err233]
                    }
                    else {
                      vErrors.push(err233)
                    }errors++
                  }
                  else {
                    errors = _errs286; if (vErrors !== null) {
                      if (_errs286) {
                        vErrors.length = _errs286
                      }
                      else {
                        vErrors = null
                      }
                    }
                  }
                } if (data35.type !== undefined && func0.call(data35, 'type')) {
                  const data124 = data35.type; if (typeof data124 !== 'string') {
                    const err234 = { instancePath: `${instancePath}/featureCollection/features/${i7}/type`, schemaPath: 'geojson/properties/features/items/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.features.items.properties.type.type, parentSchema: schema16.properties.features.items.properties.type, data: data124 }; if (vErrors === null) {
                      vErrors = [err234]
                    }
                    else {
                      vErrors.push(err234)
                    }errors++
                  } if (!(data124 === 'Feature')) {
                    const err235 = { instancePath: `${instancePath}/featureCollection/features/${i7}/type`, schemaPath: 'geojson/properties/features/items/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.features.items.properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.features.items.properties.type.enum, parentSchema: schema16.properties.features.items.properties.type, data: data124 }; if (vErrors === null) {
                      vErrors = [err235]
                    }
                    else {
                      vErrors.push(err235)
                    }errors++
                  }
                }
              }
              else {
                const err236 = { instancePath: `${instancePath}/featureCollection/features/${i7}`, schemaPath: 'geojson/properties/features/items/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.properties.features.items.type, parentSchema: schema16.properties.features.items, data: data35 }; if (vErrors === null) {
                  vErrors = [err236]
                }
                else {
                  vErrors.push(err236)
                }errors++
              }
            }
          }
          else {
            const err237 = { instancePath: `${instancePath}/featureCollection/features`, schemaPath: 'geojson/properties/features/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema16.properties.features.type, parentSchema: schema16.properties.features, data: data34 }; if (vErrors === null) {
              vErrors = [err237]
            }
            else {
              vErrors.push(err237)
            }errors++
          }
        } if (data31.type !== undefined && func0.call(data31, 'type')) {
          const data125 = data31.type; if (typeof data125 !== 'string') {
            const err238 = { instancePath: `${instancePath}/featureCollection/type`, schemaPath: 'geojson/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema16.properties.type.type, parentSchema: schema16.properties.type, data: data125 }; if (vErrors === null) {
              vErrors = [err238]
            }
            else {
              vErrors.push(err238)
            }errors++
          } if (!(data125 === 'FeatureCollection')) {
            const err239 = { instancePath: `${instancePath}/featureCollection/type`, schemaPath: 'geojson/properties/type/enum', keyword: 'enum', params: { allowedValues: schema16.properties.type.enum }, message: 'must be equal to one of the allowed values', schema: schema16.properties.type.enum, parentSchema: schema16.properties.type, data: data125 }; if (vErrors === null) {
              vErrors = [err239]
            }
            else {
              vErrors.push(err239)
            }errors++
          }
        }
      }
      else {
        const err240 = { instancePath: `${instancePath}/featureCollection`, schemaPath: 'geojson/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema16.type, parentSchema: schema16, data: data31 }; if (vErrors === null) {
          vErrors = [err240]
        }
        else {
          vErrors.push(err240)
        }errors++
      }
    }
  }
  else {
    const err241 = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema11.type, parentSchema: schema11, data }; if (vErrors === null) {
      vErrors = [err241]
    }
    else {
      vErrors.push(err241)
    }errors++
  } if (errors === 0) {
    return data
  }
  else {
    throw new Error0(vErrors)
  }
}
