const http = require('http');

function sleep(time) {
    const sleep = Date.now() + time * 1000;
    while(Date.now() < sleep) {}
    return;
}
sleep(4);

const server = http.createServer((req,res) => {
    res.end('server starting ....');
});

server.listen(4000,() => {
    console.log('服务启动了');
})