const express = require('express');
const mongoose = require('mongoose');

//链接mongo,
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('contected',function(){
    console.log('mongo conntect success');
});

//类似于mysql的表
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//插入
User.create({
    user:'小明',
    age:13
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err);
    }
})

//删除
// User.remove({age:20},function(err,doc){
//     console.log(doc);
// })

//更新
User.update({'user':'小明'},{'$set':{age:28}},function(err,doc){
    console.log(doc);
});

const app = express();

app.get('/',function(req,res){
    res.send('<h1>Hello World!</h1>');
});

app.get('/data',function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    })
    //res.json({'name':'xiaoming'});
});

app.listen(9093,function(){
    console.log('Node app start at port 9093');
});
