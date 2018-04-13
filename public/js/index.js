$(function () {
    })
var globalCons = {};
try{
    location.search.substr(1).split('&').forEach(function(item){
            var s = item.split('=');
            globalCons[s[0]]=s[1];
        });
} catch(e){
    throw new Error(JSON.stringify(search));
}

console.log(globalCons);


var api ="https://test-m.yingujr.com";

 function verifyCode(){
        var myreg = /^[0-9a-zA-Z]{4}$/;
        var captcha = $("#captcha").val();
        if(!myreg.test(captcha)){

            $(".error").html("图片验证码格式错误1"+captcha);
             return false;
        }else{
            $(".error").html("");
            return true;
        }
    }
function  getsmscode() {                      
        var captcha = $("#captcha").val();
        var mobile = $("#mobile").val();
        if(!mobile){
              $(".error").html("手机号不能为空");
              return;
        }
        if(!verifyCode()){
           return
        }


        $.ajax({
             type: "Post",
             url:  "/api/api/pages/getsmscode",
             data: {mobile:mobile, captcha:$("#captcha").val()},
             dataType: "json",
             success: function(data){
                           $(".error").html("短信发送成功");
                      }
        });

    }

function  editCaptcha () {
        $(".aptchaImg").attr("src",api+"/api/captcha/captcha?code="+Math.random()+"&token="+$('#token').val());
    }

function login(){
        var mobile = $("#mobile").val();
        var captcha = $("#captcha").val();
        var smscode = $("#smscode").val();
        var password = $("#password").val();
        var utmSource =globalCons.utmSource || '';
        let pwdReg = /((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{8,16}/i;
        let reg = new RegExp(/^\d{6}$/);
        if(mobile.length!==11){
            $(".error").html("手机号不正确");
            return
        }  
        if(captcha.length!='4'){
            $(".error").html("图片验证码不正确");
            return
        }    
        if(!reg.test(smscode)){
            $(".error").html("手机验证码不正确");
            return
        }   
        if(!pwdReg.test(password)){
            $(".error").html("密码为8-16位字母、数字或常用符号组合");
            return
        }   
        $(".error").html("");

        $.ajax({
             type: "Post",
             url:  "/api/api/pages/join",
             data: {mobile:mobile,smscode:smscode,password:password,userPosition:"0,0",utmSource:utmSource},
             dataType: "json",
             success: function(data){
                          $(".error").html("注册成功");
                          location.href=api 
                      }
        });
        
    }



