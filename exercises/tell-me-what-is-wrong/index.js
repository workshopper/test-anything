var execTest = require('../utils').execTest
var execRun = require('../utils').execRun
var verify = require('adventure-verify')

exports.verify = verify(execTest.bind(this, __dirname, ['fail.js'], 'pass.js'))
exports.run = function (args) {
  execRun(args, __dirname)
}