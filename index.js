module.exports = {
  createBundle: require('./helperMethods/bundle'),
  createPatient: require('./helperMethods/patient'),
  createOrganization: require('./helperMethods/organization'),
  createMedicationStatement: require('./helperMethods/medication-statement'),
  createMedicationOrder: require('./helperMethods/medication-order'),
  createAllergy: require('./helperMethods/allergy'),
  createObservation: require('./helperMethods/observation'),
  createPractitioner: require('./helperMethods/practitioner')
}
