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
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){
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
var headroom  = new Headroom(myElement);
headroom.init();
