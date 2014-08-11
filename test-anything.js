#!/usr/bin/env node

var adventure = require('adventure')
var path = require('path')

var shop = adventure('test-anything')

shop.add('LOG IT OUT', 
  function () { return require('./exercises/01-log-it-out') })
shop.add('TELL ME WHAT IS WRONG', 
  function () { return require('./exercises/02-tell-me-what-is-wrong') })
shop.add('TAPE IT TOGETHER',
  function () { return require('./exercises/03-tape-it-together') })
shop.add('CALL ME MAYBE',
  function() { return require('./exercises/04-call-me-maybe')})
shop.add('TO ERR IS HUMAN, TO PURR FELINE',
  function () { return require('./exercises/05-to-err-is-human')})

shop.execute(process.argv.slice(2))