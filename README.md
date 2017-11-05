Html  
结构化CSS 
样式JavaScript 行为交互
01.JavaScript基础
02.JavaScript操作BOM对象
03.JavaScript操作DOM对象   *****
04.JavaScript的面向对象--------------------------------------
05.jQuery (js)  .css   .js
06.jQuery选择器        ******
07.jQuery事件和动画
08.jQuery操作DOM对象   ******
09.表单验证
10.表单验证的框架   jquery  validate11.bootstrap  封装了Html css  js

JavaScript基础 （liveScript）  
01.和java的关系，只是借势！  
02.是一个脚本语言，以.js结尾  
03.浏览器编译JavaScript,解析器我们称之为JavaScript引擎！  
04.无需预编译    *****     
js是一种弱语言类型  var a=10;    var a="101";  var a=new Date();  
05.运行在客户端  ***** 减轻服务器的压力


目的： 
01.提升用户的体验 
02.减轻服务器的压力
组成部分：  
01.ECMAScript规定了js的基本语法和基本对象   
02.BOM(浏览器对象模型) 提供了处理网页内容的方法和接口  
03.DOM(文档对象模型)   提供了与浏览器进行交互的方法和接口
我们一个页面中可以引入css文件还可以引入js文件？    有没有顺序呢？
01.css写在head中02.js文件的引入写在body的最下方


js的引入方式：01.行内引入02.内部引入03.外部引入
js中的常用事件
  01.不想让a超链接 立即跳转至指定的页面  
  02.想让用户点击的时候 做一些处理工作  javascript:  伪协议   
  01.先去执行js代码  
  02.根据js代码做操作     alert('就是不跳转')   后续会换成某个操作的函数（方法）
    <a href="javascript:alert('就是不跳转')">跳转</a>
伪协议   javascript:onclick 点击事件onblur  失去焦点事件onfocus 获取焦点事件

js数据类型
undefined： 声明但是没有赋予初始值！没有被定义的变量！          var  name;          alert(name);  //什么都没有          alert(typeof(name));  //undefined
number: 包含了整数和浮点数       typeof(20)       typeof(20.2)
string : 被单引号和双引号括起来的内容都是字符串    typeof('20')    typeof('20.2')
boolean: true 和 false      alert(typeof(TRUE));  //把TRUE 当成一个变量名      alert(typeof(true));  //√      alert(typeof("true"));  //string
object: js中的对象，包含数组, null和对象！
null：空值，表示对象不存在，等于undefined！
typeof 检测变量的数据类型01. typeof 空格变量名称02. typeof(变量名称) *****
类型转换parseInt(): 变量值可以不是一个数字,返回第一个不为数字的所有值,       返回一个整数！     　否则返回NaN(not a number)parseFloat()：返回一个浮点数！
强制类型转换
number():把变量整体当作转换的值，如果有一个字符不是数值，则返回NaN！
boolean():只要变量不是false，0，undefined，null，NaN,未定义的参数或者定义未赋值          空串，或者什么都没有输入！ 其他都返回true！
==  和 ===
== ：在两个变量比较的时候，先进行类型转换，之后再比较！alert("0"==false);首先会把字符串"0"转换成number 0false转换成number 00==0
===：比较严格，先比较两个变量的类型是否一致，之后再比较值！不会类型转换！
注意点：01.如果比较的变量中boolean的值，会先把boolean类型的值转换成number类型！02.如果比较的变量中String的值，会先把String类型的值转换成number类型！
输入和确认alert()： 只有一个确定按钮！confirm ()：是一个提示框，有确定和取消按钮！            用户点击确定返回值是true            用户点击取消返回值是false
prompt（）：是一个对话框！         01.第一参数是提示语句         02.第二参数是输入框中的默认值，可以省略返回值是我们第二个参数（用户的输入）！
js中也有选择结构！和java中的用法一致！
数组
var  arr1=new Array();   //没有长度var  arr1=new Array(5); //有长度5var  arr1=new Array(1,2,3,4,5) //定义数组的同时赋值var arr1=[1,2,3];
向数组中新增元素  push把数组中的每个元素使用指定的分隔符连接起来，变成字符串！  join
循环  for  in
for(var index in arrs){  document.write(arrs[index])}index 是元素的下标！
函数
定义函数的两种方式<a href="javascript:sayHello('小黑');">跳转</a>
  function sayHello(userName){          alert(userName+"辛苦了！");   }
 var sayHello=function(userName){     alert(userName+"辛苦了！"); }
JavaScript操作 BOM对象
BOM对象（浏览器对象模型  Browser Object Model）  01.页面的前进和后退  02.移动，调整和关闭浏览器窗口  03.创建新的浏览器窗口
01.window对象   ***** 核心对象    常用的方法：         alert()         confirm()         prompt()         close()         open()         setTimeout() 执行一次         setInterval() 周期执行
02.history对象     常用的方法        forward（）前进        back（）  后退        go（）    根据参数值选择（正整数）前进还是后退（负数）
03.location对象     常用的方法      reload() 刷新页面      replace() 使用新页面替换当前页面     常用的属性           host： 主机名+端口号       hostname： 主机名           href： url           hash:  返回url中#之后的所有内容          search：返回url中?之后的所有内容04.document对象      常用的方法       write（） ：在页面中书写内容       getElementById("a"): 获取页面中指定id=a的元素！ 一个对象       getElementsByName("season"): 获取页面中name=season的元素集合！       getElementsByTagName("img"):获取页面中标签名称为img的元素集合！      常用的属性       referrer:  可以获取进入本页面之前的那个URL!       url：返回当前页面的URL
获取元素之后给元素赋值！  innerHTML :会把我们的文本编译成html代码  innerText ：把文本原样输出

05.Date  和  定时函数
     Date对象：        getFullYear()  获取年        getMonth()    获取月   0-11        getDate()  获取当月的第几天  1-31        getDay()   获取本周的第几天  0-6        getHours() 获取小时          0-23        getMinutes() 获取分钟        0-59        getSeconds()  获取秒         0-59        getTime()    1970年1月1日到现在的毫秒数
 定时函数   setTimeout() 执行一次   clearTimeout  清除
   setInterval() 周期执行   clearInterval() 清除
js操作DOM对象  （Document Object Model）文档对象模型
 nodeType返回值 1：元素节点 2：属性节点 3：文本节点 8：注释节点 9: 文档节点
 nodeName  节点名称 nodeType  节点类型 nodeValue  节点值
setAttribute("属性名","属性值")getAttribute("属性名")  根据属性名获取对应的属性值
getAttributeNode("属性名")  获取的是属性节点
createElement() 新增节点insertBefore(newLi,li) 把newLi放在li之前replaceChild(newLi,li)把newLi替换li的位置removeChild()删除指定的子节点parentNode 获取父节点appenChild()追加子节点

通过js中的style属性可以为节点动态的增加css样式
style.属性名之前css的属性名  background-color现在属性名  backgroundColor
className用来动态的给节点设置class属性！
tabs选项卡功能的实现
  offsetLeft    返回元素左边距 到 父级的左边距  offsetTop     返回元素上边距 到 父级的上边距  offsetHeight   元素的高度  offsetWidth     元素的宽度  offsetParent   返回元素的父级容器  scrollTop      滚动条的垂直距离  scrollLeft     滚动条的水平距离  clientWidth   返回元素可见宽度  clientHeight  返回元素可见高度

  面向对象
   对象：包含了属性和方法的集合体！
   01.面向对象就是一种编程思想！   02.在js中就是通过原型对象（prototype）来实现面向对象编程的！
注意点：
 1.所有的对象 都有一个constructor属性，指向了构造函数！   document.write(stu1.constructor==Student+"<br/>"); 2. 创建构造函数的时候，会有一个属性叫prototype!    这个prototype指向了构造函数创建的那个原型对象！ 3.每个对象都有一个__proto__属性 指向了原型对象 （Student.prototype） 4.原型对象就是为其他对象创建共享的属性和方法的对象！ 5.Object没有指向,__proto__的值是null
 var  stu1={};     document.write(stu1.prototype+"<br/>");  //只有构造函数有     document.write(stu1.__proto__+"<br/>");  //默认执行Object
 原型链：      01.一个原型对象是另一个原型对象的实例！ 小黑狗是 黑狗的实例！  黑狗是狗的一个实例！      02.相关的原型链层层递进，就构成了实例和原型对象的链条！
  继承实现的两种方式：  01.使用原型链  Dog.prototype=new Animal();  02.使用借用构造     Animal.call(this,'dog');  也可以直接传递参数
  组合继承：就是把上诉的两种方式整合使用！

