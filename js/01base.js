/**
 * Created by 小豆腐 on 2017/9/11.
 */

    /*语法： $("选择器")   工厂函数  */

/*寻找页面中name属性值是haha的元素*/
$("[name='haha']").click(function(){
    $("#myDiv").css({"height":50,"width":50,"background":"red"});
    /*css(json格式)*/
})


/*js书写*/
function changeDiv(){
    document.getElementById("myDiv").style.height="50px";
    document.getElementById("myDiv").style.width="50px";
    document.getElementById("myDiv").style.backgroundColor="pink";
}

