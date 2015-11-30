var bundle = require('./bundle')
var patient = require('./patient')
var organization = require('./organization')
var medicationStatement = require('./medication-statement')
var medicationOrder = require('./medication-order')
var observation = require('./observation')
var allergy = require('./allergy')

module.exports = {
  createBundle: bundle,
  createPatient: patient,
  createOrganization: organization,
  createMedicationStatement: medicationStatement,
  createMedicationOrder: medicationOrder,
  createAllergy: allergy,
  createObservation: observation,
  createPractitioner: practitioner
}
