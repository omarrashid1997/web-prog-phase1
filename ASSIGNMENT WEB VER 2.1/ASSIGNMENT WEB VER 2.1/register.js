$('#myPassword, #myConfirmPassword').on('keyup', function() {
  if ($('#myPassword').val() == $('#myConfirmPassword').val() && ('#myPassword').length>0&&('myConfirmPassword').length>0) {
    $('#message').html('Password Match!').css('color', 'white');
  }
  else{
    $('#message').html('Password does not match!').css('color', 'red');
	$('input[type="submit"]').prop('disabled', true);
  }
});

$('#myPassword, #myConfirmPassword').ready(function() {
     $('input[type="submit"]').prop('disabled', true);
     $('input[type="password"]').keyup(function() {
        if($('#myConfirmPassword').val() == $('#myPassword').val()) {
           $('input[type="submit"]').prop('disabled', false);
        }
     });
 });