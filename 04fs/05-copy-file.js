const fs = require('fs');

/**
 * 01 打开a文件，利用read将数据保存到buffer 暂存起来
 * 02 打开b文件 利用write将buffer中数据写入到b文件中
 */

let buf = Buffer.alloc(10);

//01 打开指定文件
// fs.open('a.txt','r',(err,rfd) => {
    
//     //03 打开b文件，用于执行数据写入操作
//     fs.open('b.txt','w',(err,wfd) => {
//         //02 从打开的文件中读取数据
//         fs.read(rfd,buf,0,10,0,(err,readBytes) => {
//             //04 将buffer中的数据写入到b.txt中
//             fs.write(wfd,buf,0,10,0,(err,written) => {
//                 console.log('写入成功');
//             })
//         })
//     })
// })


const BUFFER_SIZE = buf.length;
let readOffset = 0;
fs.open('a.txt','r',(err,rfd) => {
    fs.open('b.txt','w',(err,wfd) => {
        function next() {
            fs.read(rfd,buf,0,BUFFER_SIZE,readOffset,(err,readBytes) => {
                if(!readBytes){
                    //内容已经读取完毕
                    fs.close(rfd,()=>{});
                    fs.close(wfd,()=>{});
                    console.log('拷贝完成');
                    return;
                }
                readOffset += readBytes;
                fs.write(wfd,buf,0,readBytes,(err,written) => {
                    // console.log('写入成功');
                    next();
                })
            })
        }
        next();
    })
})