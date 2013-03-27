<?php
    $ToEmail = 'me@albertasensio.es';
    $EmailSubject = 'Site contact form';
    $mailheader = "From: ".$_REQUEST["email"]."\r\n";
    $mailheader .= "Reply-To: ".$_REQUEST["email"]."\r\n";
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $MESSAGE_BODY = "Name: ".$_REQUEST["name"]."";
    $MESSAGE_BODY .= "Email: ".$_REQUEST["email"]."";
    $MESSAGE_BODY .= "Comment: ".nl2br($_REQUEST["comment"])."";

    $sent = mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader);

    //callback for jQuery AJAX

	if ($sent){
	  echo 'sent';
	}
	else{}

	print_r($_REQUEST); 
	die();

?>
