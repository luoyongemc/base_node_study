const { read } = require('fs');
const http = require('http');
const url = require('url');
// const { text } = require('stream/consumers');

const server = http.createServer();


server.on('request',(req,res) => {
    res.writeHead(200,{
        'content-type':'text/html;charset=utf-8'
    })
    const {query, pathname} = url.parse(req.url,true);

    if(pathname === '/' || pathname === '/index') {
        res.end('首页');
    }else if(pathname === '/list') {
        res.end('列表页')
    }else if(pathname === '/detail') {
        if(req.method === 'GET'){
            console.log(query);
        }
        res.end('详情页')
    }else {
        res.writeHead(404);
        res.end('Not Found');
    }
    
})

server.listen(4000);