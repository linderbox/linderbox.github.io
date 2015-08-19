// When the page loads, add text and animate.css class after a second
$(document).ready(function () {
	setInterval(function() {
		$('.welcome-text').text("Some things in life really are free.").addClass('animated fadeIn');
		},1250);
});

// Change background of fixed nav once user scrolls down past 300px. Smooth fade in/out.
$(window).scroll(function() {
// '300' = The point you would like to fade the nav in.
	if ($(window).scrollTop() > 300 ){
 		$('.nav').addClass('show');
  } else {
    $('.nav').removeClass('show');
 	};
});

// Add animated scroll to linked #sections
$('.scroll').on('click', function(e){		
		e.preventDefault()
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1000);
});

// Initialize the Google Maps API
function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(37.421898, -122.083956),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);

// $.getJSON("http://maps.google.com/?q=" + boonDocking["results"]["Latitude"] + "," + boonDocking["results"]["Longitude"], function (responseJSON) {
// 	//http://maps.google.com/?q=[lat],[long]
//   console.log(responseJSON);
// });