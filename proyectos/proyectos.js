$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });
});

$(document).ready(function() {
  $(".ir-arriba").click(function() {
    $("body, html").animate(
      {
        scrollTop: "0px"
      },
      300
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });
});


