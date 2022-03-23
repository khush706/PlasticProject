class plasticBannerVideo {
    constructor($theComponentSelector) {
        this.$componentSelector = $theComponentSelector
        this.$plasticVideo = this.$componentSelector.querySelector('.banner-video')
        this.$plasticVideoButton = this.$componentSelector.querySelector('.banner-video__control-button')
        this.init()
    }
    init() {
        let _self = this
        _self.bannerBackgroundVideo()
    }

    bannerBackgroundVideo() {
        let _self = this
        console.log("this is banner video")

        _self.$plasticVideoButton.addEventListener('click', function (e) {
            const currentVideoTarget = e.currentTarget
            currentVideoTarget.classList.toggle('play-video')
            let currentState = currentVideoTarget.getAttribute('aria-pressed') != 'false'
            console.log(currentState)
            currentVideoTarget.setAttribute('aria-pressed', !currentState)
            console.log(currentVideoTarget.setAttribute('aria-pressed', !currentState))
            if (_self.$plasticVideo.paused) {
                _self.$plasticVideo.play();
            } else {
                _self.$plasticVideo.pause();
            }
        })



    }
}
let bannerVideo

const bannerVideoComponent = function alertInstance() {

    let bannerVideoHolder = document.querySelectorAll('.banner-video-comp') // We cast it to let compiler know it can be iterated

    Array(...bannerVideoHolder).forEach(function (item) {
        bannerVideo = new plasticBannerVideo(item)
    })
}

export default bannerVideoComponent