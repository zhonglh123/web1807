var express = require('express');
var bdParser = require('body-parser');
var app = express();
var mongoClient = require('mongodb').MongoClient;
app.listen(4000);

app.set('view engine','ejs');

//设置请求解析的方式 
app.use(bdParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('login');
});

//处理post发送的请求
app.post('/login',function(req,res){
    //获取请求参数
    var params = req.body;
    // console.log(params);
    // res.end();
    var username = params.username;
    var pwd = params.password;

    //将需要保存进数据库的数据组合成一个新的json对象
    var json = {name:username,pwd:pwd};
    var url = 'mongodb://localhost:27017';
    mongoClient.connect(url,{useNewUrlParser:true},function(err,client){
        if(err){
            console.log(err);
            res.send("连接服务器失败");
            return ;
        }
        var coll = client.db("web1807").collection("student");
        coll.find(json).toArray(function(err,result){
            if(err){
                console.log(err);
                res.send("登录失败");
            }else{
                if(result.length>0){
                    res.send("登录成功");
                }else{
                    res.send("登录失败,用户名或密码错误"); 
                }
            }

            //关闭连接
            client.close();
        });
    })

})