const net = require('net');

const client = net.createConnection({
    port:5000,
    host:'127.0.0.1'
})

const dataArr = [
    '拉钩教育2',
    '拉钩教育3',
    '拉钩教育4',
    '拉钩教育5',
]

client.on('connect',() => {
    client.write('拉钩教育');
    for(let i = 0; i < dataArr.length; i++){
        (function (val,index) {
            setTimeout(() => {
                client.write(val)
            }, 1000 * (index + 1));
        })(dataArr[i],i)
    }
})

client.on('data',(chunk) => {
    console.log(chunk.toString());
})

client.on('error',(err) => {
    console.log(err);
})

client.on('close',() => {
    console.log('客户端断开连接');
})