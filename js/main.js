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
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});