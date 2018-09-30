var http = require("http");
var fs = require("fs");
//引用formidable模块
var fd = require("formidable");
var sd = require("silly-datetime");
http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(req.url=="/"){
        //读取表单页面
        fs.readFile('./01_form.html',function(err,data){
            if(err){
                console.log(err);
                res.end("加载页面失败");
                return;
            }
            //读取成功，显示页面
            res.end(data);
        });
    }else if(req.url=="/tijiao"&&req.method.toUpperCase()=="POST"){
        //postde的/tijiao请求
        //使用formidable模块处理请求
        //创建表单对象
        var form = new fd.IncomingForm();
        //设置上传文件保存的路径
        form.uploadDir = "./uploads";
        //解析请求对象
        //fields：解析得到的文本域的参数值
        //files：解析得到的文件
        form.parse(req,function(err,fields,files){
            if(err){
                console.log(err);
                res.end('请求失败');
                return;
            }
            console.log('fields:');
            console.log(fields);
            console.log('files:');
            console.log(files);
            //对文件改名
            //获取旧路径
            var oldPath = files.pic.path;
            //设置新路径
            var oldName = files.pic.name;//获取名称
            var arr = oldName.split(".");
            var ext = arr[arr.length-1];//获取后缀名
            //设置名称
            var name = sd.format(new Date(),"YYYYMMDDHHmmss");
            //上传文件的新名称
            var newName = name+"."+ext;
            //新路径
            var newPath = './uploads/'+newName;
            fs.rename(oldPath,newPath,function(err){
                if(err){
                    console.log(err);
                    res.end('重命名失败');
                    return;
                }
                res.end('请求成功');
            });
        })
    }else{
        res.end("地址错误");
    }

}).listen(4000,'localhost');