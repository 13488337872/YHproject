$(function() {
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
	})
	$(".stateList").click(function(evt){
		let e = evt || event;
		e.stopPropagation()
		$("#oUl").slideDown(700)
	})
	$(window).click(function(){
		$("#oUl").slideUp(700);
	})
	
	// 登录切换
	
	$(".loginSwitchCher").eq(0).css({display:"flex"})
	$(".loginSwitch span").click(function(){
		$(this).css({
			background: "black",
			zIndex: 6,
			color: "white",
		});
		$(this).siblings().css({
			background: "#cacaca",
			color:"black"
		});
		$(".loginSwitchCher").eq($(this).index()).css({display:"flex"})
		$(".loginSwitchCher").eq($(this).index()).siblings(".loginSwitchCher").css({display:"none"})
	})
	// footer上划
	let distan = 0
	setInterval(function(){
		if(distan==2){
			$(".blogrollList").css({top:0});
			distan = 0
		}
		distan++
		$(".blogrollList").animate({
			top:-47*distan
		})
	},2500);
	// ewm消失
	$(".ewm span").click(function(){
		$(this).parent().css({
			display:"none"
		})
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$(".ewmBackTop").css({
				display:"block"
			});
			$(".backTop").css({
				display:"block"
			});
		}else if($(window).scrollTop()==0){
			$(".ewmBackTop").css({
				display:"none"
			});
			$(".backTop").css({
				display:"none"
			});
		}
	});
	$(".backTop").click(function(){
		 $('html,body').animate({scrollTop: 0},'slow');
	});
	$("#loginButton").click(function(){
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
					let ls = sessionStorage;
					ls.mobile = $("#mobileNum").val();
					ls.pwd = $("#pwd").val();

				// alert("登录成功")
				location.href = "http://127.0.0.1/available/homepage.html"
			}else{
				
			}
		}
	});
	
	
	
	
	
	
	
})
