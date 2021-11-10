$(function() {
  setTimeout(function(){
		$('.start h1').fadeIn(1600);
	},500);
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3000);
  $('.btn').on('click',function() {
    if ($('header').hasClass('open')) {
      $('header').removeClass('open');
    } else {
      $('header').addClass('open');
    }
  });
  $('.nav li').click(function() {
    $('header').removeClass('open');
  });
  $('.mask').click(function() {
    $('header').removeClass('open');
  });

});
