//背景   对于大文件来说，文件的读取、写入、打开、关闭都得是相互独立的
//readFile writeFile缺点：一次性对文件进行读写
const fs = require('fs');
const path = require('path');

//open close
fs.open(path.resolve('data.txt'),'r',(err,fd) => {
    console.log(fd,'haha');
    fs.close(fd,err => {
        console.log('关闭成功');
    })
})