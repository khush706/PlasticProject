class videoComp {
    constructor($theComponentSelector) {
        this.$componentSelector = $theComponentSelector
        this.$plasticModal = this.$componentSelector.querySelector('#modalVideo')
        this.$plasticModalIframe = this.$componentSelector.querySelector('iframe')
        this.init()
    }
    init() {
        let _self = this
        _self.modalVideoInit()
    }

    modalVideoInit() {
        let _self = this
        console.log("this is modal")

        _self.$plasticModal.addEventListener('show.bs.modal', function (event) {
            // if iframe is present or not in modal
            if (_self.$plasticModalIframe) {
                const button = _self.$componentSelector.querySelector('.video-comp__video-contain-button')
                console.log(button)
                const videoUrl = button.getAttribute('data-src')
                console.log(videoUrl)
                const iframeUrl = videoUrl + '?autoplay=0&loop=0&autopause=0&cc_load_policy=1&cc_lang_pref=en'
                _self.$plasticModalIframe.setAttribute('src', iframeUrl)
            }
        })

        _self.$plasticModal.addEventListener('hide.bs.modal', function (event) {
            if (_self.$plasticModalIframe) {
                _self.$plasticModalIframe.setAttribute('src', '')
            }
        })

    }
}
let modalVideo

const modalVideoComponent = function alertInstance() {

    let videoCompHolder = document.querySelectorAll('.video-comp') // We cast it to let compiler know it can be iterated

    Array(...videoCompHolder).forEach(function (item) {
        modalVideo = new videoComp(item)
    })
}

export default modalVideoComponent