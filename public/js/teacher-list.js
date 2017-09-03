define(['jquery','template','bootstrap'],function($,template){
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
        //绑定预览的点击事件
        $('.preveiw').click(function(){
            var tcId=$(this).closest('td').attr('data-tcId');
        $.ajax({
            type:'get',
            url:'/api/teacher/view',
            data:{tc_id:tcId},
            dataType:'json',
            success:function(data){
              console.log(data);
             //解析数据，渲染页面
             var html=template('modalTpl',data.result);
             $("#modalInfo").html(html);
             $("#teacherModal").modal();
            }
        })
        })
     }
   });

});