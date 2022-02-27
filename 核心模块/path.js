const path = require('path');

console.log(__filename);

const base_dir = path.dirname(__filename);
console.log(base_dir);

const src_dir = path.join(base_dir,'src');
const src_dir1 = path.resolve(base_dir,'src');
console.log(src_dir);
console.log(src_dir1);