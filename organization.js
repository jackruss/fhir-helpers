module.exports = function (label, value, name) {
  return {
    resourceType: 'organization',
    identifier: {
      label: label,
      value: value
    },
    name: name
  }
}
