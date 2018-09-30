//1
var ejs = require("ejs");
//2创建模板
var str = '这是一个数组:<%= stus[0].name %>';
//3模拟数据
var data = {names:['jack','rose','lily']};
var stus = {stus:[{name:'zs'},{name:'lisi'},{name:'wangwu'}]};
//4填充
var html = ejs.render(str,data);
console.log(html);