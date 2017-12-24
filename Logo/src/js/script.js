/**
 * Created by Pavel on 26.07.2016.
 */

$(function () {
  $('.bxslider').bxSlider({
    controls: true,
    pager: true,
    slideMargin: 5
  });

  $(".menu-icon").on("click", function () {
    $("nav").slideDown("slow", function () {
    });
  });
  $(".menu-close-icon").on("click", function () {
    $("nav").slideUp("slow", function () {
    });
  });

  var counter = 0;

  function createAjaxReq(e) {
    $.ajax({
      url: 'src/js/users.json',
      dataType: 'json',
      success: function (data) {
        console.log(data);
        var usersArr = data.users;

        for (var i = counter; i < (counter + 10); i++) {
          if (usersArr[i]) {

            var user = usersArr[i];

            var userBox = document.createElement('li');
            userBox.className = 'user-box';
            $('.user-container').append(userBox);

            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = 'radio-input-' + i;
            radio.className = 'radio-input';
            radio.setAttribute("name", 'users-label');

            var label = document.createElement('label');
            label.className = 'radio-label clearfix';
            label.setAttribute("for", 'radio-input-' + i);

            var userLogo = document.createElement('img');
            userLogo.className = "user-logo";
            userLogo.src = "http://dev.frevend.com/json/images/u_" + (i + 1) + ".png";

            var userName = document.createElement('h3');
            userName.className = "user-name";
            userName.innerHTML = user.name + " " + user.surname;

            var userAbout = document.createElement('p');
            userAbout.className = "user-about";
            userAbout.innerHTML = user.desc;

            userBox.appendChild(radio);
            userBox.appendChild(label);
            label.appendChild(userLogo);
            label.appendChild(userName);
            label.appendChild(userAbout);
          }
        }
        counter += 10;
      }
    });
  }

  createAjaxReq();

  $(window).scroll(function () {
    if ($(document).height() - $(window).height() <= $(window).scrollTop() + 250) {
      createAjaxReq();
    }
  });
});


