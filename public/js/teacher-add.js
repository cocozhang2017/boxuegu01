define(['jquery','template','util'],function($,template,util){
  //设置导航菜单
   util.setMenu('/teacher/list');
 //获取编辑讲师的ID
 var tcId=util.qs('tc_id');
 // console.log(tcId);
 //根据id  查询对应讲师的ID
 if(tcId){
    $.ajax({
    type:'get',
    url:'/api/teacher/edit',
    data:{tc_id:tcId},
    dataType:'json',
    success:function(data){
        // console.log(data);
        //解析数据渲染页面
        data.result.operate='讲师编辑';
        var html=template('teacherTpl',data.result);
        $("#teacherInfo").html(html);
        //绑定编辑事件
        submitForm('/api/teacher/update');
    }
});
}else {
       var html=template('teacherTpl',{operate:'讲师添加',tc_gender:1});
        $("#teacherInfo").html(html);
        //绑定添加事件
       submitForm('/api/teacher/add');
}
//提交表单
function submitForm(url){
    $('#formBtn').click(function(){
      $.ajax({
         type:'post',
         url:url,
         data:$('#formId').serialize(),
         dataType:'json',
         success:function(data){
            if(data.code==200){
                location.href='/teacher/list';
            }
         }
     });
  });
 }
});