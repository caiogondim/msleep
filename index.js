var delay = 2000
var initTime = new Date

console.log('init')
while ((new Date).getTime() < (initTime.getTime() + delay));
console.log('end')
