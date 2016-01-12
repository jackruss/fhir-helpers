module.exports = function (data) {
  if(typeof data !== "object") throw new Error('Params must be object')
  return {
    resource: {
      resourceType: 'medicationOrder',
      identifier: [{
        system: data.emr,
        value: data.value
      }],
      dateWritten: data.dateWritten,
      status: data.status,
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
      dosageInstruction: [{
        timing: {
          repeat: {
            frequency: data.dosageFrequency,
            duration: data.dosageDuration,
            units: data.dosageUnits
          }
        },
        asNeeded: false
      }]
    }
  }
}
