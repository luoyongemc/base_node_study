const fs = require('fs');

const ws = fs.createWriteStream('test2.txt',{
    flags:'w',
    mode:438,
    fd:null,
    encoding:'utf-8',
    start:0,
    highWaterMark:3
})

// ws.write('拉钩教育',() => {
//     console.log('数据写完了');
// })

ws.on('open',(fd) => {
    console.log(fd,'open');
})

ws.write('1');

//close 是在数据写入操作全部完成之后执行
ws.on('close',() => {
    console.log('文件关闭了');
})

//end 执行之后就意味着数据写入操作完成
ws.end();

ws.on('error',(err) => {
    console.log('出错了');
})