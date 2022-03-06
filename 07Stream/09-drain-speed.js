const fs = require('fs');

let ws = fs.createWriteStream('test3.txt',{
    highWaterMark:3
})

let source = '拉钩教育'.split('');
let num = 0;
let flag = true;

function executeWrite() {
    flag = true;
    while(num !== source.length && flag){
        flag = ws.write(source[num]);
        num++;
    }
}

executeWrite();

ws.on('drain',() => {
    console.log('drain 执行了');
    executeWrite();
})