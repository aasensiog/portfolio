$(document).ready(function() {
    $('.slideshow').cycle({
        fx: 'fade'
    });

    $('#install').click(function() {
    	var manifestLocation = "http://albertasensio.es/ht/app/manifest.webapp"; // your domain here
		var installRequest = navigator.mozApps.install(manifestLocation);

		installRequest.onsuccess = function(data) {
		    alert('installed');
		};

		installRequest.onerror = function(err) {
		    // App couldn't be installed!
		    alert("Install error!");
		};
    });
});
