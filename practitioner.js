module.exports = function (config) {
  return function (id, npi, familyName, givenName) {
    return {
      resourceType: 'practitioner',
      identifier: [{
        label: config.emr,
        value: id
      }, {
        label: 'NPI',
        value: npi
      }],
      name: {
        "family": [familyName],
        "given": [givenName]
      }
    }
  }
}
