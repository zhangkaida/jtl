var app = angular.module("app",["ngRoute"]);
app.controller("ctrl",function($scope,$http){
	$scope.show = function(){
		var index = 0
		$(".olist").on("click",function(){
			if(index == 0){
				$(".alist").css("transform","translateX(0)")
				index = 1
			}else{
				$(".alist").css("transform","translateX(100%)")
				index = 0
			}
		})
		$(".div_tap").on("click",function(){
			$(this).addClass("change_img").parent().siblings().find("div").removeClass("change_img")
		})
		$(".alist a").on("click",function(){
			$(".alist").css("transform","translateX(100%)");
		})
		$(".fa-arrow-left").on("click",function(){
			$(".alist").css("transform","translateX(100%)")
		})
		var swiper = new Swiper('.swiper-sp1', {
		    centeredSlides: true,
		    autoplay: 2500,
		    autoplayDisableOnInteraction: false,
		    loop:true	    
		});
		
		var swiper2 = new Swiper('.swiper-sp2', {
		    centeredSlides: true,
		    autoplayDisableOnInteraction: false,    
		});
		var swiper3 = new Swiper('.swiper-sp3', {
		    centeredSlides: true,
		    autoplayDisableOnInteraction: false,
		});
		var swiper4 = new Swiper('.swiper-sp4', {
		    centeredSlides: true,
		    autoplayDisableOnInteraction: false,
		});
		
		
		var swiper = new Swiper('.swiper-guanyu', {             
		    pagination: '.swiper-pagination',
		    autoplay:1000,
		    paginationClickable: true,
		    autoplayDisableOnInteraction:false,            
		    });
		$(".list3_div").on("click", "a", function(e) {
			e.preventDefault();
			var href = $(this).attr("href");
			console.log(href)
			$(href).css("transform","translateX(0)").siblings().css("transform","translateX(100%)")
		})
		$(".ser_jia a").click(function(){			
			var index=$(this).parent().index();
			$(this).parent().addClass("serjiaon").siblings().removeClass("serjiaon")
			$(".ser_jia>div").eq(index).css("display","block").siblings("div").css("display","none")
			
		})
		$(".servebody_head a").click(function(){
			
			var index=$(this).parent().index();
			$(this).parent().addClass("seron").siblings().removeClass("seron");
			$("#serve_body>div").eq(index).css("display","block").siblings("div").css("display","none")
		})
		$(".anliactive1 ol li").click(function(e){
			var e=e||event;
			e.preventDefault();			
			var index=$(this).index()
			$(".anli_bodyone>div").eq(index).css("display","block").siblings().css("display","none")
			$(this).addClass("anlion").siblings().removeClass("anlion");
		})
		
		$(".anliactive2 ul li").click(function(e){
			var e=e||event;
			e.preventDefault();									
			if ($(this).find("div").css("display")=="black") {
				$(this).find("i").css("transform","rotate(0deg)");
				$(this).find("div").parent().siblings().find("div").css("display","none")
			} else{
				$(this).find("i").css("transform","rotate(-180deg)");
				$(this).find("div").css("display","block")
			}
		})
		
		$(".anli_top>ul>li").click(function(e){
			var e=e||event;
			e.preventDefault();	
			var index=$(this).index()
			$("#anli").children("div").eq(index).css("display","block").siblings("div").css("display","none");
			$(this).addClass("anlitop").siblings().removeClass("anlitop")
			if (index==0) {
				$(".anli_top .anliactive1").css("display","block").siblings(".anliactive2").css("display","none")
			}else{
				$(".anli_top .anliactive2").css("display","block").siblings(".anliactive1").css("display","none")				
			}
		})  
		$(".anli_bodytwo").click(function(){
			$(".anliac").css("display","none");
			$(".anliactive2 ul li i").css("transform","rotate(0deg)");
		})
	}
	
})
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
    .when("/index2",{templateUrl:"index2.html"})
    .when("/ksbj",{templateUrl:"ksbj.html"})
    .when("/hxsj",{templateUrl:"hxsj.html"})
    .when("/children",{templateUrl:"children.html"})
    .when("/shop",{templateUrl:"shop.html"})
    .when("/app",{templateUrl:"app.html"})
    .when("/homeStyle",{templateUrl:"homeStyle.html"})
    .when("/fuwu",{templateUrl:"chanpinfuwu.html"})
    .when("/anli",{templateUrl:"anli.html"})
    .when("/tuce",{templateUrl:"tuce.html"})
    .when("/guanju",{templateUrl:"guanju.html"})
    .when("/yezhu",{templateUrl:"yezhu.html"})
    .when("/user",{templateUrl:"user.html"})
    .when("/yuyue",{templateUrl:"yuyue.html"})
    .when("/xiangqing",{templateUrl:"xiangqing.html"})
    .otherwise({
        redirectTo:"index2"
    })
}]);
$(function() {
		$(window).scroll(function() {
			if($(window).scrollTop() > 1000)
				$('#go_top').show();
			else
				$('#go_top').hide();
		});
		$('#go_top').click(function() {
			$('html, body').animate({ scrollTop: 0 }, 1000);
			console.log($(window).scrollTop());
		});
})