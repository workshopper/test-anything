var msee = require('msee')

var mseeOptions = {
  paragraphStart: '',
  paragraphEnd: '\n\n'
}

exports.parse = function (fileName) {
  return msee.parseFile(fileName, mseeOptions)
}