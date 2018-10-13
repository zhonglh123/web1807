var express = require('express');
var bdParser = require('body-parser');
var db = require("./db/db.js");
var app = express();
var mongoClient = require('mongodb').MongoClient;
app.listen(4000);
app.set('view engine','ejs');
app.use(bdParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('index.ejs');
    db.find('message',function(err,docs){
        if(err){
            console.log(err);
        }else{
            res.render('index',{docs:docs});
        }
    });
});
