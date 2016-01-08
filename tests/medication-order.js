var test = require('tap').test
var obj = {
  emr: 'EMRNAME',
  value: '1234',
  dateWritten: '2014-01-21',
  status: 'active',
  medicationName: 'Phentermine 37.5 mg Oral Capsule',
  code: '803348',
  codingSystem: 'urn:oid:2.16.840.1.113883.6.88',
  codingDisplay: 'Phentermine 37.5 mg Oral Capsule',
  codingPrimary: true,
  codingText: 'RxNorm',
  medicationIsBrand: false,
  medicationKind: 'product',
  dosageFrequency: '2',
  dosageDuration: '1',
  dosageUnits: 'd',
  dosageAsNeeded: false
}

var expectedResults = {
  resource: {
    resourceType: 'medicationOrder',
    identifier: [{
      system: 'EMRNAME',
      value: '1234'
    }],
    dateWritten: '2014-01-21',
    status: 'active',
    medication: {
      name: 'Phentermine 37.5 mg Oral Capsule',
      code: {
        coding: [{
          code: '803348',
          system: 'urn:oid:2.16.840.1.113883.6.88',
          display: 'Phentermine 37.5 mg Oral Capsule',
          primary: true
        }],
        text: 'RxNorm'
      },
      isBrand: false,
      kind: 'product'
    },
    dosageInstruction: [{
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

var results = require('../helper_methods/medication-order')(obj)

test('medication-order helper method', function (t) {
  t.same(results, expectedResults, 'medication-order resource should be formatted correctly')
  t.end()
})
