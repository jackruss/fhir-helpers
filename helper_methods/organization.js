module.exports = function (data) {
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
