$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items:1,
    center: true,
    responsive: {
      0: {
        stagePadding: 5
      },
      600: {
        items: 1,
        stagePadding: 100
      },
      1280: {
        items: 2,
        stagePadding: 100
      },
      2000: {
        items: 3,
        stagePadding: 100
      }
    }
  });
});
