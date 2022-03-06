const fs = ruquire('fs');
const path = require('path');

/**
 * 需求：自定义一个函数，接收一个路径，然后执行删除
 * 01 判断当前传入的路径是否为一个文件，直接删除当前文件即可
 * 02 如果传入的是一个目录，我们需要继续读取目录中的内容，然后再执行删除操作
 * 03 将删除行为定义成一个函数，然后通过递归的方式进行复用
 * 04将当前的名称拼接在删除时可使用的路径
 */

function myRmdir(dirPath,cb) {
    //判断当前dirPath的类型
    fs.stat(dirPath,(err,statObj) => {
        if(statObj.isDirextory()) {
            //目录---> 继续读取
            fs.readdir(dirPath,(err,files) => {
                let dirs = files.map((item) => {
                    return path.join(dirPath,item)
                })
                let index = 0;
                function next() {
                    if(index == dirs.length) return fs.rmdir(dirPath,cb);
                    let current = dirs[index++];
                    myRmdir(current,next);//next当回调会再进入到next当中去，从而循环index
                }
                next();
            })
        }else {
            //文件----> 直接删除
            fs.unlink(dirPath,cb);
        }
    })
}