function func() {
  let header_height = $('.header').innerHeight();

  $('.header').css({
    'height': header_height,
  });


  if ($(window).width() < 1025) {
    $('.header__nav').css({
      'top': header_height,
    });
  }

}

$(window).resize(func);

$(window).init(func)


$(function () {


  $('.gallery__slider').slick({
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button class="slick-arrow slick-prev"><svg><use href="#icon-arrow-prev"></use></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg><use href="#icon-arrow-next"></use></svg></button>',
    responsive: [{
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


})

$(function () {
  func();

  $(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 0) {
      $('header').addClass('scroll');
    } else {
      $('header').removeClass('scroll');
    }

  });

  $('.mobile__hamburger').click(function () {
    $('.header__nav').toggleClass('opened');
    $('body').toggleClass('oh');
    $(this).toggleClass('opened');
    $('.header').toggleClass('opened');
  });

  $('.header__nav li a.anchor').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).legth != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top - 200
      }, 300);
      if ($(window).width() < 1024) $('.mobile__hamburger').click();
    }
    return false;
  });

  $('.footer__nav li a.anchor').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).legth != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top - 200
      }, 300);
    }
    return false;
  });


  // Табы
  $('.tabs__content > div').hide();

  $('.tabs__list a').click(function () {
    if ($(this).parent().hasClass('active'))
      return;
    $(this).parent().addClass('active').siblings().removeClass('active');
    target = $(this).attr('href');
    $(target).show().siblings().hide();

    return false;
  });

  $('.tabs__list li:first-child a').click();
  // Табы

})


// popup
;
(function () {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function (item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.closestItemByClass = function (item, className) {
    var node = item;

    while (node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.toggleScroll = function () {
    myLib.body.classList.toggle('oh');
  };
})();

;
(function () {
  var showPopup = function (target) {
    target.classList.add('is-active');
  };

  var closePopup = function (target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('popup__close') ||
      target.classList.contains('popup__inner')) {
      var popup = myLib.closestItemByClass(target, 'popup');

      closePopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function (e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });
})();

// popup