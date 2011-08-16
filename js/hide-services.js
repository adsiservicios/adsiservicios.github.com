$(document).ready(function() {
  $('ul.child').hide();  
  $('div.ser h3').click(function() {
    $(this).next().slideToggle('fast');
  });
});
