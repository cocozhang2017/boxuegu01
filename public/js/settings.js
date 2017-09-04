define(['jquery','template','util'],function($,template,util){
 util.setMenu('/main/index');
 $.ajax({
  type:'get',
  url:'/api/teacher/profile',
  dataType:'json',
  success:function(data){
    var html=template('settingsTpl',data.result);
    $('#settingsInfo').html(html);
  }

 });
})