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
                 //预览功能
                 $("#teacherModal").modal();
                }
            });
        });
        //启用注销功能
        $('.eod').click(function(){
            var td=$(this).closest('td');
            var tcId=td.attr('data-tcId');
            var tcStatus=td.attr('data-status');
            var that=this;
         // console.log(1234);
         $.ajax({
            type:'post',
            url:'/api/teacher/handle',
            data:{tc_id:tcId,tc_status:tcStatus},
            dataType:'json',
            success:function(data){
              // console.log(data);
              td.attr('data-status',data.result.tc_status);
              if(data.result.tc_status==0){
                $(that).html('注销');
              }else {
                $(that).html('启用');
              }
            }

         })

        });

     }
   });

});