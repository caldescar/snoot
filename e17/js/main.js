''$(document).ready(function(){


  console.log('maybe i should get something to eat soon');


  $('.fall').click(function() {
    $('.number1').toggleClass('align-left');
  });

  $('.drizzle').click(function() {
    $('.number2').toggleClass('darkcolor');
  });

  $('.warm').click(function() {
    $('.warm').toggleClass('hot');
    $('.number3').toggleClass('hot');
  });

  $('.lightening').click(function() {
    $('.lightening').toggleClass('cool');
  });
});
