// console.log(global);
 // __filename  __dirname  process module.exports require timer累函数

 console.log(this === global);

 (function () {
     console.log(this === global);
 })()