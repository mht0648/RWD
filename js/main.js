$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $("#main-nav").addClass("fixed-top");
    } else {
      $("#main-nav").removeClass("fixed-top");
    }
  });

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      400,
      function () {
        window.location.hash = hash;
      }
    );
  });
});

$(".js-wp-1").Waypoint(function (direction) {
  $(".js-wp-1").addClass("animate__fadeInDown");
});

var waypoint = new Waypoint({
  element: document.getElementsByClassName(".js-wp-1"),
  handler: function (direction) {
    notify(this.id + " hit");
  },
});
