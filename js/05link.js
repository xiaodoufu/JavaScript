$(function(){
     /*链式操作  在操作第一个div的同时 操作 第2个div
      $("h1").css({"background":"red"}).next().css({"background":"pink"})
          .next().css({"background":"yellow"});
     */
    $("div").css({"background":"yellow"});
})

/**
 注释的说明：

01. 开发阶段：  便于团队内部人员阅读，方便后续维护
02. 维护阶段：   把我们写好的注释提取成文档！哪怕我们在项目中删除注释！不影响维护！
03. 生产阶段：  建议删除注释，减少文件的大小！提升用户的体验！


 */