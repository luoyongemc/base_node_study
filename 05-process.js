//1.资源： cpu 内存
// console.log(process.memoryUsage());
// console.log(process.cpuUsage());

//2.运行环境：运行目录  node环境   cpu架构  用户环境  系统平台
// console.log(process.cwd());
// console.log(process.version);
// console.log(process.versions);
// console.log(process.arch);
// console.log(process.env.NODE_ENV);
// console.log(process.env.PATH);
// console.log(process.env.HOME);
// console.log(process.platform);

//3.运行状态：启动参数、pid、运行时间
// console.log(process.argv);
// console.log(process.argv0);
// console.log(process.execArgv);
// console.log(process.pid);

// console.log(process.uptime());

//4.事件监听
// process.on('exit',(code) => {
//     console.log('exit' + code);
// })
// process.on('beforeExit',(code) => {
//     console.log('before exit' + code);
// })

// console.log('代码执行完了');

// process.exit();//用户手动退出当前进程

//5.标准输出  输入  错误
// console.log = function (data) {
//     process.stdout.write('---' + data + '\n');
// }

// console.log(11);
// console.log(22);

// const fs = require('fs');

// fs.createReadStream('test.txt').pipe(process.stdout);

// process.stdin.pipe(process.stdout);

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
    let chunk = process.stdin.read();
    if(chunk) {
        process.stdout.write('data ' + chunk);
    }
})