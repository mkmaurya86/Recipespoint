$(document).ready(function() {
    $("#navToggle,header nav ~ .overlayBox, header nav .navClose").on("click", function() {
        $("header nav,body").toggleClass("active")
    });
}), $(window).scroll(function() {
    var e = $(document).scrollTop(),
        a = $(".header").outerHeight(),
        n = $(".bannerBox").outerHeight();
    e > a ? $(".header").addClass("fixed") : $(".header").removeClass("fixed"), e > n ? $(".header").addClass("in-view") : $(".header").removeClass("in-view")
});


$(document).ready(function() {  
	//scroll to top
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#return-to-top').fadeIn(); 
        } else { 
            $('#return-to-top').fadeOut(); 
        } 
    }); 
	
	// return to top
    $('#return-to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
	
	// scroll nav 
	$(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-100},1000);		   
    });	
	
	// open modal
	$('.openmodal').click(function (e) {
         e.preventDefault();
         $('.modal').addClass('opened');
    });
	$('.closemodal').click(function (e) {
         e.preventDefault();
         $('.modal').removeClass('opened');
    });
     //Modal Popup
      $(function() {
        $(".videogallery").click(function () {
          var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-video"),
          videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.closemodal').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
          });
        });
      }); 	
});
