const testAnything = require('workshopper-adventure')({
    title: 'TEST ANYTHING'
  , name: 'TEST-ANYTHING'
  , appDir: __dirname
  , languages: ['en', 'ja']
  , defaultLang: 'en'
  , header: require('workshopper-adventure/default/header')
  , footer: require('workshopper-adventure/default/footer')
})

testAnything.addAll(
  require('./menu.json').map(function(problem) {
    var p = problem.toLowerCase().replace(/,/g, '').replace(/\s/g, '-')
    return {
        name: problem
      , fn: function () {
          var path = require('path')
          var folder = path.join(__dirname, 'exercises', p)
          var exercise = require(folder)
          exercise.problem  = {file: [
            path.join(folder, 'instruction.{lang}.md'),
            path.join(folder, 'instruction.md')
          ]}
          exercise.solution = { file: [
            path.join(folder, 'solution.{lang}.md'),
            path.join(folder, 'solution.md')
          ]} 
          return exercise
        }
    }
  })
)

module.exports = testAnything