var verify = require('../../verify')
var execTest = require('../utils').execTest
var execRun = require('../utils').execRun

exports.verify = verify(execTest.bind(
  this, __dirname, ['fail1.js', 'fail2.js'], 'pass.js'
))

exports.run = function (args) {
  execRun(args, __dirname)
}