var a=jq.noConflict();
a(function(){
    //form表单的验证事件
    a("#myForm").validate({
        //验证规则  需要对哪些元素做验证
        rules:{
            userName:{
                required:true
            },
            realName:{
                required:true
            },
            pid:{
                required:true,
                checkPid:true   //自定义一个验证方法
            },
            password:{
                required:true,
                minlength:6,
                maxlength:10
            },
            repPassword:{
                required:true,
                minlength:6,
                maxlength:10,
                equalTo:"#pwd"
            },
            email:{
                required:true,
                email:true
            },
            phone:{
                required:true,
                checkPhone:true  //自己书写的手机验证正则
            },
            context:{
                required:true
            }
        },  //rules  end
        //不符合验证规则的错误信息
        messages:{
            userName:{
                required:"请输入用户名"
            },
            realName:{
                required:"请输入真实姓名"
            },
            pid:{
                required:"请输入身份证号",
                checkPid:"身份证号不正确"   //自定义一个验证方法
            },
            password:{
                required:"请输入密码",
                minlength:"密码长度不能少于6位",
                maxlength:"密码长度不能大于10位"
            },
            repPassword:{
                required:"请输入密码",
                minlength:"密码长度不能少于6位",
                maxlength:"密码长度不能大于10位",
                equalTo:"两次密码输入不一致"
            },
            email:{
                required:"请输入邮箱",
                email:"邮箱格式不正确"
            },
            phone:{
                required:"请输入手机号",
                checkPhone:"电话号码格式不正确"//自己书写的手机验证正则
            },
            context:{
                required:"您没有同意协议"
            }
        },  // messages  end
        //鼠标失去焦点立即验证
        onfocusout:function(element){
            a(element).valid();
        }
    });  //  end   validate

    //增加了手机验证正则
    a.validator.addMethod("checkPhone",function(value,element){
        var tel = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/
        return this.optional(element) || (tel.test(value));
    },"电话号码格式不正确")
    //增加了身份证号验证正则
    a.validator.addMethod("checkPid",function(value,element){
        var pid = /(^\d{15}a)|(^\d{18}a)|(^\d{17}(\d|X|x)$)/
        return this.optional(element) || (pid.test(value));
    },"身份号码格式不正确")
})
