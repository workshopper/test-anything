var execTest = require('../utils').execTest
var execRun = require('../utils').execRun
var verify = require('../../verify')

exports.verify = verify(execTest.bind(
  this, __dirname, ['fail.js', 'fail2.js'], 'pass.js'
))

exports.run = function (args) {
  execRun(args, __dirname)
}