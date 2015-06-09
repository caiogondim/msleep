# msleep

Small function that mimics the `usleep` C function, blocking the main thread.
But instead of microseconds works with miliseconds, to feel more JS-like.

Useful for:
- Debugging race conditions
- Simulate blocked UI thread on the browser

## API

### msleep(sleepTime)

- `sleepTime`: time in miliseconds to block the thread
