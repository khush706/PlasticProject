$(".header_container_mobile_toggel").on("click", function() {
    let display = $(".header_container_services_mobile_view").css("display");
    if (display == "none") {
        $(".header_container_services_mobile_view").css("display", "flex");
    } else {
        $(".header_container_services_mobile_view").css("display", "none");
    }
});

$(".filterIcon").on("click", function() {
    $(".filterIcon").css("display", "none");
    $(".location_filter_div_filter").css("display", "block");
});

$(".closeBtnForFilter").on("click", function() {
    $(".filterIcon").css("display", "flex");
    $(".location_filter_div_filter").css("display", "none");
});


$(window).resize(function() {
    if ($(window).width() >= '768') {
        let display = $(".header_container_services_mobile_view").css("display");
        if (display) {
            $(".header_container_services_mobile_view").css("display", "none");
        }
    }
});

//ES6 
class Person {

    constructor(name) {
        this.test = name;
    }
}

const person1 = new Person('Test');

console.log(person1.test);