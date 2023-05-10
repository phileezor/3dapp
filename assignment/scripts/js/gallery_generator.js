// JavaScript Gallery Generator
$(document).ready(function() {
	// Set up a path variable to the PHP function that reads the image directory to find the thumbnail file names
	var xmlHttp = new XMLHttpRequest ();
	var htmlCode = "";
	var response;
	var send = "/scripts/php/hook.php";
	// Open the connection to the web server
	xmlHttp.open("GET", send, true);
	// Tell the server that the client has no outgoing message, i.e. we are sending nothing to the server
	xmlHttp.send(null);
	// Check we get a valid server response
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4) {
			// Response handler code
			response = xmlHttp.responseText.split("~");

				// Loop round the response array
				for (var i=0;i<response.length;i++) {
					htmlCode += '<a href="assets/images/gallery_images' + response[i] + '">';
					htmlCode += '<img class="card-img-top img-thumbnail" src="assets/images/gallery_images/' + response[i] + '">';
					htmlCode += '</a>';

				}
				// Return the HTML string to each of the 3 3D App element blocks, coke, sprite and pepper galleries
				document.getElementById('gallery').innerHTML = htmlCode;
			
		}
	};
});
