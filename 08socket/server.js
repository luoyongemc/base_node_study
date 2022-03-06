const net = require('net');

//创建服务端实例

const server = net.createServer();

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
        const msg = chunk.toString();
        console.log(msg);
         //回写消息
    socket.write(Buffer.from('你好' + msg));
    })
   
})

server.on('close',() => {
    console.log('服务端关闭了');
})

server.on('error',(err) => {
    if(err.code === 'EADDRINUSE') {
        console.log('地址正在被使用');
    }else {
        console.log(err);
    }
})