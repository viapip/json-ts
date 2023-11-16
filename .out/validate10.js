function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /* # sourceURL="bar" */;let vErrors = null; let errors = 0; if (data && typeof data == 'object' && !Array.isArray(data)) {
    if (data.baz === undefined) {
      const err0 = { instancePath, schemaPath: '/required', keyword: 'required', params: { missingProperty: 'baz' }, message: 'must have required property \'' + 'baz' + '\'', schema: schema11.required, parentSchema: schema11, data }; if (vErrors === null) {
        vErrors = [err0]
      }
      else {
        vErrors.push(err0)
      }errors++
    } if (data.baz !== undefined) {
      const data0 = data.baz; if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
        if (data0.bar === undefined) {
          const err1 = { instancePath: `${instancePath}/baz`, schemaPath: 'foo/required', keyword: 'required', params: { missingProperty: 'bar' }, message: 'must have required property \'' + 'bar' + '\'', schema: schema12.required, parentSchema: schema12, data: data0 }; if (vErrors === null) {
            vErrors = [err1]
          }
          else {
            vErrors.push(err1)
          }errors++
        }
      }
    }
  }validate10.errors = vErrors

  return errors === 0
}
