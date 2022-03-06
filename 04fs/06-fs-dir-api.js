const fs = require('fs');

// 01 access
// fs.access('a.txt',(err) => {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log('有操作权限');
//     }
// })

//02 stat
// fs.stat('a.txt',(err,statObj) => {
//     console.log(statObj.size);
//     console.log(statObj.isFile());
//     console.log(statObj.isDirectory());
// })


//03 mkdir
// fs.mkdir('a/b/c',{recursive:true},(err) => {
//     if(!err) {
//         console.log('创建成功');
//     }else {
//         console.log(err);
//     }
// })


//04 rmdir
// fs.rmdir('a/b/c',{recursive:true},(err) => {
//     if(!err) {
//         console.log('删除成功');
//     }else {
//         console.log(err);
//     }
// })

//05 readdir
// fs.readdir('a',(err,files) => {
//     console.log(files);
// })

//06 unlink
// fs.unlink('a/a.txt',(err) => {
//     if(!err) {
//         console.log(删除成功);
//     }
// })


