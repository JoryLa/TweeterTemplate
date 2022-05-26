$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    let charLength = $(this).val().length;
    let max = 140;
    let charLeft = max - charLength;
    
    $('.counter').text(charLeft);
    
    if (charLength > 140) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
  });
});


