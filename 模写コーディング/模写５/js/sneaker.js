$(function() {
  $('.btn').click(function() {
    if($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });
  $('.mask').click(function() {
    $('#header').removeClass('open');
  });
  $('nav a').click(function() {
    $('#header').removeClass('open');
  });
  $('.slick').slick({
  centerMode: true,
  centerPadding: '60px',
  variableWidth: true,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
  $(window).scroll(function() {
    $('.fadeIn').each(function() {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});
