$(function () {

  var slider = $('.bx-slider').bxSlider({
    pager: false,
    nextText: "",
    prevText: "",
    nextSelector: '.next',
    prevSelector: '.prev',
    slideMargin: 15
  });

  $('.menu-icon').on('click', function () {
    $('.menu').show().animate({
      marginLeft: 0
    }, 500)
  });

  $('.close-menu').on('click', function () {
    $('.menu').animate({
      marginLeft: '-100%'
    }, {
      duration: 500,
      complete: function () {
        $(this).hide();
      }
    });
  });


  //close jquery
});



