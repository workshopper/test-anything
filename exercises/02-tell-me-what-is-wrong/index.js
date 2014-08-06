var fs = require('fs')
var path = require('path')
var exec = require('child_process').exec
var concat = require('concat-stream')
var msee = require('msee')
var verify = require('adventure-verify')


exports.problem = msee.parseFile(path.join(__dirname, 'instruction.md'))
exports.solution = msee.parseFile(path.join(__dirname, 'solution.md'))


exports.verify = verify(function (args, t) {
  t.plan(2)
  var cmd = 'node ' + path.join(process.cwd(), args[0]) +
   ' ' + path.join(__dirname, 'fail.js')
  
  exec(cmd, function (err) {
    t.ok(err, 'wrong function not accepted')
  })
  
  var cmd = 'node ' + path.join(process.cwd(), args[0]) +
   ' ' + path.join(__dirname, 'pass.js')
   
  exec(cmd, function (err) {
    t.ok(!err, 'correct function accepted')
  })
  
})