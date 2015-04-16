#!/usr/bin/env node

var adventure = require('workshopper-adventure/adventure');
var path = require('path')

var shop = adventure({
  name: 'test-anything',
  appDir: __dirname,
  languages: ['en']
})

var problems = require('./menu.json');

problems.forEach(function(problem) {
  var p = problem.toLowerCase().replace(/,/g, '').replace(/\s/g, '-')
  shop.add(problem, function () {return require(path.join(__dirname, 'exercises', p))})
})

shop.execute(process.argv.slice(2))