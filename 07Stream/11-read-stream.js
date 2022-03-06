const fs = require('fs');
const EventEmitter = require('events');

class MyFileReadStream extends EventEmitter{
    constructor(path,options = {}) {
        super();
        this.path = path;
        this.flags = options.flags || 'r';
        this.mode = options.mode || 438;
        this.autoClose = options.autoClose || true;
        this.start = options.start || 0;
        this.end = options.end;
        this.highWaterMark = options.highWaterMark || 64 * 1024;
        this.readOffset = 0;
        
        this.open();

        this.on('newListener',(type) => {
            if(type === 'data') {
                this.read();
            }
        })
    }

    open() {
        fs.open(this.path,this.flags,this.mode,(err,fd) => {
            if(err) {
                this.emit('error',err);
                return;
            }
            this.fd = fd;
            this.emit('open',fd);
        })
    }

    read() {
        if(typeof this.fd !== 'number') {
            this.once('open',this.read);
            return;
        }
        

        const howMuchToRead = this.end ? Math.min(this.end - this.readOffset + 1,this.highWaterMark) : this.highWaterMark;
        // if(this.end) {
        //     howMuchToRead = Math.min(this.end - this.readOffset + 1,this.highWaterMark);
        // }else {
        //     howMuchToRead = this.highWaterMark;
        // }
        let buf = Buffer.alloc(howMuchToRead);

        fs.read(this.fd,buf,0,howMuchToRead,this.readOffset,(err,readBytes) => {
            if (readBytes) {
                this.readOffset += readBytes;
                this.emit('data',buf);
                this.read();
            } else {
                this.emit('end');
                this.close();
            }
        })
    }

    close() {
        fs.close(this.fd,() => {
            this.emit('close');
        });
    }

    pipe(ws) {
        this.on('data',(data) => {
            let flag = ws.write(data);
            if(!flag) {
                console.log(this.pause,111);
                this.pause();
            }
        })
        ws.on('drain',() => {
            this.resume();
        })
    }
}

// let rs = new MyFileReadStream('test.txt',{
//     end:7,
//     highWaterMark:3
// });

// rs.on('open',(fd) => {
//     console.log('open',fd);
// })

// rs.on('error',(err) => {
//     console.log(err);
// })

// rs.on('data',(chunk) => {
//     console.log(chunk);
// });

// rs.on('end',() => {
//     console.log('end');
// })


module.exports = MyFileReadStream;