module.exports = function (data) {
  if(typeof data !== "object") throw new Error('Params must be object')
  return {
    resource: {
      resourceType: 'medicationStatement',
      identifier: [{
        system: data.emr,
        value: data.value
      }],
      medication: {
        name: data.medicationName,
        code: {
          coding: [{
            code: data.code,
            system: data.codingSystem,
            display: data.codingDisplay,
            primary: data.codingPrimary
          }],
          text: data.codingText
        },
        isBrand: data.medicationIsBrand,
        kind: data.medicationKind
      },
      dosage: [{
        timing: {
          repeat: {
            frequency: data.frequency,
            duration: data.duration,
            units: data.units
          }
        },
        asNeeded: data.dosageAsNeeded
      }]
    }
  }
}
