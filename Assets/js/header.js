class plasticHeader {
    constructor($theComponentSelector) {
        this.$componentSelector = $theComponentSelector
        this.$headerButton = this.$componentSelector.querySelector('.header__main-nav-button')
        this.$headerMainNavMenu = this.$componentSelector.querySelector('.header__main-nav-menu')
        this.$headerNavItems = this.$componentSelector.querySelectorAll('.header__main-nav-menu-list-item')
        this.$headerSubNavContain = this.$componentSelector.querySelectorAll('.header__main-nav-menu-list-item-subnav-contain')
        this.init()
    }
    init() {
        let _self = this
        _self.headerInit()
    }

    headerInit() {
        let _self = this
        console.log("this is header")

        _self.$headerButton.addEventListener('click', function (e) {
            const currentTarget = e.currentTarget
            currentTarget.classList.toggle('show-nav')
            let currentState = currentTarget.getAttribute('aria-expanded') == 'true'
            currentTarget.setAttribute('aria-expanded', !currentState)
            _self.$headerMainNavMenu.classList.toggle('show')
        })

        function hideSubNav() {
            _self.$headerSubNavContain.forEach(function (headerSubNav) {
                headerSubNav.classList.remove('show-sub-nav')
            })
        }

        _self.$headerSubNavContain.forEach(function (headerSubNav) {
            //headerSubNav.classList.remove('show-sub-nav')
            headerSubNav.addEventListener('click', function (e) {
                hideSubNav()
                const subNavTarget = e.currentTarget
                subNavTarget.classList.add('show-sub-nav')
                //e.preventDefault()
            })
            // in case of don't want ot show subnav on hover comment this function
            headerSubNav.addEventListener('mouseover',function(e){
               
                hideSubNav()
                const subNavTarget = e.currentTarget
                subNavTarget.classList.add('show-sub-nav')
               
            })
            headerSubNav.addEventListener('mouseleave',function(){
                hideSubNav()
               
            })
            const back = headerSubNav.querySelector('.header__main-nav-menu-list-item-subnav-item-back')
            back.addEventListener('click', function (e) {
                headerSubNav.classList.remove('show-sub-nav')
                e.stopImmediatePropagation();
            })
        })
        window.addEventListener('click',function(e){
            for (const select of _self.$headerSubNavContain) {
                if (!select.contains(e.target)) {
                    select.classList.remove('show-sub-nav');
                }
            }
        })

    }
}
let headerLink

const headerComponent = function alertInstance() {

    let headerHolder = document.querySelectorAll('.header') // We cast it to let compiler know it can be iterated

    Array(...headerHolder).forEach(function (item) {
        headerLink = new plasticHeader(item)
    })
}

export default headerComponent
