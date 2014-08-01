#!/usr/bin/env node

var adventure = require('adventure')
var path = require('path')

var shop = adventure('test-anything')

shop.add('LOG IT OUT', 
  function () { return require('./exercises/01-log-it-out') })
shop.add('TELL ME WHAT IS WRONG', 
  function () { return require('exercises/02-tell-me-what-is-wrong') })

shop.execute(process.argv.slice(2))