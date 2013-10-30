
$(document).ready(function() {

  var $name = $('input#name'),
    $email = $('input#email'),
    $comment = $('textarea#comment'),
    clearForm = function() {
      $name.val('');
      $email.val('');
      $comment.val('');
    };
  
  $('.error').hide();
  
  $('#send_mail').click(function() {  
    //$('#contact').checkValidity();
    if (!$name.val() || !$email.val() || !$comment.val()) {
      return false;
    }
    $.post("bin/send_mail.php",$("#contact").serialize(),function(res){
        if(res){
            $('#msg_ok').fadeIn();
            clearForm();
        } else {
            $('#msg_ko').fadeIn();
        }
    });

  });

  $('div#msg_ok').hide();
  $('#msg_ok_x').click(function () {
    $('div#msg_ok').hide();
  });
  $('div#msg_ko').hide();
  $('#msg_ko_x').click(function () {
    $('div#msg_ko').hide();
  });

  $('div[data-toggle=tooltip]').tooltip();

});

