$.getJSON("http://maps.google.com/?q=" + boonDocking["results"]["Latitude"] + "," + boonDocking["results"]["Longitude"], function (responseJSON) {
	//http://maps.google.com/?q=[lat],[long]
  console.log(responseJSON);
});