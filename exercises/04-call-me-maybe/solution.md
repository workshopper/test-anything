```js
var test = require('tape')
var repeatCallback = require(process.argv[2])

test('repeatCallback', function (t) {
  t.plan(4)
  repeatCallback(4, function () {
    t.pass('callback called')
  })
})
```
