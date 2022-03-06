const fs = require('fs');
const path = require('path');
const {promisify} = require('util')

// function mkDir(dirPath,cb) {
//     let parts = dirPath.split('/');
//     let index = 1;

//     function next() {
//         if(index > parts.length) return cb && cb();

//         let current = parts.slice(0,index++).join('/');

//         fs.access(current,(err) => {
//             if(err){
//                 fs.mkdir(current,next)
//             }else {
//                 next();
//             }
//         })
//     }

//     next();
// }

// mkDir('a/b/c');


//将access于midir处理成async...风格
const access = promisify(fs.access);
const mkdir = promisify(fs.mkdir);

async function myMkdir(dirPath,cb) {
    let parts = dirPath.split('/');
    for(let i = 1; i <= parts.length; i++){
        let current = parts.slice(0,i).join('/');
        try {
            await access(current);
        } catch (error) {
            await mkdir(current);
        }
    }
    cb && cb();
}

myMkdir('a/b/c');



