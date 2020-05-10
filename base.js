

$(document).ready(function () {

  const projects = $('.js-media');
  const projectBtns = $('.js-buttons');
  const buttonsLength = projectBtns.children('button').length;
  // console.log(buttonsLength)

  projects.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    fade: true,
    asNavFor: projectBtns
  });

  projectBtns.slick({
    slidesToShow: buttonsLength,
    slidesToScroll: 1,
    asNavFor: projects,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });
});

