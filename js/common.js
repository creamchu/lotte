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

			//btnlist
			fn.btnlist();

			//tab
			fn.tab();
		},
		
		//fromFocus
		fromFocus : function(){

			//value 유무에 따른 활성화/비활성화
			function formValuCheck($this) {
				if($this.val().trim() == ""){
					$this.closest(".form_item").removeClass("is_complete");
				}else {
					$this.closest(".form_item").addClass("is_complete");
				}
			}

			//value 유무 체크 : 초기 default
			$(".form_item input").each(function(){
				var $this = $(this);
				if($this.is(':radio') || $this.is(':checkbox')) {
					if($this.is(':checked')){
						$this.closest(".form_item").addClass("is_complete");
					}
				}else{
					formValuCheck($this);
				}
			});

			//input event에 따른 value 유무 체크
			$(document).on("focus blur change", ".form_item input, .form_item textarea", function(){
				formValuCheck($(this));
			});

			//button event에 따른 value 유무 체크
			$(document).on("focus blur", ".form_item .form_btn", function(){
				var $this = $(this).siblings("input");
				if($this.val().trim() == ""){
					$this.closest(".form_item").removeClass("is_complete");
				}else {
					$this.closest(".form_item").addClass("is_complete");
				}
			});
		},
		
		//btnlist
		btnlist : function(){
			$(document).on("click", ".btn_list .item", function(){
				var $this = $(this);
				$this.addClass("is_active").siblings().removeClass("is_active");
			});
		},

		//tab
		tab : function(){
			$(document).on("click", ".tab-menu a", function() {
				var $this = $(this);
				var index = $this.index();
				$this.addClass("is_active").siblings().removeClass("is_active");
				$(".tab-cont > div").eq(index).addClass("is_active").siblings().removeClass("is_active");
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

