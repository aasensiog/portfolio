
$(document).ready(function() {
  $('.error').hide();
  $('#send_mail').click(function() {
      var name = $('input#name').val();
      var email = $('input#email').val();
      var comment = $('textarea#comment').val();

      var dataString = 'name='+ name + '&email=' + email + '&comment=' + comment;
      
      $.ajax({
        type: 'POST',
        url: 'bin/send_mail.php',
        data: dataString,
        success: function() {
          $('#contact_form').html("'<div id='message'><h3>Correo enviado correctamente</h3><p>Me pondré en contacto en breve.</p></div>");
          .fadeIn(1500, function() {
            $('#message').append("<img id='checkmark' src='img/check.png' />");
          });
        }
      });
      return false;

  });
});

