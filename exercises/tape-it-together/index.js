var path = require('path')
var verify = require('../../verify')
var parse = require('../utils').parse
var fs= require('fs')
var execTest = require('../utils').execTest
var execRun = require('../utils').execRun
var path = require('path')
var md = require('cli-md')

exports.init = function (workshopper) {
  var postfix = workshopper.lang === 'en' ? '' : '_' + workshopper.lang
  this.problem  = parse(path.join(__dirname, 'instruction' + postfix + '.md'))
  this.solution = parse(path.join(__dirname, 'solution.md'))
}

exports.run = function (args) {
  execRun(args, __dirname)
}

exports.verify = verify(execTest.bind(
  this, __dirname, ['fail1.js', 'fail2.js', 'fail3.js'], 'pass.js'
))