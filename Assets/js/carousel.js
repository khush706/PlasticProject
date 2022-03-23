const plasticCarousel = require('bootstrap').Carousel;
const carousel = () => {
    var carouselSlider = document.querySelector(".carouselSlider");
    if (carouselSlider) {
        new plasticCarousel(carouselSlider);
    }
}

export default carousel;