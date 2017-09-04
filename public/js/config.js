require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery.min',
        cookie:'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap.min',
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate:'validate/jquery-validate.min',
        form:'jquery-form/jquery.form',
        settings:'../js/settings',
        common:'../js/common',
        login:'../js/login',
        index:'../js/index',
        util:'../js/util',
        teacheradd:'../js/teacher-add',
        teacherlist:'../js/teacher-list'
    },
    shim :{
       bootstrap:{
         deps:['jquery']
       },
       language:{
        deps:['jquery','datepicker']
       } ,
       validate:{
        deps:['jquery']
       }
    }
});