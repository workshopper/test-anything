#!/usr/bin/env node

var adventure = require('workshopper-adventure');
var path = require('path')

var shop = adventure({
  appDir: __dirname,
  languages: ['en', 'ja']

})

var problems = require('./menu.json');
problems.forEach(function(problem) {
  var p = problem.toLowerCase().replace(/,/g, '').replace(/\s/g, '-')
  shop.add(problem, function () {
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
  })
})
shop.execute(process.argv.slice(2))