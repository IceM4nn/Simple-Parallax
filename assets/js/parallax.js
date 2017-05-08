// Get the height of the wrapper as a reference point of window.scroll function
var heroBox = $('.hero-wrapper').height();
// configure the speed of parallax scrolling
// 0.5 is the optimal speed in my opinion
var speed = 0.5;
$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  if (scroll <= heroBox) {
    $('.hero').css({
      // Manipulating the CSS top attribute with scrolling function
      'top' : scroll * speed + 'px'
    });
  }
});
