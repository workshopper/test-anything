var path = require('path')
var fork = require('child_process').fork
var concat = require('concat-stream')
var verify = require('adventure-verify')


exports.run = function (args) {
  run(args, 'running your module').pipe(process.stdout)
}

exports.verify = verify(function (args, t) {
  t.plan(1)
  
  var testString =  Math.random() + 'test'

  run(args, testString).pipe(concat(function (result) {
    t.equal(result.toString(), testString + ' :)\n', 'adds smily correctly')
  }))
})

function run(args, string) {
  var opts = [path.join(__dirname, 'tests', 'emotify.js'), string]
  var program = fork(path.join(process.cwd(), args[0]), opts, {
    silent: true
  })
  return program.stdout
}