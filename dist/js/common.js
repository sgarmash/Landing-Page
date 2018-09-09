(function($, undefined){
	// function open menu
    $(function(){
		var openMenu = $(".toggle__nav");
	 	openMenu.on('click' , function (e) {
	        $(".active").slideToggle("slow");
	    });
    });
    // function open modal
 	$(function(){
		var openModal = $('.block__timetable a#open__modal').on('click', function (e) {
		 	$('.modal').toggleClass('dBlock');
		 	$(this).css({
		 		background: '#f3f3f3',
		 		color: '#999999'
		 	});
		});
    });
    $(function(){
		var openModalQuestion = $('.btn__question');
	 	openModalQuestion.on('click', function (e) {
		 	$('.modal').toggleClass('dBlock');
		});
    });
 	// function close modal
 	$(function(){
		var closeModal = $('.close');
		closeModal.on('click', function (e) {
		 	$('.modal').removeClass('dBlock');
		});
 	});
 	// function slick-slide settings
 	$(function(){
		var carousel = $('.reviews__carousel');
		carousel.slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: false,
		  autoplaySpeed: 2000,
		  responsive: [{
		  	breakpoint: 730,
		  	settings: {
		  		slidesToShow: 1,
	        	slidesToScroll: 1,
		  	}
		  }]
		});
 	});

 	// valid form
 	$(function() {
 		$('.modal__form').validate({
 			rules: {
 				name: {
 					required : true,
 					minlength: 3
 				},
 				email: {
 					required : true,
 					minlength: 5
 				}
 			},
 			highlight: function(element, errorClass, validClass) {
          		$(element).parents("div.form__input").addClass('form__error').removeClass('form__success');
          		$(element).parents("div.form__input").addClass('form__error').removeClass('form__success');
        	},
	        // remove class
	        unhighlight: function(element, errorClass, validClass) {
	          $(element).parents("label.form__input").removeClass('form__error').addClass('form__success');
	          $(element).parents("label.form__input").removeClass('form__error').addClass('form__success');
	        },
	        submitHandler: function() {
	            alert('valid form')
	        }
 		})
 	})
})(jQuery);