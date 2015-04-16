var fs = require('fs')
var path = require('path')
var fork = require('child_process').fork
var concat = require('concat-stream')
var parse = require('../utils').parse
var verify = require('../../verify')

var messages;

exports.init = function (workshopper) {
  var postfix = workshopper.lang === 'en' ? '' : '_' + workshopper.lang
  messages = require('./messages' + postfix + '.json')
  this.problem  = parse(path.join(__dirname, 'instruction' + postfix + '.md'))
  this.solution = parse(path.join(__dirname, 'solution.md'))
}

exports.run = function (args) {
  run(args, messages[0]).pipe(process.stdout)
}

exports.verify = verify(function (args, t) {
  t.plan(1)
  
  var testString =  Math.random() + 'test'

  run(args, testString).pipe(concat(function (result) {
    t.equal(result.toString(), testString + ' :)\n', 'adds smily correctly')
  }))
})

function run(args, string) {
  var opts = [ path.join(__dirname, 'tests', 'emotify.js'), string]
  var program = fork(path.join(process.cwd(), args[0]), opts ,{silent: true})
  return program.stdout
}