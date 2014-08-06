var path = require('path')
var exec = require('child_process').exec
var verify = require('adventure-verify')
var parse = require('../utils').parse

exports.problem = parse(path.join(__dirname, 'instruction.md'))
exports.solution = parse(path.join(__dirname, 'solution.md'))


exports.verify = verify(function (args, t) {
  t.plan(4)
  
  var cmd = 'node ' + path.join(process.cwd(), args[0]) +
   ' ' + path.join(__dirname, 'fail1.js')
  
  exec(cmd, function (err) {
    t.ok(err, 'correctly failed for missing first option')
  })
  
  cmd = 'node ' + path.join(process.cwd(), args[0]) +
   ' ' + path.join(__dirname, 'fail2.js')
   
  exec(cmd, function (err) {
    t.ok(err, 'correctly failed for missing second option')
  })
   
  cmd = 'node ' + path.join(process.cwd(), args[0]) +
    ' ' + path.join(__dirname, 'fail3.js')
  
  exec(cmd, function (err) {
    t.ok(err, 'correctly failed for missing third options')
  })
  
  cmd = 'node ' + path.join(process.cwd(), args[0]) +
    ' ' + path.join(__dirname, 'pass.js')
  
  exec(cmd, function (err) {
    t.ok(!err, 'correctly passed correct solution')
  })
})