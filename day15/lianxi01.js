var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var dbName = "web1807";
var collection = "student";

mongoClient.connect(url,function(err,client){
    if(err){
        console.log(err);
        return ;
    }
    //没有出错，连接成功
    //通过client获取数据库
    var db = client.db(dbName);
    //获取集合
    var coll = db.collection(collection);
    //修改数据
    /*coll.updateOne({name:"bajie"},{$set:{age:8}},function(err,result){
        if(err){
            console.log(err);
            return ;
        }
        console.log(result);
        //关闭连接
        client.close();
    });*/
    //查找数据
    coll.findOne({id:106},function(err,result){
        if(err){
            console.log(err);
            return ;
        }
        console.log(result);
        //关闭连接
        client.close();
    });

    
});