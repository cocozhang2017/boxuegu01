define(['jquery'],function($){
//工具函数
    return {
        setMenu:function(path){
          $('.navs a[href="'+path+'"]').addClass('active');
        },
        qs:function(key){
            //flag=123&abc=nihao;param的值
            // console.dir(location);
            var param=location.search.substring(1);
            var result=null;
            if(param){
               var kvs=param.split('&');
               $.each(kvs,function(i,item){
                 var kv=item.split('=');//item 是其中的一个键值对
                 if(key==kv[0]){
                    result=kv[1];
                    return false;//终止循环
                 }
               });
  
            }
            return result;
           
        }
    }
});