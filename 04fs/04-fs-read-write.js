const fs = require('fs');

//read: 所谓读操作就是将数据从磁盘文件中写入到buffer中

let buf = Buffer.alloc(10);

/**
 * fd:定位当前被打开的文件
 * buf:用于表示当前缓冲区
 * offset:表示当前从buf的哪个位置开始执行写入
 * length:表示当前次写入的长度
 * position：表示当前文件的哪个位置开始读取
 */
// fs.open('data.txt','r',(err,rfd) => {
//     console.log(rfd);
//     fs.read(rfd,buf,1,4,2,(err,readBytes,data) => {
//         console.log(readBytes);
//         console.log(data);
//         console.log(data.toString());
//     })
// })


//write 将缓冲区里的内容写入到磁盘文件中
buf = Buffer.from('123456789');
fs.open('b.txt','w',(err,wfd) => {
    fs.write(wfd,buf,1,3,0,(err,written,buffer) => {
        console.log(written);
        console.log(buffer);
        console.log(buffer.toString());
    })
    fs.close(wfd,() => {
        console.log('close success');
    });
})

