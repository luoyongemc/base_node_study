const fs = require('fs');

const myReadStream = require('./11-read-stream');

// const rs = fs.createReadStream('./test.txt',{
//     highWaterMark:4
// })

const rs = new myReadStream('./test.txt');
console.log(rs.pause,222);

const ws = fs.createWriteStream('test8.txt');

// rs.pipe(ws);