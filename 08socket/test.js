const MyTransformCode = require('./myTransform');

let ts = new MyTransformCode();

let str1 = '拉钩教育';

console.log(ts.encode(str1,1));

let encodeBuf = ts.encode(str1,1);

let a = ts.decode(encodeBuf);
console.log(a);

let len = ts.getPackageLen(encodeBuf);
console.log(len);