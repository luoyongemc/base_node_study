setTimeout(() => {
    console.log('s1');
});

Promise.resolve().then(() => {
    console.log('p1');
})

console.log('start');

//nodejs里的微任务
process.nextTick(() => {
    console.log('tick');
})

setImmediate(() => {
    console.log('setImmediate');
})

console.log('end');

/**
 * start end tick(优先级较高) p1 s1 setImmediate
 */