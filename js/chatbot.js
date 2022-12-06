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
			//bookmark
			fn.bookmark();

			//tab
			fn.tab();
		},

		//bookmark: function(){
		bookmark : function(){
			$(document).on("click", ".bookmark", function(){
				if($(this).hasClass("is-active")){
					$(this).removeClass("is-active");
					$(this).find('span').text("즐겨찾기 해제");
				}else{
					$(this).addClass("is-active");
					$(this).find('span').text("즐겨찾기");
				}
			});
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

