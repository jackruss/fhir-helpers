module.exports = function (data) {
  if(typeof data !== "object") throw new Error('Params must be object')
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
