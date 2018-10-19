var gm = require('gm');

gm('./1.jpg')
// .flip()//翻转
// .magnify()//扩大一倍尺寸
// .rotate('green', 45)//旋转多少度，填充色
// .blur(7, 3)//近视眼效果
// .crop(300, 300, 150, 130)//剪切图片
// .edge(3)
.drawCircle(100,100,90,90)//圆心坐标
.write('./2.jpg', function (err) {
  if (err) console.log(err);
})