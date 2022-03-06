const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req,res) => {
    const {pathname,query} = url.parse(req.url);
    console.log(pathname,'------',query);
    // console.log('request come in');

    //post
    let arr = [];
    req.on('data',(data) => {
        arr.push(data);
    })

    req.on('end',() => {
        let obj = Buffer.concat(arr).toString();
        // console.log(Buffer.concat(arr).toString());

        // console.log(req.headers['content-type']);

        if(req.headers['content-type'] === 'application/json') {
            let a = JSON.parse(obj);
            a.add = '互联网人的大学';
            res.end(JSON.stringify(a));
        }else if(req.headers['content-type'] === 'application/x-www-form-urlencoded') {
            // console.log(111111);
            let a = querystring.parse(obj);
            res.end(JSON.stringify(a));
        }
    })
})

server.listen(1234,() => {
    console.log('server is running');
})