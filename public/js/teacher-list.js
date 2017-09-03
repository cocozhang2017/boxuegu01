define(['jquery','template'],function($,template){
   // alert(123);
   $.ajax({
      type:'get',
      url:'/api/teacher',
      dataType:'json',
      success:function(data){
        // console.log(data);
        //解析数据渲染页面
        var html=template('teacherTpl',{list:data.result});
        $('#teacherInfo').html(html);

      }
   })
});