var express = require('express');
var app = express();
var session = require("express-session");
app.listen(4000);

app.use(session({
    secret: 'keyboard cat',
    //通过字符串获取一个hash值，用于生成一个sessionID
    resave: false,  
    //resave:是否强制自动保存，即使数据在请求期间没有被修改
    saveUninitialized: true
    //强制保存未初始化的session
}));

app.get('/',function(req,res){
    var session = req.session;
    if(session.username){
        res.send("欢迎你:"+session.username+'<a href="/logout">退出登录</a>');
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
        req.session.username = username;
        //跳转到欢迎页面
        res.send("欢迎你:"+username+'<a href="/logout">退出登录</a>');
    }else{
        res.send('用户名或密码错误');
    }
});
//退出登录
app.get('/logout',function(req,res){
    //删除session
    req.session.destroy(function(err){
        if(err){
            res.send("退出失败");
        }else{
            res.send("退出成功");
        }
    });
});