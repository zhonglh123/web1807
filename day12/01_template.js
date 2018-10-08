//使用express框架创建服务器
var express = require('express');
var app = express();
app.listen(4000);

//设置视图模板引擎
app.set('view engine','ejs');

app.get('/',function(req,res){
    //处理请求忽略大小写
    //忽略参数
    // console.log(req.query);
    // res.send('服务器返回的数据');
    //模拟数据
    var data = {stus:[
        {id:1,name:'zs',sex:'M',age:23},
        {id:2,name:'ls',sex:'F',age:22},
        {id:3,name:'ww',sex:'M',age:21},
        {id:4,name:'zl',sex:'F',age:20},
    ]};
    res.render('01_template',data);
})