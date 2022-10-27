
$(document).ready(function () {
    if(window.innerWidth <=  992) {

        $('.carouselExampleIndicators').addClass('carousel')
        $('.carouselExampleIndicators .carousel-inner .klass').addClass('carousel-item')
        const carousel = new bootstrap.Carousel('.carouselExampleIndicators')
    }
 });
