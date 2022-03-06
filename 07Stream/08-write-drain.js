const fs = require('fs');

const ws = fs.createWriteStream('test2.txt',{
    highWaterMark:3
})

let flag = ws.write('1');
console.log(flag);

flag = ws.write('2');
console.log(flag);
flag = ws.write('3');
console.log(flag);

ws.on('drain', () => {
    console.log('111');
})
