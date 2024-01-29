$(document).ready(function() {

  var count_bool = true;

  function countered() {
    if (count_bool) {
      $.Tween.propHooks.number = {
        get: function(tween) {
          var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
          return parseFloat(num) || 0;
        },

        set: function(tween) {
          var opts = tween.options;
          tween.elem.innerHTML =
            (opts.prefix || "") +
            tween.now.toFixed(opts.fixed || 0) +
            (opts.postfix || "");
        }
      };

      $(".counter1").animate({ number: 2015 }, {
        duration: 4000,
        postfix: ""
      });

      $(".counter2").animate({ number: 34 }, {
        duration: 3000,
        postfix: ""
      });

      $(".counter3").animate({ number: 25 }, {
        duration: 3000,
        postfix: ""
      });

      $(".counter4").animate({ number: 1504 }, {
        duration: 4000,
        postfix: ""
      });

      count_bool = false
    }
  }

  /*******************************tab******************************/
  if ($(window).width() > 992) {
    $('section.services .tabs span').hover(function() {
      var mas = $(this).offset().left - $('section.services .tabs').offset().left;
      $(this).css({
        // 'font-family': 'Gotham',
        'font-weight': 500,
        'color': '#343A3D'
      })
      $('.line_tab').css('width', $(this).width() + 100 + 'px')
      $('.line_tab').css('left', mas + 'px')
    }, function() {
      var mas = $('section.services .tabs span.active').offset().left - $('section.services .tabs').offset().left;
      $('section.services .tabs span:not(.active)').css({
        // 'font-family': 'Gotham-Book',
        'font-weight': 'inherit',
        'color': '#7C8387'
      })
      $('.line_tab').css('width', $('section.services .tabs span.active').width() + 100 + 'px')
      $('.line_tab').css('left', mas + 'px')
    })
  }
  /*******************************tab******************************/

  /**********************************************NAVIGATION - FIXED *****************************/
  function function_navigation() {

    $(".navigation-main.anc2 li").each(function() {
      if ($(this).find('span.cd-dot').offset().top > $('section#anchor2').offset().top) {
        $(this).addClass('bl')
      } else {
        $(this).removeClass('bl')
      }
    });

    $(".navigation-main.anc3 li").each(function() {
      if ($(this).find('span.cd-dot').offset().top > $('section#anchor3').offset().top) {
        $(this).removeClass('bl')
      } else {
        $(this).addClass('bl')
      }
    });

    $(".navigation-main.anc4 li").each(function() {
      if ($(this).find('span.cd-dot').offset().top > $('section#anchor4').offset().top) {
        $(this).addClass('bl')
      } else {
        $(this).removeClass('bl')
      }
    });

  }
  /**********************************************NAVIGATION - FIXED *****************************/

  /**********************************************HEADER-FIXED *****************************/
  var scroll = $(window).scrollTop();

  if ($(window).width() > 992) {
    $('.header_clone').html($('header .container').clone(true))
    $('.header_clone').find('.hdr-top').remove()

    if (scroll >= $(window).height()) {
      $('.header_clone').addClass('fixed_header')
    }
  }

  if ($('section.our-projects').offset().top < scroll) {
    $('.navigation-main').addClass('rw')
  }


  /**********************************************HEADER-FIXED *****************************/

  var st_height = $('.navigation-main').height(),
    stick = $('.navigation-main').offset().top + st_height;

  function nav_class() {
    if ($('footer').offset().top <= stick) {
      $('.navigation-main').removeClass('anc1 anc2 anc3 anc4 anc5 in-footer anc6').addClass('in-footer')

    } else if (($('section#anchor5').offset().top <= stick) && (stick >= $('section#anchor6').offset().top)) {
      $('.navigation-main').removeClass('anc1 anc2 anc3 anc4 anc5 in-footer anc6').addClass('anc6')
    } else if (($('section#anchor4').offset().top <= stick) && (stick >= $('section#anchor5').offset().top)) {
      $('.navigation-main').removeClass('anc1 anc2 anc3 anc4 anc5 in-footer anc6').addClass('anc5')
    } else if (($('section#anchor3').offset().top <= stick) && (stick >= $('section#anchor4').offset().top)) {
      $('.navigation-main').removeClass('anc1 anc2 anc3 anc4 anc5 in-footer anc6').addClass('anc4')
    } else if (($('section#anchor2').offset().top <= stick) && (stick >= $('section#anchor3').offset().top)) {
      $('.navigation-main').removeClass('anc1 anc2 anc3 anc4 anc5 in-footer anc6').addClass('anc3')
    } else if (($('section#anchor1').offset().top <= stick) && (stick >= $('section#anchor2').offset().top)) {
      $('.navigation-main').removeClass('anc1 anc2 anc3 anc4 anc5 in-footer anc6').addClass('anc2')
    } else {
      $('.navigation-main').removeClass('anc1 anc2 anc3 anc4 anc5 in-footer anc6').addClass('anc1')
    }
  }

  function parallax() {
    /******************************PARALLAX BEGIN*********************************/
    var koeffitsient_zoom = 200,
      koeffitsient_s = .15;
    if ($(window).width() < 1200) {
      koeffitsient_zoom = -100
    }
    if ($(window).width() < 992) {
      koeffitsient_zoom = 50
      koeffitsient_s = .05
    }

    if ($(window).width() > 576) {
      if (scroll + $(window).height() > $('.parallax-img').offset().top && scroll < $('.parallax-img').height() + $('.parallax-img').offset().top) {
        var value_scroll = scroll * koeffitsient_s + koeffitsient_zoom;
        $('.parallax-img img').css('transform', 'translateY(' + -value_scroll + 'px)')
      }
    }

    if ($(window).width() < 576) {
      if (scroll + $(window).height() > $('.parallax-img').offset().top && scroll < $('.parallax-img').height() + $('.parallax-img').offset().top) {
        var value_scroll = scroll * .02 - 50;
        $('.parallax-img img').css('transform', 'translateX(' + -value_scroll + 'px)' + 'scale(1.2)')
      }
    }

    /******************************PARALLAX END*********************************/
  }


  nav_class()

  parallax()

  $(window).scroll(function() {

    scroll = $(window).scrollTop();

    parallax()

    /**********************************************HEADER-FIXED *****************************/
    if ($(window).width() > 992) {
      if (scroll >= $(window).height()) {
        $('.header_clone').addClass('fixed_header')
      } else {
        $('.header_clone').removeClass('fixed_header')
      }
      nav_class()
      st_height = $('.navigation-main').height()
      stick = $('.navigation-main').offset().top + st_height;

      function_navigation();

    }
    /**********************************************HEADER-FIXED *****************************/

    if ($('section.statistics').offset().top < scroll + $(window).height() - 200) {
      countered();
    }


  })



  if ($(window).width() > 767) {
    function_navigation();
    $(".tabs .tab").click(function() {
      $(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab_item").hide(0).eq($(this).index()).fadeIn(750)
    }).eq(0).addClass("active");
  }

  /***********************SWIPER-LOGOTYPES***************************************************/

  if ($(window).width() < 992) {

    var swiper_mobile_logo = $('.our-partners')

    if (swiper_mobile_logo) {
      $(swiper_mobile_logo).wrap('<div class="swiper-container swiper_inner"></div>').addClass('swiper-wrapper').find('div').addClass('swiper-slide')
      var swiper_mobile_logos = new Swiper('.swiper_inner', {
        centeredSlides: true,
        slidesPerView: '3.4',
        spaceBetween: 0,
        speed: 1500,
        autoplay: {
          delay: 5000
        },
        loop: true,
        breakpoints: {
          767: {
            simulateTouch: true,
            touchRatio: true,
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }

      });
    }
  }
  if ($(window).width() < 768) {

    $('.row-services').addClass('swiper-wrapper').wrap('<div class="swiper-container my_tab_slider"></div>').find('.col-services').addClass('swiper-slide').removeClass('col-sm-3')

    $(".tab_content .tab_item .swiper-container").each(function(index) {
      $(this).before('<div class="new_tab_title">' + $('.tabs span').eq(index).text() + '</div>');
    });

    var my_tab_slider = new Swiper('.my_tab_slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 5000
      }
    });

    $('.new_tab_title').on('click', function() {
      $(this).parent().siblings().find('.swiper-container').slideUp()
      $(this).parent().siblings().find('.new_tab_title').removeClass('open_tab')

      $(this).next().slideToggle()
      $(this).toggleClass('open_tab')
    })

    $('.my_tab_slider').slideUp()

  }
  /***********************SWIPER-LOGOTYPES***************************************************/



  $(".navigation-main").on("click", "a", function(event) {
    event.preventDefault();
    $(".navigation-main a").removeClass('active')
    $(this).addClass('active')
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });

  var text_bo = false;

  $('span#toggle-seo').on('click', function() {
    if (text_bo) {
      $(this).text("Read More")
      text_bo = false
    } else {
      $(this).text("See Less")
      text_bo = true
    }
    $('p.more-text').slideToggle(700)
  })

  var swiper_projects = new Swiper('.swiper-projects', {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1500,
    loop: true,
    simulateTouch: false,
    touchRatio: false,
    pagination: {
      el: '.swiper-projects .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      991: {
        simulateTouch: true,
        touchRatio: true,
        slidesPerView: 2,
      },
      767: {
        simulateTouch: true,
        touchRatio: true,
        slidesPerView: 1.3,
        spaceBetween: 0,
      }
    }
  });

  var swiper_news = new Swiper('.swiper-news', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 750,
    simulateTouch: false,
    loop: true,
    touchRatio: false,
    autoplay: {
      delay: 3000
    },
    effect: 'fade',
    pagination: {
      el: '.swiper-news .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      767: {
        simulateTouch: true,
        touchRatio: true,
      }
    }
  });

  // var time_slider_nav = 9000

  // var myFunction = function() {
  //   $('.video-btns .swiper-button-next').trigger('click')
  // };

  // setInterval(myFunction, 9000);

  var slider_videos = new Swiper('.slider-videos .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 700,
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    touchRatio: false,
    pagination: {
      el: '.slider-videos .swiper-pagination',
      type: 'fraction',
      clickable: true,
      renderFraction: function(currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          ' <span class="fraction-line active"></span> ' +
          '<span class="' + totalClass + '"></span>';
      }
    },

    navigation: {
      nextEl: '.video-btns .swiper-button-next',
      prevEl: '.video-btns .swiper-button-prev',
    },
    on: {
      init: function() {
        $('.fraction-line').addClass('active');
        // $('.swiper-slide-active video')[0].play();
      },
      transitionStart: function() {
        // this.$el.find('.swiper-slide-active video')[0].currentTime = 0;
        this.$el.find('.swiper-slide-active video')[0].play();
        $('.fraction-line').removeClass('active');
      },
      transitionEnd: function(swiper) {
        $('.fraction-line').addClass('active');
      }

    }



  });

})