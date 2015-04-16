var path = require('path')
var verify = require('../../verify')
var parse = require('../utils').parse
var execTest = require('../utils').execTest
var execRun = require('../utils').execRun

exports.init = function (workshopper) {
  var postfix = workshopper.lang === 'en' ? '' : '_' + workshopper.lang
  this.problem  = parse(path.join(__dirname, 'instruction' + postfix + '.md'))
  this.solution = parse(path.join(__dirname, 'solution.md'))
}

exports.verify = verify(execTest.bind(
  this, __dirname, ['fail.js', 'fail2.js'], 'pass.js'
))

exports.run = function (args) {
  execRun(args, __dirname)
}