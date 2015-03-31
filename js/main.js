//Background on header

$(document).ready(function() {  
    var addBgrTop = $('.navbar').offset().top;  
      
    var headerNav = function(){  
    var scrollTop = $(window).scrollTop();  
           
    if (scrollTop > addBgrTop) {   
        $('.navbar').addClass('navbar-white');  
    } else {  
        $('.navbar').removeClass('navbar-white');   
    }  
};  

headerNav();  
    $(window).scroll(function() {  
        headerNav();  
    });  
});

// Smooth scroll

$("header a").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

// Custom JS

$(function(){
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 40
  });
  $('[data-toggle="tooltip"]').tooltip()
});
$(function() {
    Grid.init();
});

var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement, {
    "offset": 205,
    "tolerance": 5
});
headroom.init();