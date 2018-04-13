var express = require('express')
var controller = require('./pages.controller')
const auth = require('../../auth/auth.service')
var request = require('request');
var api ="https://test-m.yingujr.com";

var router = express.Router()

router.get('/', auth.isAuthenticated(), controller.findByLoginId)
router.get('/:id', auth.isAuthenticated(), controller.show)
router.post('/', auth.isAuthenticated(), controller.create)
router.put('/:id', auth.isAuthenticated(), controller.update)
router.patch('/:id', auth.isAuthenticated(), controller.patch)
router.delete('/:id', auth.isAuthenticated(), controller.destroy)

//获取验证
router.post('/getsmscode', (req, res, next) =>{
        var planType =  req.body.planType;
        var mobile = req.body.mobile; 
        var captcha = req.body.captcha;
        console.log(mobile,captcha);

        request.post({url:api+'/api/join/getsmscode', form: {mobile:mobile, captcha:captcha}}, function(err,httpResponse,body){ 
                var responseData ={};
                if(err){
                  responseData.code =400;
                  responseData.message ="接口获取失败";
                  res.json(responseData);
                  return;
                }
                responseData.data = JSON.parse(body); 
                if(responseData.data.data.status=="500"){
                  responseData.message ="手机号已经注册";
                }else{

                  responseData.message ="短信发送成功";
                }

                res.json(responseData);
        })
  });

//
router.post('/join', (req, res, next) =>{
         var mobile = req.body.mobile; 
         var smscode = req.body.smscode;
		 var invitor = req.body.invitor;
		 var password = req.body.password;
		 var userPosition = req.body.userPosition;
		 var utmSource = req.body.utmSource;
        request.post({url:api+'/api/join', form: {mobile:mobile, smscode:smscode,invitor:invitor,password:password,userPosition:userPosition,utmSource:utmSource}}, function(err,httpResponse,body){ 
                var responseData ={};
                if(err){
                  responseData.code =400;
                  responseData.message ="接口获取失败";
                  res.json(responseData);
                  return;
                }
                responseData.data = JSON.parse(body); 
                responseData.message ="成功";
                res.json(responseData);
        })
  });


module.exports = router
