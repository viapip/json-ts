function validate11(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /* # sourceURL="foo" */;let vErrors = null; let errors = 0; if (data && typeof data == 'object' && !Array.isArray(data)) {
    if ((data.bar === undefined) || (!(func0.call(data, 'bar')))) {
      const err0 = { instancePath, schemaPath: '/required', keyword: 'required', params: { missingProperty: 'bar' }, message: 'must have required property \'' + 'bar' + '\'', schema: schema12.required, parentSchema: schema12, data }; if (vErrors === null) {
        vErrors = [err0]
      }
      else {
        vErrors.push(err0)
      }errors++
    }
  }validate11.errors = vErrors

  return errors === 0
}
