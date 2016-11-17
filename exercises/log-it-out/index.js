var path = require('path')
var fork = require('child_process').fork
var concat = require('concat-stream')
var parse = require('../utils').parse
var verify = require('adventure-verify')

exports.problem = parse(path.join(__dirname, 'instruction.md'))
exports.solution = parse(path.join(__dirname, 'solution.md'))

exports.run = function (args) {
  run(args, 'running your module').pipe(process.stdout)
}

exports.verify = verify(function (args, t) {
  t.plan(1)

  var testString = Math.random() + 'test'

  run(args, testString).pipe(concat(function (result) {
    t.equal(result.toString(), testString + ' :)\n', 'adds smiley correctly')
  }))
})

function run (args, string) {
  var opts = [path.join(__dirname, 'tests', 'emotify.js'), string]
  var program = fork(path.join(process.cwd(), args[0]), opts, {silent: true})
  return program.stdout
}
