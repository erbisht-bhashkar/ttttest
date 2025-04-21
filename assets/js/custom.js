/* -------------------------------------------
Name: 		 The Travel Talk
Version:     1.0
Developer:   Sunil Kumar  
------------------------------------------- */
$(document).ready(function(){
    $('#Cities-silder').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
	})
	$('#Visit-silders').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
	})

	$('#review-silder').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
	})



// Header js here 

 $(window).scroll(function () {
    $(this).scrollTop() > 120 ? $(".header").addClass("sticky") : $(".header").removeClass("sticky")
})
$(window).on('scroll', function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 300) $('.go-top').addClass('active');
      if (scrolled < 300) $('.go-top').removeClass('active');
   });
   $('.go-top').on('click', function () {
      $("html, body").animate({
         scrollTop: "0"
      }, 500);
});




});