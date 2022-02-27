// console.log(111);
import express from 'express';
import {DataStore} from './data';

console.log(DataStore.list);


const app = express();

app.get('/',(req,res) => {
    // res.end('1122')
    res.json(DataStore.list);
})

app.listen(4000,() => {
    console.log('服务已经开启了');
    
})
