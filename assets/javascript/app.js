$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
  
  
    /*
    ################
    Add navbar background color when scrolled
    */
    $(window).scroll(function() {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-dark");
        $(".nav-link").addClass("text-light bg-dark");
      } else {
        $(".navbar").removeClass("bg-dark");
        $(".nav-link").removeClass("text-light bg-dark");      }
    });
    // If Mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function() {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark");
        $(".nav-link").addClass("text-light bg-dark");
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark");
          $(".nav-link").removeClass("text-light bg-dark");
        } else {
        }
      }
    });
  });

  // change carousel slides

  $('.carousel').carousel({
    interval: 7000
  })