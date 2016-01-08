module.exports = function (data) {
  return {
    resource: {
      resourceType: 'AllergyIntolerance',
      identifier: [{
        system: data.emr,
        value: data.value
      }],
      onset: data.onset,
      recordedDate: data.recordedDate,
      substance: {
        coding: [{
          system: data.codingSystem,
          code: data.code,
          display: data.codingDisplay
        }]
      },
      status: data.status,
      criticality: data.criticality,
      category: data.category
    }
  }
}
