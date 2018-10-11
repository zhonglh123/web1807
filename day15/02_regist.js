var express = require('express');
var bdParser = require('body-parser');
var app = express();
var mongoClient = require('mongodb').MongoClient;
app.listen(4000);

app.set('view engine','ejs');

//设置请求解析的方式 
app.use(bdParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('regist');
});

//处理post发送的请求
app.post('/regist',function(req,res){
    //获取请求参数
    var params = req.body;
    // console.log(params);
    // res.end();
    var username = params.username;
    var pwd = params.password;

    //将需要保存进数据库的数据组合成一个新的json对象
    var json = {name:username,pwd:pwd};
    //连接数据库，保存数据
    var url = 'mongodb://localhost:27017';
    mongoClient.connect(url,{useNewUrlParser:true},function(err,client){
        if(err){
            console.log(err);
            res.send("连接服务器失败");
            return ;
        }
        //连接成功，保存数据
        var coll = client.db("web1807").collection("student");
        coll.insertOne(json,function(err,result){
            if(err){
                console.log(err);
                res.send("注册失败");
            }else{
                res.send("注册成功");
            }
            //关闭连接
            client.close();
        });
    })

})