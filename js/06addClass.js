$(function(){
    //获取页面中所有的div动态增加类样式  之前js中使用的是 className="类名"
    /*$("div").hover(function(){
        $(this).addClass("haha"); 增加样式
    },function(){
        $(this).removeClass("haha");删除样式
    })*/

   /*所有div的点击事件*/
    $("div").click(function(){
        $(this).toggleClass("haha");
    })


})