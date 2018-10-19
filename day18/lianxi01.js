var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.listen(4000);

//设置cookie解析方式
app.use(cookieParser());

app.get('/',function(req,res){
    //查询cookie中是否有登录信息
    var cookies = req.cookies;
    //判断cookie中有无登录的信息
    if(cookies.username){
        res.send("欢迎你:"+cookies.username);
    }else{
        res.render('./login.ejs');
    }
});

app.get('/login',function(req,res){
    //获取用户名与密码
    var username = req.query.username;
    var password = req.query.password;
    //判断用户名密码是否正确
    if(username=='zhangsan'&&password=="123"){
        //用户名密码正确，登录成功
        //保存登录信息
        res.cookie('username',username);
        //跳转到欢迎页面
        res.send("欢迎你:"+username);
    }else{
        res.send('用户名或密码错误');
    }
});