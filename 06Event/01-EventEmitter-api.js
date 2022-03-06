const EventEmitter = require('events');

const ev = new EventEmitter();

// //on

// ev.on('事件1', () => {
//     console.log('事件1执行了');
// });

// //emit  订阅了两次，执行了两次
// ev.emit('事件1')
// ev.emit('事件1')


//on

// ev.once('事件1', () => {
//     console.log('事件1执行了');
// });

//emit  订阅两次，只执行了一次
// ev.emit('事件1')
// ev.emit('事件1')


//off
// let cbFn = () => {
//     console.log('事件1执行了');
// }
// ev.on('事件1',cbFn);

// ev.emit('事件1');
// ev.off('事件1',cbFn);
// ev.emit('事件1');

//...args
let cbFn = (a,b) => {
    console.log(a,b);
}
ev.on('事件1',cbFn);


ev.emit('事件1',1,2);