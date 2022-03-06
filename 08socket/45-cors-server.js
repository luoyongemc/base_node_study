const http = require('http');

const server = http.createServer((req,res) => {
    console.log('request come in');

    let arr = [];
    req.on('data',(data) => {
        arr.push(data);
    })
    req.on('end',() => {
        console.log(Buffer.concat(arr).toString());
        res.end('拿到了客户端的数据')
    })

});

server.listen(1234,() => {
    console.log('server is start');
})