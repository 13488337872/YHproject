$(function(){
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
	
	$("#offPro").click(function(){
		$(this).parent().css({
			display:"none"
		});
	});
	$(".cenCount").children("span").eq(0).click(function(){
		if(parseInt($(this).next().html())==0){

		}else{
			$(this).next().html(parseInt($(this).next().html())-1)
		}
		let num = 0;
		for(let i=0;i<$(".cases0").length;i++){
			num += parseInt($(".cases0").eq(i).html());
		}
		$("#totality").html(num);
		
		let count = 0;
		
		$(this).parent().next().html(parseInt($(this).parent().prev().html().replace(/[^0-9]/i,""))*parseInt($(this).next().html()))
		for(let i=0;i<$(".subtotal").length;i++){
			count += parseInt($(".subtotal").eq(i).html());
		}
		$("#totalPrice").html(count);
	});
	$(".cenCount").children("span").eq(2).click(function(){
		
		$(this).prev().html(parseInt($(this).prev().html())+1)
		let num = 0;
		for(let i=0;i<$(".cases0").length;i++){
			num += parseInt($(".cases0").eq(i).html());
		}
		$("#totality").html(num)
		let count = 0;
		
		
		$(this).parent().next().html(parseInt($(this).parent().prev().html().replace(/[^0-9]/i,""))*$(this).prev().html())
		for(let i=0;i<$(".subtotal").length;i++){
			count += parseInt($(".subtotal").eq(i).html());
			
		}
		
		$("#totalPrice").html(count);
	})
	$(".priDelete").click(function(){
		$(this).parent().detach();
	})
	let flage = true;
	flage = newFunction(flage);

	$(".oUl li").click(function(){
		$(".bigshadow").css({display:"block"});
		$("#pover").css({display:"block"});
		let ls = sessionStorage;
		ls.img = $(this).children("img").attr("src");
		ls.html = $(this).children("a").html();
		ls.price = $(this).children(".povce").html();
		// ls.pwd = $("#pwd").val();
		$("#pover").children("img").attr({"src":ls.img});
		$("#pover").children("p").eq(0).html(ls.html);
		$("#pover").children("p").eq(1).html(ls.price);
		
		$(".povCount").children("span").eq(0).click(function(){
			if(parseInt($(this).next().html())==0){
	
			}else{
				$(this).next().html(parseInt($(this).next().html())-1)
			}
		});
		$(".povCount").children("span").eq(2).click(function(){
		
			$(this).prev().html(parseInt($(this).prev().html())+1)
			
		});
		$("#povSize span").click(function(){
			$(this).attr({"class":"smlSize"}).siblings("span").attr({"class":""})
		});

	});
	$("#procuo").click(function(){
		$(".bigshadow").css({display:"none"});
		$("#pover").css({display:"none"});
	});

	let ls = localStorage
	
	console.log(ls.name,ls.价格,$(".cartBat").css("display"))

	if($(".cartBat").css("display")=="block"){
		$(".detail").children("img").attr({"src":$("#pover").children("img").attr("src")});
		$(".priceMess").html(ls.name);
		$(".modity").html(ls.价格);
		$(".cartBat").css({display:"none"});
		$(".cartBatList").css({display:"block"});
		$(".bigshadow").css({display:"none"});
		$("#pover").css({display:"none"});
	}else{
		$(".bigshadow").css({display:"none"});
			$("#pover").css({display:"none"});
			$(".detail").eq(0).clone(true).insertBefore(".aggre");
			$(".detail:last").children("img").attr({"src":$("#pover").children("img").attr("src")})
			$(".priceMess:last").html($("#pover").children("p").eq(0).html());
			$(".messSize:last").html($(".smlSize").html());
			$(".modity:last").html($("#pover").children("p").eq(1).html());
	}


	$(".povPri").click(function(){
		if($(".cartBat").css("display")=="block"){
			$(".detail").children("img").attr({"src":$("#pover").children("img").attr("src")})
			$(".priceMess").html($("#pover").children("p").eq(0).html());
			$(".messSize").html($(".smlSize").html());
			$(".modity").html($("#pover").children("p").eq(1).html());
			$(".cartBat").css({display:"none"});
			$(".cartBatList").css({display:"block"});
			$(".bigshadow").css({display:"none"});
			$("#pover").css({display:"none"});
		}else{
			$(".bigshadow").css({display:"none"});
			$("#pover").css({display:"none"});
			$(".detail").eq(0).clone(true).insertBefore(".aggre");
			$(".detail:last").children("img").attr({"src":$("#pover").children("img").attr("src")})
			$(".priceMess:last").html($("#pover").children("p").eq(0).html());
			$(".messSize:last").html($(".smlSize").html());
			$(".modity:last").html($("#pover").children("p").eq(1).html());
		}
		
		
	});





});

function newFunction(flage) {
	$("#carCheckAll").click(function () {
		if (flage) {
			$(".carCheckSingle").attr("checked","checked");
			flage = false;
		}             
		else {
			$(".carCheckSingle").attr("checked", false);
			flage = true;
		}
	});
	$("#optDelte").click(function(){
		if(flage==false){
			$(".carCheckSingle").parent().detach();
		}
	})
	return flage;
}


