var test = require('tap').test
var obj = {
  emr: 'EMRNAME',
  value: '1222',
  medicationName: 'Diazepam 5MG Tablet',
  code: '197591',
  codingSystem: 'urn:oid:2.16.840.1.113883.6.88',
  codingDisplay: 'Diazepam 5MG Tablet',
  codingPrimary: true,
  codingText: 'RxNorm',
  medicationIsBrand: false,
  medicationKind: 'product',
  frequency: '2',
  duration: '1',
  units: 'd',
  dosageAsNeeded: false
}

var expectedResults = {
  resource: {
    resourceType: 'medicationStatement',
    identifier: [{
      system: 'EMRNAME',
      value: '1222'
    }],
    medication: {
      name: 'Diazepam 5MG Tablet',
      code: {
        coding: [{
          code: '197591',
          system: 'urn:oid:2.16.840.1.113883.6.88',
          display: 'Diazepam 5MG Tablet',
          primary: true
        }],
        text: 'RxNorm'
      },
      isBrand: false,
      kind: 'product'
    },
    dosage: [{
      timing: {
        repeat: {
          frequency: '2',
          duration: '1',
          units: 'd'
        }
      },
      asNeeded: false
    }]
  }
}

var results = require('../helper_methods/medication-statement')(obj)

test('medication-statement helper method', function (t) {
  t.same(results, expectedResults, 'medication-statement resource should be formatted correctly')
  t.end()
})
