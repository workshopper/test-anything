var path = require('path')
var exec = require('child_process').exec
var parse = require('../utils').parse
var verify = require('adventure-verify')


exports.problem = parse(path.join(__dirname, 'instruction.md'))
exports.solution = parse(path.join(__dirname, 'solution.md'))


exports.verify = verify(function (args, t) {
  t.plan(2)
  var cmd = 'node ' + path.join(process.cwd(), args[0]) +
   ' ' + path.join(__dirname, 'tests', 'fail.js')
  
  exec(cmd, function (err) {
    t.ok(err, 'wrong function not accepted')
  })
  
  var cmd = 'node ' + path.join(process.cwd(), args[0]) +
   ' ' + path.join(__dirname, 'tests', 'pass.js')
   
  exec(cmd, function (err) {
    t.ok(!err, 'correct function accepted')
  })
  
})