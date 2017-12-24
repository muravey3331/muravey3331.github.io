'use strict';

$(function () {

  $('.bxslider').bxSlider({
    controls: true,
    pager: false,
    auto: true,
    pause: 5000,
    autoHover:true,
    slideMargin: 5
  });

  var html = $("#tile__masonry").html();
  var word = "";

  function createAjaxReq(word) {
    $.ajax({
      url: 'http://api.pixplorer.co.uk/image?word='+ word +'&amount=7&size=l',
      success: function (data) {
        console.log(data);
        createTmpl(data);
      }
    });
  }
  createAjaxReq(word);

  function createTmpl(data) {
    var content = tmpl(html, data);

    $(".grid").remove();
    $(".tile__box").append(content);
    $(".search__input").val('');

    $('.grid').masonry({
      itemSelector: '.grid__item',
      columnWidth: '.grid__sizer',
      percentPosition: true
    });
  }

  $(".search__button").on("click", function (e) {
    word = $(".search__input").val();

    createAjaxReq(word);
    e.preventDefault();
  });

});