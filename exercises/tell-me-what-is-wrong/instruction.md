# Tell me what's wrong

Write a passing assertion for the function `isCoolNumber`, that will assure that
it returns `true` when passing `42` in it.

The path of the module exporting the function will be provided through
`process.argv[2]`.

-----

## Hints

Well this was probably nothing new for you. But wait don't leave, we are going
to learn about some better ways to do this. 

If you are wondering, what's wrong about `console.log`, then think about this: 
If your functions are going to be more complex it is going to be harder and
harder to actually read the output. You have to know what output is expected for
every input and for different functions.

So it would be better if our tests only told us about whether something works or
not. Surely we could probably test each output with `!==` and warn if something
is wrong like this.

```js
  if(add(2,1) !== 3) throw new Error('add(2,1) should be 3')
```

Now we get an error every time something is wrong, with the message what's not
working. However in node there is a nice built-in module for this called
`assert`.

```js
  var assert = require('assert')
  assert(add(2,1) === 3,'add(2,1) should be 3')
```

Or as alternatively:
```js
  assert.deepEqual(add(2,1), 3, 'add(2,1) should be 3')
```

Here are some functions you can use with assert. For a full list, see the 
documentation.
```js
assert.ok(value, message) // tests if value is truthy
assert.equal(actual, expected, message) // ==
assert.notEqual(actual, expected, message) // !=
assert.deepEqual(actual, expected, message) // for comparing objects
assert.notDeepEqual(actual, expected, message)
assert.strictEqual(actual, expected, message) // ===
assert.notStrictEqual(actual, expected, message) // !==
```


## Resources
- Node documentation: http://nodejs.org/api/assert.html
