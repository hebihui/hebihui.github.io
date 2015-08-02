// Cycle through homescreen hero backgrounds
// ----------------------------------------------
function cycleImages(){

    var $active = $('.js-slideshow .active');
    console.log('1');
    var $next = ($active.next().length > 0) ? $active.next() : $('.js-slideshow img:first');
    console.log('2');
    $next.css('z-index',-2);//move the next image up the pile
    console.log('3');
    $active.fadeOut(1500, function(){//fade out the top image
      $active.css('z-index',-3).show().removeClass('active');//reset the z-index and unhide the image
      console.log('4');
      $next.css('z-index',0).addClass('active');//make the next image the top one
      console.log('5');
    });
    var $color = $next.attr('data-color');
    $('.js-cycleTextColor').animate({color: $color}, 1500, cycleImages);

}

setInterval("cycleImages()", 4000); 
