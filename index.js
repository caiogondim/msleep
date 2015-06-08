/**
 * Blocks the main thread for `sleepTime` ms
 * @param  {Number} sleepTime number of ms to block the main thread
 * @return {Undefined}
 */
function msleep(sleepTime) {
  var initTime = new Date
  while((new Date).getTime() < (initTime.getTime() + sleepTime));
}

console.log('init')
msleep(4000)
console.log('end')
