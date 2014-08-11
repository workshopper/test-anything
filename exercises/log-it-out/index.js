var fs = require('fs')
var path = require('path')
var fork = require('child_process').fork
var concat = require('concat-stream')
var parse = require('../utils').parse
var verify = require('adventure-verify')


exports.problem = parse(path.join(__dirname, 'instruction.md'))
exports.solution = parse(path.join(__dirname, 'solution.md'))


exports.verify = verify(function (args, t) {
  t.plan(1)
  
  var program = fork(path.join(process.cwd(), args[0]), 
    [ path.join(__dirname, 'tests', 'emotify.js'), "testing like a pro"],
    {silent: true})
  
  program.stdout.pipe(concat(function (result) {
      t.equal(result.toString(), 'testing like a pro :)\n', 'adds smiley correctly')
  }))
})