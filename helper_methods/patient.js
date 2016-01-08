module.exports = function (data) {
  return {
    resource:
    {
      resourceType: 'patient',
      identifier: [{
        system: data.emr,
        value: data.id
      }, {
        system: 'SSN',
        value: data.ssn
      }],
      name: {
        family: [data.familyName],
        given: [data.givenName]
      },
      gender: data.gender,
      birthDate: data.birthDate,
      telecom: {}
    }
  }
}
