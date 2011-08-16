$(document).ready(function(){
  $(window).scroll(function(){
    var h = $('document.body').height();
    var y = $(window).scrollTop();
    if( y > 240 ){
      $("#banner").fadeIn("slow");
    } else {
      $('#banner').fadeOut('slow');
    }
  });
})
