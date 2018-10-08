var qs = require('querystring');

var url = '/a/b/c?a=1&B=3&name=zhangsan';

var obj = qs.parse(url);
console.log(obj);