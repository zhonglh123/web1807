var express = require('express');
var app = express();
app.listen(4000);

app.get('/',function(req,res){
    res.render('login.ejs');
    
    
});
app.get('/login',function(req,res){
    var username = req.query.username;
    var password = req.query.password;
    if(username=="zhangsan"&&password=="123"){
        res.cookie('username','zhangsan');
        res.send("登陆成功");
    }else{
        res.send("用户名或密码错误");
    }
    res.end();
})