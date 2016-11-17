var md = require('cli-md')
var fs = require('fs')
var fork = require('child_process').fork
var path = require('path')

exports.parse = function (fileName) {
  return md(fs.readFileSync(fileName).toString())
}

exports.execTest = function (dir, failFiles, passFile, args, t) {
  t.plan(failFiles.length + 1)

  var solutionFile = args[0]

  failFiles.forEach(function (testFile) {
    var program = fork(path.join(process.cwd(), solutionFile),
      [ path.join(dir, 'tests', testFile) ],
      {silent: true})

    program.on('close', function (code) {
      t.ok(code, 'wrong function not accepted')
    })
  })

  var program = fork(path.join(process.cwd(), solutionFile),
    [ path.join(dir, 'tests', passFile) ],
    {silent: true})

  program.on('close', function (code) {
    t.ok(!code, 'correct function accepted')
  })
}

exports.execRun = function (args, dirname) {
  var out = ''
  out += [
    'Create your own module (`metatest.js`) to test your test.',
    'Then run your code like this:',
    '`node ' + args[0] + ' ./metatest.js`',
    'The `metatest.js` file could look like this to pass your',
    'tests:'
  ].join('\n')

  out += '\n```js\n' + fs.readFileSync(path.join(dirname, 'tests/pass.js'), 'utf-8') + '\n```'

  out += '\nChange things in your `metatest.js` to make it fail your\ntests as well.'

  console.log(md(out))
}
