var test = require('tap').test
var obj = {
  emr: 'testName',
  id: '1234',
  npi: '123456789',
  familyName: 'smith',
  givenName: 'Taylor',
  birthDate: '05-04-1989',
  gender: 'male'
}

var expectedResults = {
  resource:
    {
      resourceType: 'practitioner',
      identifier: [{
        system: 'testName',
        value: '1234'
      }, {
        system: 'NPI',
        value: '123456789'
      }],
      name: {
        family: ['smith'],
        given: ['Taylor']
      },
      gender: 'male',
      birthDate: '05-04-1989'
    }
}

var results = require('../helper_methods/practitioner')(obj)

test('practitioner helper method', function (t) {
  t.same(results, expectedResults, 'practitioner resource should be formatted correctly')
  t.end()
})
