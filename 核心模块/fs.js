const fs = require('fs');

fs.readFile('./test.txt','utf-8',(err,data) => {
    if(err){
        throw err;
        return;
    }
    console.log(data);
})

fs.writeFile('aaa.txt','aaa','utf-8',(err,data) => {
    if(err){
        throw err;
        return;
    }
    console.log(data);
})