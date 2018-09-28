$( document ).ready(function() {

	// variable
	var openMenu, openModal, closeModal, carousel, openModalQuestion, descriptionBlockHeader, moreTextDescription; 

	// open menu
	openMenu = $('.toggle__nav');
 	openMenu.on('click' , function (e) {
        $(".active").slideToggle('slow');
    });

 	// open modal
 	openModal = $('.block__entry a');
    openModal.on('click', function (e) {
	 	$('.modal').toggleClass('dBlock');
	 	$(this).css({
	 		background: '#f3f3f3',
	 		color: '#999999',
	 		cursor: 'default'
	 	});
	});

    // close menu
	closeModal = $('.close');
	closeModal.on('click', function (e) {
	 	$('.modal').removeClass('dBlock');
	});

	descriptionBlockHeader = $('.block__description');
	descriptionBlockHeader.on('click','a', function (e) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

	// open modal
	openModalQuestion = $('.btn__question');
 	openModalQuestion.on('click', function (e) {
	 	$('.modal').toggleClass('dBlock');
	});

	moreTextDescription = $('.more__button');
	moreTextDescription.on('click', function(e) {
		$('.description__footer_text').toggleClass('active__text_descrition');
	});
 	// slick slide
	carousel = $('.reviews__carousel');
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

	//form validate
	$('.modal__form').validate({
		rules: {
			name: {
				required : true,
				minlength: 3
			},
			email: {
				required : true,
				minlength: 5
			},
			tel: {
				required : true
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
	    }
	})

 	$('input[type=tel]').on('keyup keypress', function(e) {
       if (e.keyCode == 8 || e.keyCode == 46) {}
       else
        {
            var letters=' +-()1234567890';
            return (letters.indexOf(String.fromCharCode(e.which))!=-1);
        }
    });
});