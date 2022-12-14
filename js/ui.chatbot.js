/**
* --------------------------------
* ui.chatbot JS
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

			//accordion
			fn.accordion();

			//btnList
			fn.btnList();

			//fileDel
			fn.fileDel();

			//fromFocus
			fn.fromFocus();
		},

		//tab
		tab : function(){
			$(document).on("click", ".tab_menu input[type='radio']", function() {
				var $this = $(this),
						$tabcont = $this.closest(".tab_wrap").find(".tab_item"),
						index = $this.closest("label").index();

				$tabcont.eq(index).addClass("is_active").siblings().removeClass("is_active");
			});
		},
		
		//accordion
		accordion : function(){
			$(document).on("click", ".accordion .btn_item", function(){
				var $this = $(this);

				$this.closest(".item").addClass("is_active").siblings().removeClass("is_active");
			});

			$(document).on("click", ".accordion .btn_allview", function(){
				var $this = $(this).closest(".accordion");

				if($this.hasClass("is_allview")){
					$this.removeClass("is_allview");
				}else{
					$this.addClass("is_allview");
				}
			});
		},
		
		//btnList
		btnList : function(){
			$(document).on("click", ".btn_list .item", function(){
				var $this = $(this);

				$this.addClass("is_active").siblings().removeClass("is_active");
			});
		},
		
		//fileDel
		fileDel : function(){
			$(document).on("click", ".file_list .file_del", function(){
				var $this = $(this);

				$this.closest(".item").removeClass("is_active is_many");
			});
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
			$(document).on("focus blur change", ".form_item .form_btn", function(){
				var $this = $(this).siblings("input");

				formValuCheck($this);
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
					spaceBetween: 12,
					observer: true,
					observeParents: true,
			});
	}

});

