const http = require('http');
const url = require('url');

//创建服务端
let server = http.createServer((req,res) => {
    //针对请求和响应完成各自的操作

    //请求路径
    let {pathname,query} = url.parse(req.url,true);

    console.log(pathname,query);

    res.setHeader('Content-type','text/html;charset=utf-8');
    res.end('拉钩教育')
})

server.listen(1234,() => {
    console.log('server is running');
})