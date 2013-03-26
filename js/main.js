
jQuery("submit").click(function() { 

    var data = "address=" + $('#email').val() + "&title=" + $('#name').val() + "comment=" + $('#comment').val();
	//or however u want to format your data

	$.ajax({
	     type: "POST",
	     url: "send_mail.php",
	     data: data,
	     success: function(phpReturnResult){
	          //alert('Success: ' + phpReturnResult);
	          jQuery("email-sent").html("<div id='email-sent'><p>Thank you for the message.</p><p>We will reply as soon as possible. PHP Script's return result: " + phpReturnResult + "</p></div>");     
	     },
	     error: function(errormessage) {
	           //you would not show the real error to the user - this is just to see if everything is working
	          alert('Sendmail failed possibly php script: ' + errormessage);
	     }
	});    

return false;       
});  
