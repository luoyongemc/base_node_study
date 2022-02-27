const path = require('path');

// console.log(__filename);

//1.获取路径中的基础名称
/**
 * 01 返回的就是接收路径当中的最后一部分
 * 02 第二个参数表示扩展名，如果说没有设置则返回完整的文件名称后缀
 * 03 第二个参数为后缀时，如果没有在当前路径中匹配到，那么就会忽略
 * 04 处理目录路径的时候如果说，结尾处有路径分隔符，则也会被忽略掉
 */
// console.log(path.basename(__filename));
// console.log(path.basename(__filename,'.js'));
// console.log(path.basename(__filename,'.css'));
// console.log(path.basename('/a/b/c'));
// console.log(path.basename('/a/b/c/'));

//2.获取路径目录名  返回路径中最后一个部分的上一层目录所在路径
// console.log(__filename);
// console.log(path.dirname(__filename));
// console.log(path.dirname('/a/b/v'));

//3 获取路径的扩展名
/**
 * 01 返回path路径中相应文件的后缀名
 * 02 如果path路径当中存在多个点，它匹配的是最后一个点，到结尾的内容
 */
// console.log(path.extname(__filename));
// console.log(path.extname('/a/b/index.html.js'));

//4  解析路径
/**
 * 01 接收一个路径，返回一个对象，包含不同的信息
 * 02 root dir base ext name
 */
// const obj = path.parse('/a/b/c/index.html');
// console.log(obj);

//5 序列化路径
// const obj = path.parse('/a/b/c/index.html');
// console.log(path.format(obj));

//6 判断当前路径是否为绝对路径
// console.log(path.isAbsolute('foo'));
// console.log(path.isAbsolute('/foo/bar'));
// console.log(path.isAbsolute('./foo/bar'));

//7 拼接路径  相对路径
// console.log(path.join('a/b','c','index.html'));
// console.log(path.join('/a.b','c','index.html'));
// console.log(path.join('/a.b','c','./','index.html'));

//8 规范化路径
// console.log(path.normalize('a/b/c/d'));
// console.log(path.normalize('a///\b/c/d'));

//9 绝对路径
/**
 * resolve([from],to)
 */
// console.log(path.resolve());
// console.log(path.resolve(__dirname,'b'));
