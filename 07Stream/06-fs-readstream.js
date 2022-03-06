const fs = require('fs');

let rs = fs.createReadStream('test.txt',{
    flags:'r',
    encoding:null,
    fd:null,
    mode:438,//十进制   666 八进制
    autoClose:true,
    start:0,
    // end:3,
    highWaterMark:2 //每次读多少字节
})

// rs.on('data',(chunk) => {
//     console.log(chunk.toString());
//     rs.pause();
//     setTimeout(() => {
//         rs.resume();
//     }, 1000);
// })

// rs.on('readable',() => {
//     let data;
//     while((data = rs.read())) {
//         console.log(data.toString());
//     }
// })

rs.on('open',(fd) => {
    console.log(fd,'文件打开了');
})

rs.on('close',() => {
    console.log('文件关闭了');
})

let bufArr = [];
rs.on('data',(chunk) => {
    bufArr.push(chunk);
    // console.log(chunk);
})

rs.on('end',() => {
    console.log(Buffer.concat(bufArr).toString());
    console.log('当前数据被清空了');
})

rs.on('error',(err) => {
    console.log(err);
})

