//1.引入express模块
var express = require("express");
//2.创建app应用对象
var app = express();
//3.监听端口
app.listen(4000);

//设置视图模板引擎
//默认引擎是jade，但是jade语法不习惯
app.set("view engine","ejs");

//展示03.ejs视图模板的内容
app.get('/',function(req,res){
    res.send('这是首页');
});

app.get("/info",function(req,res){
    var data = {stus:['jack','rose','mike','jerry']}
    res.render('lianxi_01',data);
});