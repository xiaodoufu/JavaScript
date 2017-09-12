/**
 * Created by 小豆腐 on 2017/9/11.
 */

/*初识jQuery(function(){
    当我们的鼠标移动到li上面，div中的图片显示
    $("li").mouseover(function(){
        //$(this).children("div").css({"display":"block"});
        $(this).children("div").show();
    }).mouseout(function(){鼠标移出
        //$(this).children("div").css({"display":"none"});
        $(this).children("div").hide();
    })
})*/

$(function(){
    /*复合事件 整合了鼠标移出和移入*/
    $("li").hover(function(){//mouseover
        $(this).children("div").show();
    },function(){ //mouseout
        $(this).children("div").hide();
    })
})