
const plasticStoryCarousel = require('bootstrap').Carousel;

class plasticpatientStoryCarousel {
    constructor($theComponentSelector) {
        this.$componentSelector = $theComponentSelector
        this.$plasticStoryCarousel = this.$componentSelector.querySelector('.patient-story-carousel__slider')
        this.$plasticStoryCarouselSlide = this.$componentSelector.querySelectorAll('.carousel-item')
        this.$plasticStoryLeftButton = this.$componentSelector.querySelector('.patient-story-carousel__button-left')
        this.$plasticStoryRightButton = this.$componentSelector.querySelector('.patient-story-carousel__button-right')
        this.init()
    }
    init() {
        let _self = this
        _self.patientStorySlider()
    }

    patientStorySlider() {
        let _self = this
        console.log("this is another carousel")
        function plasticStorySlider() {           
                var carousel = new plasticStoryCarousel(_self.$plasticStoryCarousel)
                if (_self.$plasticStoryCarouselSlide.length <= 1) {
                    _self.$plasticStoryLeftButton.style.display = 'none'
                    _self.$plasticStoryRightButton.style.display = 'none'
                }
            
        }
        window.addEventListener("DOMContentLoaded", plasticStorySlider, false)

    }
}
let patientStoryCarousel

const patientStoryCarouselComponent = function alertInstance() {

    let patientStoryCarouselHolder = document.querySelectorAll('.patient-story-carousel') // We cast it to let compiler know it can be iterated

    Array(...patientStoryCarouselHolder).forEach(function (item) {
        patientStoryCarousel = new plasticpatientStoryCarousel(item)
    })
}

export default patientStoryCarouselComponent
