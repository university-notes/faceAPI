"use strict";
$(function(){
	//重置密码
	$('#jl-reset').validate({
		rules:{
			jlresetuser:{
				required:true,
				rangelength:[11,11],
			},
			jlnewpass:{
				required:true,
				rangelength:[6,20],
			},
			jlnewpassagain:{
				required:true,
				rangelength:[6,20],
				equalTo:'#jl-newpass',
			},
		},
		messages:{
			jlresetuser:{
				required:'请输入账号',
				rangelength:'输入11个字符',
			},
			jlnewpass:{
				required:'请输入密码',
				rangelength:'输入6~20个字符',
			},
			jlnewpassagain:{
				required:'请再次输入密码',
				rangelength:'输入6~20个字符',
				equalTo:'两次密码输入不一致',
			},
		},
	});
})
