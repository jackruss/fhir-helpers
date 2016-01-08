var test = require('tap').test
var obj = {
  emr: 'testName',
  id: '1234',
  ssn: '123-45-6789',
  familyName: 'smith',
  givenName: 'Taylor',
  phone: '123-456-7890',
  gender: 'male',
  birthDate: '05-04-1989'
}

var expectedResults = {
  resource:
    {
      resourceType: 'patient',
      identifier: [{
        system: 'testName',
        value: '1234'
      }, {
        system: 'SSN',
        value: '123-45-6789'
      }],
      name: {
        family: ['smith'],
        given: ['Taylor']
      },
      gender: 'male',
      birthDate: '05-04-1989',
      telecom: {}
    }
}

var results = require('../helper_methods/patient')(obj)

test('patient helper method', function (t) {
  t.same(results, expectedResults, 'patient resource should be formatted correctly')
  t.end()
})
