// $.getJSON("http://maps.google.com/?q=" + boonDocking["results"]["Latitude"] + "," + boonDocking["results"]["Longitude"], function (responseJSON) {
// 	//http://maps.google.com/?q=[lat],[long]
//   console.log(responseJSON);
// });

// $(function() {
// //caches a jQuery object containing the header element
//     var header = $(".fade-transparent");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         if (scroll >= 200) {
//             header.removeClass('fade-transparent').addClass("fade-background");
//         } else {
//             header.removeClass("fade-background").addClass('fade-transparent');
//         }
//     });
// });

$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.nav').addClass('show');
    
  } else {
    
    $('.nav').removeClass('show');
    
 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
