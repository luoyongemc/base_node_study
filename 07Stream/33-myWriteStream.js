const fs = require('fs');
const EventEmitter = require('events');

const Queue = require('./29-one-way-linked');
class MyWriteStream extends EventEmitter {
    constructor(path,options = {}) {
        super();
        this.path = path;
        this.flags = options.flags || 'w';
        this.mode = options.mode || 438;
        this.autoClose = options.autoClose || true;
        this.start = options.start || 0;
        this.encoding = options.encoding || 'utf8';
        this.highWaterMark = options.highWaterMark || 16 * 1024;

        this.open();

        this.writeoffset = this.start;
        this.writing = false;
        this.writeLen = 0;
        this.needDrain = false;
        this.cache = new Queue();
    }
    open() {
        //原生fs.open

        fs.open(this.path,this.flags,(err,fd) => {
            if(err) {
                this.emit('error',err)
            }
            //正常打开文件
            this.fd = fd;
            this.emit('open',fd);
        })
    }

    write(chunk,encoding,cb) {
        //默认用户传入的是Buffer或者是字符串
        chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);

        this.writeLen += chunk.length;
        let flag = this.writeLen < this.highWaterMark;
        this.needDrain = !flag;

        if (this.writing) {
            //当前正在执行写入，所以内容应该排队
            this.cache.enQueue({chunk,encoding,cb})
        } else {
            //当前不是正在写入，那么就执行写入
            this.writing = true;
            this._write(chunk,encoding,() => {
                cb();
                //清空排队的内容
                this._clearBuffer();
            })
        }

        return flag;
    }

    _write(chunk,encoding,cb) {
        // console.log('正在执行第一次写入');
        if(typeof this.fd !== 'number') {
            return this.once('open',() => {return this._write(chunk,encoding,cb)});
        }
        // console.log(this.fd);
        fs.write(this.fd,chunk,this.start,chunk.length,this.writeoffset,(err,written) => {
            // console.log('ok1111');
            this.writeoffset += written;
            this.writeLen -= written;

            cb && cb();
        })
    }

    _clearBuffer() {
        let data = this.cache.deQueue();
        if(data) {
            this._write(data.element.chunk,data.element.encoding,() => {
                data.element.cb() && data.element.cb();
                this._clearBuffer();
            })
        }else {
            if(this.needDrain) {
                this.needDrain = false;
                this.emit('drain');
            }
        }
        
    }
}

// const ws = new MyWriteStream('test6.txt',{
//     highWaterMark:1
// });

// ws.on('open',(fd) => {
//     console.log('open---->',fd);
// })

// let flag = ws.write('1','utf8',() => {
//     console.log('ok1');
// });


// flag = ws.write('10','utf8',() => {
//     console.log('ok1');
// });

// flag = ws.write('拉钩教育','utf8',() => {
//     console.log('ok3');
// });

// ws.on('drain',() => {
//     console.log('drain');
// })
