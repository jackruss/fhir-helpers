var test = require('tap').test
var obj = {
  emr: 'FooBar',
  value: 'medication',
  onset: '2010-03-01',
  recordedDate: '2010-03-01',
  codingSystem: 'http:\/\/www.nlm.nih.gov\/research\/umls\/rxnorm',
  code: '314422',
  codingDisplay: 'ALLERGENIC EXTRACT, PENICILLIN',
  status: 'unconfirmed',
  criticality: 'CRITU',
  category: 'medication'
}

var expectedResults = {
  resource: {
    resourceType: 'AllergyIntolerance',
    identifier: [{
      system: 'FooBar',
      value: 'medication'
    }],
    onset: '2010-03-01',
    recordedDate: '2010-03-01',
    substance: {
      coding: [{
        system: 'http:\/\/www.nlm.nih.gov\/research\/umls\/rxnorm',
        code: '314422',
        display: 'ALLERGENIC EXTRACT, PENICILLIN'
      }]
    },
    status: 'unconfirmed',
    criticality: 'CRITU',
    category: 'medication'
  }
}

var results = require('../helper_methods/allergy')(obj)

test('allergy helper method', function (t) {
  t.same(results, expectedResults, 'allergy resource should be formatted correctly')
  t.end()
})
