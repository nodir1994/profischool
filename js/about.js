$(document).ready(function() {

  var count_bol = true;

  function countered1() {
    if (count_bol) {
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

      $("#key_fac1").animate({ number: 2017 }, {
        duration: 3000,
        postfix: ""
      });

      $("#key_fac2").animate({ number: 5 }, {
        duration: 3000,
        postfix: ""
      });

      $("#key_fac3").animate({ number: 1500 }, {
        duration: 3000,
        postfix: ""
      });

      $("#key_fac4").animate({ number: 45 }, {
        duration: 3000,
        postfix: ""
      });

      $("#key_fac5").animate({ number: 256 }, {
        duration: 3000,
        postfix: ""
      });

      $("#key_fac6").animate({ number: 32 }, {
        duration: 3000,
        postfix: ""
      });

      $("#key_fac7").animate({ number: 2345 }, {
        duration: 3000,
        postfix: ""
      });

      $("#key_fac8").animate({ number: 3 }, {
        duration: 3000,
        postfix: ""
      });

      count_bol = false
    }
  }

  if ($('section.key_facts').offset().top < $(window).scrollTop() + $(window).height() - 200) {
    countered1();
  }

  var scroll_second = $(window).scrollTop()

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
      if (scroll_second + $(window).height() > $('.parallax-img').offset().top && scroll_second < $('.parallax-img').height() + $('.parallax-img').offset().top) {
        var value_scroll = scroll_second * koeffitsient_s + koeffitsient_zoom;
        $('.parallax-img img').css('transform', 'translateY(' + -value_scroll + 'px)')
      }
    }

    if ($(window).width() < 576) {
      if (scroll_second + $(window).height() > $('.parallax-img').offset().top && scroll_second < $('.parallax-img').height() + $('.parallax-img').offset().top) {
        var value_scroll = scroll_second * .02 - 50;
        $('.parallax-img img').css('transform', 'translateX(' + -value_scroll + 'px)' + 'scale(1.2)')
      }
    }

    /******************************PARALLAX END*********************************/
  }

  parallax()

  $(window).scroll(function() {
  scroll_second = $(window).scrollTop()
    if ($('section.key_facts').offset().top < $(window).scrollTop() + $(window).height() - 200) {
      countered1();
    }
  parallax()
  })
})