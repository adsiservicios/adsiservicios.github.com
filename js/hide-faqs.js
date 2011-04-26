$(document).ready(function() {
  $('div.child').hide(); 
  $('div.faqs h2').click(function() {
    $(this).next().slideToggle('fast');
  });
});