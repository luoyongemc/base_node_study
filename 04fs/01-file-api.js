const fs = require('fs');
const path = require('path');

//readFile  path.resolve('data.txt')：绝对路径
// fs.readFile(path.resolve('data.txt'),'utf-8',(err,data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

//writeFile  'data.txt':相对路径
// fs.writeFile('data.txt','hello node.js',{
//     mode:438,//可读可写可执行  所有者 组 其他
//     flag:'r+',
//     encoding:'utf-8'
// },(err) => {
//     if(!err){
//         fs.readFile('data.txt','utf-8',(err,data) => {
//             console.log(data);
//         })
//     }
// })


//appendFile
// fs.appendFile('data.txt','拉钩教育',(err) => {
//     console.log('写入成功');
// })

//copyFile
// fs.copyFile('data.txt','test.txt',() => {
//     console.log('拷贝成功');
// })

//watchFile
fs.watchFile('data.txt',{interval:20},(curr,prev) => {
    if(curr.mtime !== prev.mtime) {
        console.log('file change');
        fs.unwatchFile('data.txt');
    }
})