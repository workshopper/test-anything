var fs = require('fs')
var path = require('path')
var exec = require('child_process').exec
var concat = require('concat-stream')
var msee = require('msee')


exports.problem = msee.parseFile(path.join(__dirname, 'instruction.md'))
exports.solution = msee.parseFile(path.join(__dirname, 'solution.md'))


exports.verify = function (args, pass) {
  var cmd = 'node ' + path.join(process.cwd(), args[0]) +
   ' ' + path.join(__dirname, 'emotify.js') + 
   ' ' + '"testing like a pro"'
  
  var program = exec(cmd)
  
  program.stdout.pipe(concat(function (result) {
      if(result === 'testing like a pro :)\n') {
        pass(true)
      } else {
        console.log('Something is not right there')
        pass(false)
      }
    
  }))
  
  
}