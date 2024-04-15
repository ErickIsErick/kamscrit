$('.resultados').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1500,
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
