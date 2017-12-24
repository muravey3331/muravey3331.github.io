$(function(){


  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true
  });

  $( ".tabs-box" ).accordion();

  var $tabLink = $( ".tab__link");

  $tabLink.on('click',function(){
    $tabLink.removeClass("active");
  });
  $tabLink.on('click',function(){
    $(this).addClass("active");
  })





});
