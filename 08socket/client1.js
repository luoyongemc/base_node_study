const net = require('net');
const MyTransformCode = require('./myTransform.js');


const client = net.createConnection({
    port:5000,
    host:'127.0.0.1'
});


let overageBuffer = null;
let ts = new MyTransformCode();

const dataArr = [
    '拉钩教育2',
    '拉钩教育3',
    '拉钩教育4',
    '拉钩教育5',
]

// client.on('connect',() => {
//     client.write('拉钩教育');
//     for(let i = 0; i < dataArr.length; i++){
//         (function (val,index) {
//             setTimeout(() => {
//                 client.write(val)
//             }, 1000 * (index + 1));
//         })(dataArr[i],i)
//     }
// })

client.write(ts.encode('拉钩教育'));
client.write(ts.encode('拉钩教育2'));
client.write(ts.encode('拉钩教育3'));
client.write(ts.encode('拉钩教育4'));
client.write(ts.encode('拉钩教育5'));
client.write(ts.encode('拉钩教育6'));


client.on('data',(chunk) => {
    if(overageBuffer) {
        chunk = Buffer.concat([overageBuffer,chunk])
    }
    let packageLen = 0;
    while(packageLen = ts.getPackageLen(chunk)) {
        const packageCon = chunk.slice(0,packageLen);
        chunk = chunk.slice(packageLen);

        const ret = ts.decode(packageCon);
        console.log(ret);
    }
    overageBuffer = chunk;
})
