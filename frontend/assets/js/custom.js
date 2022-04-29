$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('header').addClass('scrolled');
    } else {
       $('header').removeClass('scrolled');
    }
});

function responsive(maxWidth) {
   if (maxWidth.matches) { 
     $('#responsive').addClass('text-end');
     $('#responsive').removeClass('align-items-center');
   }
 }
  var maxWidth = window.matchMedia("(max-width: 991px)");
  responsive(maxWidth);