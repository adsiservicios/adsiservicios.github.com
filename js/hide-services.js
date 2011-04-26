$(document).ready(function() {
  $('ul.child').hide();  
  $('div.ser h2').click(function() {
    $(this).next().slideToggle('fast');
  });
});