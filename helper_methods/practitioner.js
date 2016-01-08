module.exports = function (data) {
  return {
    resource:
    {
      resourceType: 'practitioner',
      identifier: [{
        system: data.emr,
        value: data.id
      }, {
        system: 'NPI',
        value: data.npi
      }],
      name: {
        family: [data.familyName],
        given: [data.givenName]
      },
      gender: data.gender,
      birthDate: data.birthDate
    }
  }
}
