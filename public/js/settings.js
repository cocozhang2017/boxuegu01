define(['jquery','template','util','ckeditor','datepicker','language','uploadify','region'],function($,template,util,CKEDITOR){
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
  }

 });
})