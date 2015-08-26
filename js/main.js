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

// Mobile nav animations
$(".hamburger-menu").hover(function() {
	$(this).toggleClass("hover-background");
});

$(".hamburger-menu").click(
      function(){
    $(".mobile-nav").toggle();
});


// Google Maps stuff
jQuery(function($) {
// Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});
// Initialize the Google Maps API
function initialize() {
	var mapCanvas = document.getElementById('map');
	var bounds = new google.maps.LatLngBounds();
	var mapOptions = {
	  center: new google.maps.LatLng(37.421898, -122.083956),
	  zoom: 3,
	  mapTypeId: google.maps.MapTypeId.TERRAIN
	}
//display a map on the page
	var map = new google.maps.Map(mapCanvas, mapOptions);
	 map.setTilt(45);
// print results for boonDocking JSON file
	var results = boonDocking["results"];
// Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
// loop through the array
	for (var i = 0; i < results.length; i++) {
		// function initMap() {
		var position = new google.maps.LatLng(results[i].Latitude, results[i].Longitude);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: results[i].Description
        });
// Allow each marker to have an info window
	google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(results[i].Description);
                infoWindow.open(map, marker);
            }
    })(marker, i));
// Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
}
// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(3);
        google.maps.event.removeListener(boundsListener);
});

}
// load map
google.maps.event.addDomListener(window, 'load', initialize);
