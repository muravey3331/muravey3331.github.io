$(function () {
  $('.bxslider').bxSlider({
    captions: true
  });
  $(".menu-btn").on("click", function () {
    $('.dropdown-menu').slideDown();
  });

  $('.close-menu').on('click', function () {
    $('.dropdown-menu').slideUp();
  });

  $('.about-btn').on('click', function(){
    $("html").animate({scrollTop: $("header").height()},"slow");
  });
  $('.contacts-btn').on('click', function(){
    $("html").animate({scrollTop: $("header").height() + $(".about").height() + 11},"slow");
  })
});
