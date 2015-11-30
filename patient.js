module.exports = function (config) {
  return function (id, ssn, familyName, givenName, gender, birthDate, phone) {
    return {
      resourceType: 'patient',
      identifier: [{
        label: config.emr,
        value: id
      }, {
        label: 'SSN',
        value: ssn
      }],
      name: {
        "family": [familyName],
        "given": [givenName]
      },
      gender:{},
      birthDate: {},
      telecom: {}
    }
  }
}
