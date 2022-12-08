/**
* --------------------------------
* Common JS
* creator : chowoobin
* --------------------------------
*/
var fn = (function() {
	"use strict";

	return {
		//공통
		common : function(){
			//tab
			fn.tab();
		},

		//restart: function(){
		restart : function(){
			$("#bot_restart").clone().appendTo(".chat_cont").show();
			$('.chat_cont').animate({
				scrollTop: $('.chat_cont')[0].scrollHeight
			}, 400);
		},

		//init: function(){
		init : function(){
			$("#bot_init").clone().appendTo(".chat_cont");
			$('.chat_cont').animate({
				scrollTop: $('.chat_cont')[0].scrollHeight
			}, 400);
		},

		//tab
		tab : function(){
			$(document).on("click", ".tab-menu a", function() {
				var index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$(".tab-cont > div").eq(index).addClass("active").siblings().removeClass("active");
			});
		},

	}
})();


$(window).on('load', function(){
	//init
	fn.common();
	
	//cardswiper
	var $cardswiperObj = $(".cardswiper");
	if ( $cardswiperObj.find(".swiper-slide").length > 1 ){
			var cardswiper = new Swiper(".cardswiper", {
					slidesPerView: 1,
					spaceBetween: 20,
					observer: true,
					observeParents: true,
			});
	}

});

