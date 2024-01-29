$(document).ready(function() {

  window.onload = function() {
      document.body.classList.add('loaded');
    AOS.init({
        once: true
      });
      
      // setTimeout(function(){
      //   $('body.loaded .header_clone').css('opacity', '1')
      // }, 2000)
  }
    /**********************************************HEADER-FIXED *****************************/

  var scroll = $(window).scrollTop();

  if ($(window).width() > 992) {
    $('.header_clone').html($('header .container').clone(true))
    $('.header_clone').find('.hdr-top').remove()

    if (scroll >= $(window).height()) {
      $('.header_clone').addClass('fixed_header')
    }
  }

  $(window).scroll(function() {

    scroll = $(window).scrollTop();


    /**********************************************HEADER-FIXED *****************************/
    if ($(window).width() > 992) {
      if (scroll >= $(window).height()) {
        $('.header_clone').addClass('fixed_header')
      } else {
        $('.header_clone').removeClass('fixed_header')
      }
    }
    /**********************************************HEADER-FIXED *****************************/

  })

  if ($(window).width() < 992) {

    $('.toggle-menu-mobile').click(function() {
      $('body').toggleClass('open_menu');
      $(this).toggleClass('open');
    });

    $('.header_mobile').append($('.hdr-bottom ul'))

    $('.robita_language').before($('.social-icons'))

    $('.header_mobile ul').append('<li class="contact_mobile"></li>')

    $('.contact_mobile').html($('a.contact-hdr'))

    $('.footer_link h3').on('click', function() {

      $(this).parent().siblings().find('h3').removeClass('actived')
      $(this).parent().siblings().find('ul').slideUp()

      $(this).toggleClass('actived')
      $(this).next().slideToggle()

    })

  }

})