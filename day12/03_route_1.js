var express = require('express');
var app = express();
//引入单独提出来的方法(引入路由文件)
var route = require('./03_route.js');
app.listen(4000);

// app.use('/',route.index);
//上面的写法可以简写成下面的方式
app.use(route.index);
app.get('/info',route.info);
app.get('/error',route.error);

