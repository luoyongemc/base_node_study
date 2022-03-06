const net = require('net');
const MyTransformCode = require('./myTransform.js');

//创建服务端实例

const server = net.createServer();

let overageBuffer = null;
let ts = new MyTransformCode();

const PORT = 5000;
const HOST = '127.0.0.1';

server.listen(PORT,HOST);

server.on('listening',() => {
    console.log(`服务端已经开启 ${HOST} : ${PORT}`);
})

//接收消息  回写消息
server.on('connection',(socket) => {
    //接收消息
    socket.on('data',(chunk) => {
        if(overageBuffer) {
            chunk = Buffer.concat([overageBuffer,chunk])
        }
        let packageLen = 0;
        while(packageLen = ts.getPackageLen(chunk)) {
            const packageCon = chunk.slice(0,packageLen);
            chunk = chunk.slice(packageLen);

            const ret = ts.decode(packageCon);
            console.log(ret);

            socket.write(ts.encode(ret.body,ret.serialNum));
        }
        overageBuffer = chunk;
    })
   
})
