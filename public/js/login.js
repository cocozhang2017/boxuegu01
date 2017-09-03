define(['jquery','cookie'],function($){
    //实现登录功能
   $('#loginBtn').click(function(){
        // alert(1);
        // return false;
        $.ajax({
            type:'post',
            // 因为配置域名的时候用api 代替了http://api.xiongmoa.com
            url:'/api/login',
            data:$('#loginForm').serialize(),
            dataType:'json',
            success:function(data){
                if(data.code==200){
                     $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'}) ;
                    location.href='/main/index';
                }else {
                    alert("您的密码或者用户名错误")
                }
            }
        })
        return false;
       });
})