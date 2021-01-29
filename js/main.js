/*start silder*/
$(function () {
    'use strict'
    //Adjust Slider Height
    var winH   = $(window).height(),
        upperH = $('.university').innerHeight();
        $('.slider, .carousel-item').height(winH - ( upperH ));   
});
/*end silder*/


/*start nav2*/
function test(){
  var tabsNewAnim = $('#navbarSupportedContent'),
      selectorNewAnim = $('#navbarSupportedContent').find('li').length,
      activeItemNewAnim = tabsNewAnim.find('.active'),
      activeWidthNewAnimHeight = activeItemNewAnim.innerHeight(),
      activeWidthNewAnimWidth = activeItemNewAnim.innerWidth(),
      itemPosNewAnimTop = activeItemNewAnim.position(),
      itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    "top":itemPosNewAnimTop.top + "px", 
    "left":itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click","li",function(e){
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimHeight = $(this).innerHeight(),
        activeWidthNewAnimWidth = $(this).innerWidth(),
        itemPosNewAnimTop = $(this).position(),
        itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function(){
  setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
  setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
  setTimeout(function(){ test(); });
});
/*end nav2*/

/*start section how to apply*/
$(".step").click( function() {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
  $(".line-progress").css("width", "3%");
  $(".step1").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
  $(".line-progress").css("width", "25%");
  $(".step2").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
  $(".line-progress").css("width", "50%");
  $(".step3").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
  $(".line-progress").css("width", "75%");
  $(".step4").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
  $(".line-progress").css("width", "100%");
  $(".step5").addClass("active").siblings().removeClass("active");
});
/*end section how to apply*/

//   insert back to top button dynamicly
$( "#backToTop" ).append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
var $window = $(window);
var distance = 80;
  // scroll
$window.scroll(function() {
  // header
  if($window.scrollTop() >= distance) {
    $(".backToTop").fadeIn();
  }else{
    $(".backToTop").fadeOut();
  }
});

$('.backToTop').click(function() {
  $('html, body').animate({
          scrollTop: 0
      }, 10);
});


/*Start animation */
$window.scroll(function(){

  if($window.scrollTop()>=$('.university').innerHeight() + 50 +  $('.second-nav').innerHeight())
    {
      $('.about-section').addClass("active");
    }

if($window.scrollTop()>=$('.about-section').offset().top)
    {
     $('.session-section-word').addClass("active");
     $('.session-img').addClass("active");
    }
  
    
  if($window.scrollTop()>=$('.session-section').offset().top)
    {
      $('.apply').addClass("active");
    }
    if($window.scrollTop()>=$('.apply').offset().top + $('.apply').innerHeight() )
    {
     $('.card-deck').addClass("active");
    }

    if($window.scrollTop()>=$('.apply').offset().top + 50 )
  {
   $('.tuition-aid .tuition-buttons').addClass("active");
    $('.tuition-img').addClass("active");
  }

  if($window.scrollTop()>=$('.tuition-aid').offset().top + $('.tuition-aid').innerHeight()/2-50)
  {
    $('.one').addClass("active");
    $('.two').addClass("active");
    $('.three').addClass("active");
    $('.four').addClass("active");
  }

  if($window.scrollTop()>=$('.parents-guardians').offset().top + $('.parents-guardians').innerHeight()/2-50+  50)
  {
   $('.I').addClass("active");
    $('.II').addClass("active");
     $('.III').addClass("active");
  }

 if($window.scrollTop()>=$('.alumni-section').offset().top + $('.alumni-section').innerHeight() +100)
  {
    $('.footer-word').addClass("active");
  }
 
  });
/*End animation */


/* Start loading page */
   $(".loading").ready(
    function () {
        setTimeout(function () {
            $(".loading").fadeOut();

        }, 3000);
    });
    
var style = document.createElement("style");
style.innerHTML = 'body::-webkit-scrollbar {display: flex;}';
      
$(function () {
    setTimeout(function () {
       document.head.appendChild(style);
    }, 3000);
    
});

    

   
/*End Loading page */