var path = require('path')
var parse = require('../utils').parse
var execTest = require('../utils').execTest
var execRun = require('../utils').execRun
var verify = require('adventure-verify')

exports.problem = parse(path.join(__dirname, 'instruction.md'))
exports.solution = parse(path.join(__dirname, 'solution.md'))
exports.verify = verify(execTest.bind(this, __dirname, ['fail.js'], 'pass.js'))
exports.run = function (args) {
  execRun(args, __dirname)
}
