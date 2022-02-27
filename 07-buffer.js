// const b1 = Buffer.alloc(10);
// const b2 = Buffer.allocUnsafe(10);

// console.log(b1);
// console.log(b2);

//from
// const b1 = Buffer.from('1');
// console.log(b1);

// const b1 = Buffer.from([0x60,0b1001,12]);
// const b1 = Buffer.from([0xe4,0xb8,0xad]);
// console.log(b1);
// console.log(b1.toString());

// const b1 = Buffer.alloc(3);
// const b2 = Buffer.from(b1);

// console.log(b1);
// console.log(b2);

// b1[0] = 1;
// console.log(b1);
// console.log(b2);


//实例方法


// let buf = Buffer.alloc(6);

//fill
// buf.fill('123',1,3);
// console.log(buf);
// console.log(buf.toString());

//write
// buf.write('123',1,3);
// console.log(buf);
// console.log(buf.toString());

//toString
// buf = Buffer.from('拉钩教育');
// console.log(buf);
// console.log(buf.toString('utf8',3,9));

//slice
// buf = Buffer.from('拉钩教育');
// let b1 = buf.slice(3);
// console.log(b1);
// console.log(b1.toString());

//indexOf
// buf = Buffer.from('zce爱前端,爱拉钩教育,爱大家,我爱所有');
// console.log(buf);
// console.log(buf.indexOf('爱',4));

//copy
// let b1 = Buffer.alloc(6);
// let b2 = Buffer.from('拉钩');

// b2.copy(b1,3,3);
// console.log(b1.toString());
// console.log(b2.toString());

//Buffer静态方法

// let b1 = Buffer.from('拉钩');
// let b2 = Buffer.from('教育');

// let b = Buffer.concat([b1,b2],9);
// console.log(b);
// console.log(b.toString());

//isBuffer
// let b1 = '23';
// let b1 = Buffer.alloc(6);
// console.log(Buffer.isBuffer(b1));


Buffer.prototype.split = function (sep) {
    let len = Buffer.from(sep).length;
    let ret = [];
    let start = 0;
    let offset = 0;

    while((offset = this.indexOf(sep,start)) !== -1){
        ret.push(this.slice(start,offset));
        start = offset + len;
        console.log(111);
    }
    ret.push(this.slice(start));
    return ret;
}

// let buf = 'zce吃馒头,吃面条,我吃所有吃';
let buf = Buffer.from('zce吃馒头,吃面条,我吃所有吃');
let bufArr = buf.split('吃');
// let bufArr = buf.indexOf('吃');
console.log(bufArr.toString());