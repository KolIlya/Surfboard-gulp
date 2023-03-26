const slider = $(".products__list").bxSlider({
    controls: false, 
    pager: false
});

$(".products-slider__arrow--direction--prev").click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
});

$(".products-slider__arrow--direction--next").click(e => {
    e.preventDefault();
    slider.goToNextSlide();
});