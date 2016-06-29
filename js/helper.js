/* ==========================================================================
SideCar Toggle
========================================================================== */

$('button#drawer-toggle').click(function() {
  $(this).toggleClass('active');
  $('.body-overlay, nav#sidecar, div#siteWrapper').toggleClass('active');
  $('body').toggleClass('locked');
});

$('.body-overlay, .close-drawer').click(function() {
  $('.body-overlay, button#drawer-toggle, nav#sidecar, div#siteWrapper').removeClass('active');
  $('body').removeClass('locked');
});

/* ==========================================================================
ie9 & ie10 browser control (adds body.class)
========================================================================== */ 
if (/*@cc_on!@*/false && document.documentMode === 9) {
   document.documentElement.className+=' ie9';
}
if (/*@cc_on!@*/false && document.documentMode === 10) {
   document.documentElement.className+=' ie10';
}

$(document).ready(function() {

/* ==========================================================================
Miscellaneous Class Additions
========================================================================== */	


/* ==========================================================================
Sticky Nav (remove if unneeded)
========================================================================== */

// function stickyNavigation(stickyOffsetTop) {
//     var scrollFromTop = $(window).scrollTop(); 
//     if (scrollFromTop > stickyOffsetTop) {
//         $('header').addClass('fixed');
//         $('#home-top').addClass('fixed');
//     }
//     else {
//         $('header').removeClass('fixed');
//         $('#home-top').removeClass('fixed');
//     }  
// }
// var stickyOffsetTop = $('header').offset().top;
// stickyNavigation(stickyOffsetTop);
// $(window).scroll(function() {
//     stickyNavigation(stickyOffsetTop);
// });

/* ==========================================================================
Mobile Nav Drop Downs
========================================================================== */

$('#sidecar #mainnav li').each(function() {
  if ($(this).children('ul').size() >= 1) {
      $(this).addClass('hasChild');
      $(this).append('<a class="expand"></a>');
  }
});

$('#sidecar .expand').click(function() {
  $(this).parent().children('ul').toggleClass('active');
  $(this).toggleClass('active');
});


/* ==========================================================================
Open MBS in New Window
========================================================================== */
$('.site-credit-link').attr('target','_blank');

/* ==========================================================================
Adding Body Class based on Breadcrumb 
========================================================================== */
// only works if breadcrumb is set to 'true'
var currentPage = $("ul#breadcrumb ul li:last-child a").text();
currentPage = currentPage.toLowerCase().replace(/ /g, '-');


}); //end doc ready

/* ==========================================================================
Responsive Banner Rotator (Requires 1.7.1 wrap) (remove if unneeded)
========================================================================== */

// (function($){
//    var jQuery = $;
   
// $(document).ready(function() {

// 	$(window).on('resize load',function() {
// 		sliderHeight();
// 	});

// 	function sliderHeight() {
// 		var sh = $('.item img:visible').height();
// 		$('.slider').css({'height': sh +'px'});
// 		$('.slider .scrollable').css({'height': sh +'px'});
// 	}

// });

// })(jQ171);


