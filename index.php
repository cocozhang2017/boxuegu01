<?php
 // include('./views/main/index.html');//在当前页面嵌入另一个页面
//判断数组中是否包含指定的属性 array_key_exists('PATH_INFO',$_SERVER)；
//规定好url格式，方便页面导航
/* /main/index
   /main/login
*/
 $dir='main';//默认文件夹
 $filename='index';//默认文件名称

 if(array_key_exists('PATH_INFO',$_SERVER)){
    $path=$_SERVER['PATH_INFO'];//获取url的路径
    //去掉第一个斜杠
    $str=substr($path,1);
    //分割目录名称和文件名称,
    $arr=explode('/', $str);
    if(count($arr)==2){
       $dir=$arr[0]; 
       $filename=$arr[1];
    }else {
       $filename='login';//跳转到登录页面
    }
}
  include('./views/'.$dir.'/'.$filename.'.html');
?>