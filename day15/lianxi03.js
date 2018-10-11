var express = require('express');
var bdParser = require('body-parser');
var app = express();
var mongoClient = require('mongodb').MongoClient;
app.listen(4000);

app.set('view engine','ejs');


app.get('/',function(req,res){
    //查询数据库，获取数据
    var url = "mongodb://localhost:27017";
    mongoClient.connect(url,{useNewUrlParser:true},function(err,client){
        if(err){
            console.log(err);
            res.send('连接数据库失败');
            return ;
        }
        var coll = client.db('web1807').collection('student');
        coll.find({}).toArray(function(err,docs){
            if(err){
                console.log(err);
                res.send('查询失败');
            }else{
                //返回视图页面，传递数据
                res.render('show',{stus:docs});
            }
            client.close();
        })
    })

})