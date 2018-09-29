var fs = require("fs");

//读取a文件夹中的所有内容
fs.readdir("./a",function(err,files){
    if(err){
        console.log(err);
        return;
    }
    //读取成功
    console.log("读取成功");
    //异步导致结果出问题
    // for(k in files){
    //     fs.stat('./a/'+files[k],function(err,stats){
    //         if(stats.isFile()){
    //             console.log(files[k]+"是文件");
    //         }else{
    //             console.log(files[k]+"是文件夹");
    //         }
    //     })
    // }
    //递归
    var str1="",str2="";
    (function a(i){
        //先判断递归结束的条件
        if(i==files.length){//当i与数组长度一样，说明遍历结束了
            console.log("文件有:"+str1);
            console.log("文件夹有:"+str2);
            return;
            
        }
        
        //遍历没有结束，检查判断每一个元素的状态
        fs.stat('./a/'+files[i],function(err,stats){
            if(err){
                console.log(err);
                return;
            }   
            if(stats.isFile()){
                console.log(files[i]+"是一个文件");
                str1 += files[i]+" ";
            }else{
                console.log(files[i]+"是一个文件夹");
                str2 += files[i]+" ";
            }     
            a(++i);
        }) 
    })(0)
    
});