# FHIR-helpers

This library is intended to deliver helper methods for forming FHIR resources that follow the [hl7 FHIR](http://www.hl7.org/fhir/) standard.

## Helpers

### Allergy

```js
var fhir = require('fhir-helpers')

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

var allergyResource = fhir.createAllergy(obj)

/* → {
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
*/
```

### Medication-order

```js
var fhir = require('fhir-helpers')

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

var medicationOrderResource = fhir.createMedicationOrder(obj)

/* → {
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
*/
```

### Medication-statement

```js
var fhir = require('fhir-helpers')

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

var medicationStatementResource = fhir.createMedicationStatement(obj)

/* → {
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
*/
```

### Organization

```js
var fhir = require('fhir-helpers')

var obj = {
  system: 'orgSystem',
  value: '123456',
  name: 'testOrg'
}

var organizationResource = fhir.createOrganization(obj)

/* → {
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
*/
```

### Patient

```js
var fhir = require('fhir-helpers')

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

var patientResource = fhir.createPatient(obj)

/* → {
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
*/
```

### Practitioner

```js
var fhir = require('fhir-helpers')

var obj = {
  emr: 'testName',
  id: '1234',
  npi: '123456789',
  familyName: 'smith',
  givenName: 'Taylor',
  birthDate: '05-04-1989',
  gender: 'male'
}

var practitionerResource = fhir.createPractitioner(obj)

/* → {
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
*/
```

## Contributions

For feature requests or suggestions, please post an issue.

All developers are encourage to provide feedback, comments, update the readme, etc.

This Project follows the StandardJS style guide.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

To Contribute:

- Clone Repo
- `npm install`
- Write Code
- Write/Update Test(s)
- Update README (if necessary)
- Submit Pull Request

## Contributors

| [![twitter/kevco54](https://gravatar.com/avatar/c3f0cac49ad7d267cb58499a86bfdd19)](https://twitter.com/kevco54 "Follow @kevco54 on Twitter") |
|---|
| [Kevin Collins](https://iamkevin.co/) |

| [![twitter/twilson63](https://gravatar.com/avatar/eaee4a968ac2e346ec28faf0c46ffdc7)](https://twitter.com/twilson63 "Follow @twilson63 on Twitter") |
|---|
| [Tom Wilson](https://github.com/twilson63) |

## License

_FHIR-helpers_ is available under the [MIT](https://mths.be/mit) license.
