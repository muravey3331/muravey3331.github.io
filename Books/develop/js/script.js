"use strict";
$(function () {

  function hideCont() {
    $('.show-content-container > div').slideUp();
  }

  $('.menu-show-btn').on('click', function () {
    var menuContainer = $('.menu-container');
    hideCont();
    menuContainer.slideToggle();
  });

  $('.search-show-btn').on('click', function () {
    hideCont();
    $('.search-container--mobile').slideToggle();
  });

  $('.shop-cart-show-btn').on('click', function () {
    hideCont();
    $('.shop-cart-container--mobile').slideToggle();
  });

  var booksContainer = $('.tabs-container');
  var booksData;

  $.ajax({
    url: 'build/js/books.json',
    dataType: 'json'
  }).done(function (data) {
    booksData = data;
    renderBookList(booksData);
  });

  function renderBookList(data) {
    if (data.books.length === 0){
      $('.tabs-container').append($("<p class='books-amount'>Not found any books. Try again.</p>"));
    }else{
      var books = data;
      var source = document.getElementById("books-template").innerHTML;
      var template = Handlebars.compile(source);
      var html = template(books);

      booksContainer.append(html);
    }

  }


  $('.tabs > ul > li').on('click', function () {
    var booksArr = booksData.books;
    $(this).siblings().removeClass('tabs__active');
    $(this).addClass('tabs__active');
    $('.tabs-container > a').remove();
    $('.books-amount').remove();

    var attr = $(this).attr('filter-attr');

    if (attr === "specialOffer" || attr === "used") {
      booksArr = booksArr.filter(function (el) {
        return el[attr];
      })
    } else {
      booksArr = booksArr.sort(sortBooks);
      if (attr === 'year') {
        booksArr = booksArr.reverse();
      }
    }

    var sortedBooks = {
      books: booksArr
    };

    function sortBooks(a, b) {
      return a[attr] - b[attr];
    }
    renderBookList(sortedBooks);
  });



  function search() {
    var booksArr = booksData.books;
    var searchText;
    if (window.innerWidth < 768){
      searchText = $('.search-field--mobile').val().toLowerCase();
      $('.search-field--mobile').val("");
    }else{
      searchText = $('.search-field--desktop').val().toLowerCase();
      $('.search-field--desktop').val("");
    }

    $('.tabs-container > a').remove();
    $('.books-amount').remove();

    booksArr = booksArr.filter(function (el) {
      if (el.title.toLowerCase().indexOf(searchText) !== -1) return true
    });


    var sortedBooks = {
      books: booksArr
    };
    renderBookList(sortedBooks);

  }
  $('.search-btn').on('click', search);
  $('.search-field').keydown(function(event){
    if(event.keyCode == 13){
      search();
    }
  });


});
