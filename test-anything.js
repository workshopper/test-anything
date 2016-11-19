#!/usr/bin/env node

var adventure = require('adventure')

process.noDeprecation = true

var shop = adventure({
  title: 'TEST ANYTHING!',
  name: 'test-anything'
})

shop.add('» LOG IT OUT',
  function () { return require('./exercises/log-it-out') })
shop.add('» TELL ME WHAT IS WRONG',
  function () { return require('./exercises/tell-me-what-is-wrong') })
shop.add('» TAPE IT TOGETHER',
  function () { return require('./exercises/tape-it-together') })
shop.add('» CALL ME MAYBE',
  function () { return require('./exercises/call-me-maybe') })
shop.add('» TO ERR IS HUMAN, TO PURR FELINE',
  function () { return require('./exercises/to-err-is-human') })

shop.execute(process.argv.slice(2))
