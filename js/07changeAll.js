$(function(){

    //通过js获取dom对象
    var domDiv= document.getElementById("myDiv");
    // domDiv.html(); 是jquery对象才能使用的
    //把dom对象转换成jquery对象
    $(domDiv).html("就这么神奇的转换成了query对象");

    //获取第二个盒子
   var $jqueryDiv= $("#second");
    // 需要把jquery转换成dom对象
    //$jqueryDiv[0].innerHTML="转换成dom对象了！";
    $jqueryDiv.get(0).innerHTML="转换成dom对象了!!！";

})