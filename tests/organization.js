var test = require('tap').test
var obj = {
  system: 'orgSystem',
  value: '123456',
  name: 'testOrg'
}

var expectedResults = {
  resource:
    {
      resourceType: 'organization',
      identifier: {
        system: 'orgSystem',
        value: '123456'
      },
      name: 'testOrg'
    }
}

var results = require('../helper_methods/organization')(obj)

test('organization helper method', function (t) {
  t.same(results, expectedResults, 'organization resource should be formatted correctly')
  t.end()
})
