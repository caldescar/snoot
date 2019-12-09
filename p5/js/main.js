$(document).ready(function(){

  console.log('ooo she leme touch it in miami');
var audio = $(".ahh")[0];
  $('.button').mousedown(function() {
    console.log('we out here');
    $('.bruh').attr("src", "img/buttonpushed.png");
    audio.play();
  });


  $('.button').mouseup(function() {
    console.log('we in here');
    $('.bruh').attr("src", "img/buttonunpushed.png");
  });
});
