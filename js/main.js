
$(document).ready(function() {
  $('.error').hide();
  $('#send_mail').click(function() {
    // validate and process form here

    $('.error').hide();
      var name = $('input#name').val();
      if (name == '') {
        $('label#name_error').show();
        $('input#name').focus();
        return false;
      }
      var email = $('input#email').val();
      if (email == '') {
        $('label#email_error').show();
        $('input#email').focus();
        return false;
      }
      var comment = $('input#comment').val();
      if (comment == '') {
        $('label#comment_error').show();
        $('input#comment').focus();
        return false;
      }

      var dataString = 'name='+ name + '&email=' + email + '&comment=' + comment;
      //alert (dataString);return false;
      $.ajax({
        type: 'POST',
        url: 'bin/send_mail.php',
        data: dataString,
        success: function() {
          $('#contact_form').html("'<div id='message'></div>");
          $('#message').html('<h2>eMail enviado correctamente</h2>')
          .append('<p>Me pondré en contacto en breve.</p>')
          .hide()
          .fadeIn(1500, function() {
            $('#message').append("<img id='checkmark' src='img/check.png' />");
          });
        }
      });
      return false;

  });
});

