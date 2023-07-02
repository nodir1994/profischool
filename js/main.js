$(document).ready(function () {

  var swiperGraduates = new Swiper('.graduates_swiper', {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      nextEl: '.home_graduates .swiper-button-next',
      prevEl: '.home_graduates .swiper-button-prev',
    },
    autoplay: {
      delay: 90000
    },
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 1
      },
     
      1250: {
        slidesPerView: 2
      },
    }
  });

  var swiperCourses = new Swiper('.course_swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: '.home_courses .swiper-button-next',
      prevEl: '.home_courses .swiper-button-prev',
    },
    autoplay: {
      delay: 10300
    },
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 2
      }
    }
  });

  var swiperTeachers = new Swiper('.teachers_swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
      delay: 15300
    },
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 1,
        pagination: {
          el: '.teachers_swiper .swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      },
      991: {
        slidesPerView: 2
      },
      1250: {
        slidesPerView: 3
      },
    }
  });

  
  var swiperNews = new Swiper('.news_swiper', {
    slidesPerView: 3,
    spaceBetween: 24,
    autoplay: {
      delay: 25000
    },
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 1,
        pagination: {
          el: '.news_swiper .swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      },
      991: {
        slidesPerView: 2
      },
      1250: {
        slidesPerView: 3
      },
    }
  });

  if ($(window).width() < 768) {
    $('.gallery_block>div:nth-child(1) a').after($('.gallery_block>div:last-child a:last-child'))
  }

/////////////////////////////////////////////////////////////////////////

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $('.scrollup').addClass('showed');
    } else {
      $('.scrollup').removeClass('showed');
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
 
 
  $('.btn_favourite').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
  })

  $('.language_block').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
  })



  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 1,
      showinfo: 1
    },
    vimeo: {
      color: 'f00'
    }
  });

  $("body").click(function (e) {
    if (
      !$(e.target).is(
        ".language_block *,.language_block"
      )
    ) {
      $(".language_block").removeClass("active");
    }

    if (
      !$(e.target).is(
        ".mobile__menu .right_block, .mobile__menu .right_block *"
      )
    ) {
      $('.mobile__menu').removeClass('active')
      $('body').removeClass('opened')

    }
  });

  $(document).on('click', '.open_sidebar', function () {
    $('.mobile__menu').addClass('active')
    $('body').addClass('opened')
  })

  $(document).on('click', '.toggle_password span', function () {
    $(this).parent().toggleClass('show')
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  })

  $(document).on('click', '.mobile__menu .close', function () {
    $('.mobile__menu').removeClass('active')
    $('body').removeClass('opened')
  })

  if ($(window).width() < 1024) {
    $('section.home_faculty .right__faculty .swiper-container').after($('section.home_faculty .all_faculty '))
  }

  $(document).on('click', '.home_faculty ul li a', function (e) {
    e.preventDefault();
    $('.home_faculty ul li a').removeClass('active')
    $(this).addClass('active')
  })

});
