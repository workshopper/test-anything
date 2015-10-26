var verify = require('adventure-verify')
var execTest = require('../utils').execTest
var execRun = require('../utils').execRun
var path = require('path')

exports.run = function (args) {
  execRun(args, __dirname)
}

exports.verify = verify(execTest.bind(
  this, __dirname, ['fail1.js', 'fail2.js', 'fail3.js'], 'pass.js'
))