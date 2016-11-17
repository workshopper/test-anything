var path = require('path')
var verify = require('adventure-verify')
var parse = require('../utils').parse
var execTest = require('../utils').execTest
var execRun = require('../utils').execRun

exports.problem = parse(path.join(__dirname, 'instruction.md'))
exports.solution = parse(path.join(__dirname, 'solution.md'))

exports.run = function (args) {
  execRun(args, __dirname)
}

exports.verify = verify(execTest.bind(
  this, __dirname, ['fail1.js', 'fail2.js', 'fail3.js'], 'pass.js'
))
