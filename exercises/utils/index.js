var md = require('cli-md')
var fs = require('fs')

exports.parse = function (fileName) {
  return md(fs.readFileSync(fileName).toString())
}