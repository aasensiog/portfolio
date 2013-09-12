<?php
    $ToEmail = 'me@albertasensio.es';
    $EmailSubject = 'Site contact form';
    $mailheader = "From: ".$_POST["email"]."\r\n";
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n";
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $MESSAGE_BODY = "Name: ".$_POST["name"]."\r\n";
    $MESSAGE_BODY .= "Email: ".$_POST["email"]."\r\n";
    $MESSAGE_BODY .= "Comment: ".$_POST["comment"]."\r\n";
    $MESSAGE_BODY .= "From: ".$_POST["from"]."\r\n";

    if (mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader)) {
        echo("<p>Message successfully sent!</p>");
    } else {
        echo("<p>Message delivery failed...</p>");
    }

?>
