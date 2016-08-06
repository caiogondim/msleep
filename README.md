<img src="http://rawgit.com/caiogondim/msleep/master/img/logo.svg">

# msleep

Small function that mimics the `usleep` C function, blocking the main thread.
But instead of microseconds works with miliseconds, to feel more JS-like.

Useful for:
- Debugging race conditions
- Simulate blocked UI thread on the browser

## API

### msleep(sleepTime)

- `sleepTime`: time in miliseconds to block the thread

## Usage

In **node**, install the package through [npm](https://www.npmjs.com/package/msleep) and just `require` it.
```js
var msleep = require('msleep')
msleep(3000) // Will block the main thread for 3 seconds
```

In the **browser**, you should download the minified version or use browserify.
If you download the minified version, it will expose the `msleep` function to
the `window` global object.
```js
msleep(5000) // Will block the main thread for half a second
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
