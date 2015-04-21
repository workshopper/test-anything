# Log it out

Developing apps and modules is fun. However often you might be concerned whether
things work or when you add new features you want to be sure you did not break
anything. Therefore developers invented tests for their well-being. They allow 
you to automatically, well, test your application or module.

Let's assume you wrote a function called `emotify`, which takes a String and
adds a space and a `:)` to it. How would you check that your function is
working?

Maybe your first idea was calling the function with a value and `console.log`
the result and then check its output in the console.

```js
  var emotify = require('./emotify.js')
  console.log(emotify('just testing'))
```

Try this yourself. We are going to provide the location for the awesome
`emotify` module in `process.argv[2]` and the String for the test in
`process.argv[3]`.
