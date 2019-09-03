$(function() {
	$(".Top .title").mouseover(function() {
		$(this).css({
			background: "#dcdcda"
		});
		$(".title .drop").css({
			display: "block",
			background: "#f4f4f4"
		});
		$(".title .drop a").eq(0).mouseover(function() {
			$(this).html("官网集团"),
				$(this).css({
					color: "black"
				})
		});
		$(".title .drop a").eq(1).mouseover(function() {
			$(this).html("男生潮流"),
				$(this).css({
					color: "black"
				})
		});
		$(".title .drop a").eq(2).mouseover(function() {
			$(this).html("女生潮流"),
				$(this).css({
					color: "black"
				})
		});
		$(".title .drop a").eq(3).mouseover(function() {
			$(this).html("新鲜好去处"),
				$(this).css({
					color: "black"
				})
		});
		$(".title .drop a").eq(4).mouseover(function() {
			$(this).html("潮流嘉年华"),
				$(this).css({
					color: "black"
				})
		});
	});
	$(".Top .title").mouseout(function() {
		$(this).css({
			background: ""
		});
		$(".title .drop").css({
			display: "none"
		});
		$(".title .drop a").eq(0).mouseout(function() {
			$(this).html("YOHO!"),
				$(this).css({
					color: "#98aebc"
				})
		});
		$(".title .drop a").eq(1).mouseout(function() {
			$(this).html("YOHO!BOYS"),
				$(this).css({
					color: "#98aebc"
				})
		});
		$(".title .drop a").eq(2).mouseout(function() {
			$(this).html("YOHO!GRILS"),
				$(this).css({
					color: "#98aebc"
				})
		});
		$(".title .drop a").eq(3).mouseout(function() {
			$(this).html("Mars"),
				$(this).css({
					color: "#98aebc"
				})
		});
		$(".title .drop a").eq(4).mouseout(function() {
			$(this).html("YO'HOOD"),
				$(this).css({
					color: "#98aebc"
				})
		});
	});
	$(".Top .message li").eq(1).mouseover(function() {
		$(this).css({
			background: "#eaeceb"
		})
	});
	$(".Top .message li").eq(1).mouseout(function() {
		$(this).css({
			background: ""
		})
	});
	$(".Top .message .cliser").mouseover(function() {
		$(this).css({
			background: "#eaeceb"
		});
		$(".Top .message .cliser .service").css({
			display: "block",
			background: "#eaeceb",
		})
	});
	$(".Top .message .cliser").mouseout(function() {
		$(this).css({
			background: ""
		});
		$(".Top .message .cliser .service").css({
			display: "none",
		})
	})
	$(".Top .message .attent").mouseover(function() {
		$(this).css({
			background: "#eaeceb"
		});
		$(".Top .message .attent .attentewm").css({
			display: "block",
		})
	});
	$(".Top .message .attent").mouseout(function() {
		$(this).css({
			background: ""
		});
		$(".Top .message .attent .attentewm").css({
			display: "none",
		})
	});
	$(".Top .message .version").mouseover(function() {
		$(this).css({
			background: "#eaeceb"
		});
		$(".Top .message .mobleewm").css({
			display: "block",
		})
	});
	$(".Top .message .version").mouseout(function() {
		$(this).css({
			background: ""
		});
		$(".Top .message .mobleewm").css({
			display: "none",
		})
	});
	$(function() {
		$(".taglines .ListHead .Boys").css({
			background: "#3a3a3a"
		});
		$(".taglines .ListHead .Boys p").css({
			color: "white"
		});
		$(".taglines .ListHead .Boys span").css({
			color: "white"
		});
	})
	$(".taglinesBtm .inpt").focus(function() {
		$(this).val("")
	})
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
	});
	$(".oneMenu").mouseover(function() {
		$(".menus").css({
			display: "block"
		});
	});
	$(".oneMenu").mouseout(function() {
		$(".menus").css({
			display: "none"
		});
	});
	$(".taglines_list .Boys").click(function(){
		$(this).css({background:"#3a3a3a"});
		$(".taglinesBtm button").css({background: "#3a3a3a"});
		$(".taglinesBtm .inpt").css({border: "1px solid #3a3a3a"});
		$(".taglinesBtm .iconfont").css({color:"#3a3a3a"});
		$(".BoysList_main").css({display:"block"});
		$(this).siblings("div").css({background:""});
		$(".taglines .ListHead a p").css({color: "black"});
		$(".taglines .ListHead a span").css({color: "#8e8e8e"});
		$(".ListHead .Boys p").css({color:"white"});
		$(".ListHead .Boys span").css({color:"white"});6
		$(".BoysList_main").siblings().css({display:"none"});
	});
	$(".taglines_list .Girls").click(function(){
		$(this).css({background:"hotpink"});
		$(".taglinesBtm button").css({background: "hotpink"});
		$(".taglinesBtm .inpt").css({border: "1px solid hotpink"});
		$(".taglinesBtm .iconfont").css({color:"hotpink"});
		$(this).siblings("div").css({background:""});
		$(".GirlsList_main").css({display:"block"});
		$(".taglines .ListHead a p").css({color: "black"});
		$(".taglines .ListHead a span").css({color: "#8e8e8e"});
		$(".ListHead .Girls p").css({color:"white"});
		$(".ListHead .Girls span").css({color:"white"});
		$(".GirlsList_main").siblings().css({display:"none"});
	});
	$(".taglines_list .Kids").click(function(){
		$(this).css({background:"deepskyblue"});
		$(".taglinesBtm button").css({background: "deepskyblue"});
		$(".taglinesBtm .inpt").css({border: "1px solid deepskyblue"});
		$(".taglinesBtm .iconfont").css({color:"deepskyblue"});
		$(this).siblings("div").css({background:""});
		$(".KidsList_main").css({display:"block"});
		$(".taglines .ListHead a p").css({color: "black"});
		$(".taglines .ListHead a span").css({color: "#8e8e8e"});
		$(".ListHead .Kids p").css({color:"white"});
		$(".ListHead .Kids span").css({color:"white"});
		$(".KidsList_main").siblings().css({display:"none"});
	});
	$(".taglines_list .leftStyle").click(function(){
		$(this).css({background:"#5e4b3c"});
		$(".taglinesBtm button").css({background: "#5e4b3c"});
		$(".taglinesBtm .inpt").css({border: "1px solid #5e4b3c"});
		$(".taglinesBtm .iconfont").css({color:"#5e4b3c"});
		$(this).siblings("div").css({background:""});
		$(".leftStyleList_main").css({display:"block"});
		$(".taglines .ListHead a p").css({color: "black"});
		$(".taglines .ListHead a span").css({color: "#8e8e8e"});
		$(".ListHead .leftStyle p").css({color:"white"});
		$(".ListHead .leftStyle span").css({color:"white"});
		$(".leftStyleList_main").siblings().css({display:"none"});
	});
	
	$(".addCart").click(function(){
		window.open('shopping.html')
		// location.href = 'shopping.html'
	});

	let ls = localStorage
	
	console.log(ls.图片地址,ls.name,ls.价格)
	$(".smallImg").css({
		background:ls.图片地址,
		backgroundSize:"100% 100%"
	})
	$("#bigImg").css({
		background:ls.图片地址,
		backgroundSize: "700px 934px",
	})
	$(".right h1").html(ls.name );
	$(".price").html(ls.价格);
	
	$(".price").click(function(){
		// $(".detail")
	})
})
