define(['jquery','template','util','ckeditor','datepicker','language','uploadify','region','validate','form'],function($,template,util,CKEDITOR){
 util.setMenu('/main/index');
 $.ajax({
  type:'get',
  url:'/api/teacher/profile',
  dataType:'json',
  success:function(data){
    var html=template('settingsTpl',data.result);
    $('#settingsInfo').html(html);
    //处理头像上传
    $('#upfile').uploadify({
      width:120,
      height:120,
      buttonText:'',
      fileObjName:'tc_avatar',
      swf:'/public/assets/uploadify/uploadify.swf',
      uploader:'/api/uploader/avatar',
      onUploadSuccess:function(f,data){
       var data=JSON.parse(data);
       //修改图片的url地址
       $('.preview img').attr('src',data.result.path);
      }
    });
    //省市县三级联动
    $('#pcd').region({
        url:'/public/assets/jquery-region/region.json'
    });
    //富文本
    CKEDITOR.replace('editor');
    //表单提交
    $('#settingForm').validate({
        sendForm:false,
        valid:function(){
            //同步富文本信息到textarea中
            for(var instance in CKEDITOR.instances){
              CKEDITOR.instances[instance].updateElement();
            }
            //获取省市县的名称
        var p=$('#p').find('option:selected').text();
        var c=$('#c').find('option:selected').text();
        var d=$('#d').find('option:selected').text();
        var hometown=p+'|'+c+'|'+d;
            //验证通过，提交表单
        $(this).ajaxSubmit({
            type:'post',
            url:'/api/teacher/modify',
            data:{tc_hometown:hometown},
            dataType:'json',
            success:function(data){
            if(data.code==200){
                location.reload();
            }
            }
        });
        }
    });
  }

 });
})