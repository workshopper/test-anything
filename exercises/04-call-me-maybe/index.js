var verify = require('adventure-verify')
var exec = require('child_process').exec
var parse = require('../utils').parse
var path = require('path')

exports.problem = parse(path.join(__dirname, 'instruction.md'))
exports.solution = parse(path.join(__dirname, 'solution.md'))

exports.verify = verify(function (args, t) {
  t.plan(3)
  
  var cmd = 'node ' + path.join(process.cwd(), args[0]) +
   ' ' + path.join(__dirname, 'tests', 'fail1.js')
  
  exec(cmd, function (err) {
    t.ok(err, 'correctly failed, too much callbacks')
  })
  
  cmd = 'node ' + path.join(process.cwd(), args[0]) +
   ' ' + path.join(__dirname, 'tests', 'fail2.js')
   
  exec(cmd, function (err) {
    t.ok(err, 'correctly failed, not enough callbacks')
  })
   
  cmd = 'node ' + path.join(process.cwd(), args[0]) +
    ' ' + path.join(__dirname, 'tests', 'pass.js')
  
  exec(cmd, function (err) {
    t.ok(!err, 'correctly passed, right number of callbacks')
  })
})