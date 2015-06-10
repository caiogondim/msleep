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

## License

The MIT License (MIT)

Copyright (c) 2015 [Caio Gondim](http://caiogondim.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
