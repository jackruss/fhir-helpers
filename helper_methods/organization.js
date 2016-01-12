module.exports = function (data) {
  if(typeof data !== "object") throw new Error('Params must be object')
  return {
    resource:
    {
      resourceType: 'organization',
      identifier: {
        system: data.system,
        value: data.value
      },
      name: data.name
    }
  }
}
