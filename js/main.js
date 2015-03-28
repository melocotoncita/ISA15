// Start midnight
$(document).ready(function(){
  $('header').midnight();
});

// Active Screen

$(function() {

  // Do our DOM lookups beforehand
  var nav_container = $(".navbar");
  var nav = $(".navbar-nav");
  
  
  var sections = $("section");
  var navigation_links = $(".navbar-nav li a");
  
  sections.waypoint({
    handler: function(event, direction) {
    
      var active_section;
      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $('.navbar-nav li a a[href="#' + active_section.attr("id") + '"]');
      navigation_links.removeClass("active");
      active_link.addClass("active");

    },
    offset: '25%'
  })
});