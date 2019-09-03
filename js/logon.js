$(function() {
	// footer上划
	let distan = 0
	setInterval(function() {
		if (distan == 2) {
			$(".blogrollList").css({
				top: 0
			});
			distan = 0
		}
		distan++
		$(".blogrollList").animate({
			top: -47 * distan
		})
	}, 2500);
	// ewm消失
	$(".ewm span").click(function() {
		$(this).parent().css({
			display: "none"
		})
	})
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			$(".ewmBackTop").css({
				display: "block"
			});
			$(".backTop").css({
				display: "block"
			});
		} else if ($(window).scrollTop() == 0) {
			$(".ewmBackTop").css({
				display: "none"
			});
			$(".backTop").css({
				display: "none"
			});
		}
	});
	$(".backTop").click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 'slow');
	})
	$(".availa").mouseover(function() {
		$(this).children("a").children(".btma").css({
			transform: "rotateX(180deg)",
			paddingBottom: 7,
		})
	})
	$(".availa").mouseout(function() {
		$(this).children("a").children(".btma").css({
			transform: "",
		})
	});
	
	// 数据
	$("#mobileNum").blur(function(){
		let reg = /^1(3|5|8)[0-9]{9}$/;
		let str = $("#mobileNum").val();
		
		if(reg.test(str)){
			$("#registered").html("");
			let xhr = new XMLHttpRequest();
			xhr.open("GET","logon.php?username="+$("#mobileNum").val()+"&userpwd="+$("#pwd").val(),true);
			xhr.onreadystatechange = function(){
				if(xhr.status==200 && xhr.readyState==4){
					fun(xhr.responseText);
				}
			}
			xhr.send();
			function fun(str){
				if(str==1){
					$("#registered").html("用户名已注册");
				}else if(str==0){
					$("#registered").html("用户名可以注册");
				}
			}
		}else{
			$("#registered").html("手机号有误");
		}
		
	});
	$("#regNowBtn").click(function(){
		let xhr = new XMLHttpRequest();
		xhr.open("GET","access.php?username="+$("#mobileNum").val()+"&userpwd="+$("#pwd").val(),true);
		xhr.onreadystatechange = function(){
			if(xhr.status==200 && xhr.readyState==4){
				fun(xhr.responseText);
			}
		}
		xhr.send();
		function fun(str){
			if(str==0){
				alert("注册成功")
			}
		}
	});
	
	$("#pwd").blur(function(){
		var regNum = /^\d+$/;
		var regLetter = /^[a-zA-z]+$/;
		var regchar = /^[!@#$%^&*_+]+$/;
		var _regNum = /\d+/;
		var _regLetter = /[a-zA-z]+/;
		var _regchar = /[!@#$%^&*_+]+/;
		var str = $(this).val();
		if(regNum.test(str) == true || regLetter.test(str) == true || regchar.test(str) == true){
			$("#pwdLow").css({background:"red",color:"white"})
		}else if(_regNum.test(str) == true && _regLetter.test(str) == true && _regchar.test(str) == true){
			$("#pwdHigh").css({background:"green",color:"white"})
		}else{
			$("#pwdCen").css({background:"orange",color:"white"})
		}if($(this).val() == ""){
			$("#judge").html("密码不能为空")
		}
	});
	
	
	
	
	
});
