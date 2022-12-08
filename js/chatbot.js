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
			//fromFocus
			fn.fromFocus();

			//tab
			fn.tab();
		},
		
		//fromFocus: function(){
		fromFocus : function(){
			function formValuCheck(e) {
				if(e.val().trim() == ""){
					e.closest(".form_item").removeClass("is_complete");
				}else {
					e.closest(".form_item").addClass("is_complete");
				}
			}
			$(document).on("focus blur change", ".form_item input", function(){
				var e = $(this);
				formValuCheck(e);
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

		//restart
		restart : function(){
			$("#bot_restart").clone().appendTo(".chat_cont").show();
			$('.chat_cont').animate({
				scrollTop: $('.chat_cont')[0].scrollHeight
			}, 400);
		},

		//init
		init : function(){
			$("#bot_init").clone().appendTo(".chat_cont");
			$('.chat_cont').animate({
				scrollTop: $('.chat_cont')[0].scrollHeight
			}, 400);
		},

	}
})();


$(document).on('ready', function(){
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

