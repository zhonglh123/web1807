var http = require('http');
var fs = require("fs");
var server = http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(req.url=="/circle"){
        fs.readFile('./circle.html',function(err,data){
            if(err){
                res.end("读取页面错误");
            }else{
                res.end(data);
            }
        })
    }else if(req.url=="/square"){
        fs.readFile('./square.html',function(err,data){
            if(err){
                res.end("读取出错");
                return;
            }
            res.end(data);
        })
    }else{
        res.end("地址错误");
    }
});
server.listen(4000, 'localhost');