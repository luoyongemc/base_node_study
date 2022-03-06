const fs = require('fs');
const path = require('path');

/**
 * 01 将来调用时需要接收类似于 a/b/c 这样的路径，他们之间用/连接
 * 02 利用/分隔符将路径进行拆分，将每一项放入一个数组中进行管理  ['a','b','c']
 * 03对上述的数组进行遍历，我们每拿到一项进行拼接 /
 * 04判断一个当前对拼接之后的路径是否具有可操作的权限，如果有则证明存在，否则的话就需要进行创建
 */

function makeDirSync(dirPath) {
    let items = dirPath.split(path.sep);
    for(let i = 1; i <= items.length; i++){
        let dir = items.slice(0,i).join(path.sep);
        try {
            fs.accessSync(dir)
        } catch (error) {
            fs.mkdirSync(dir)
        }
    }
}

makeDirSync('a/b/c');