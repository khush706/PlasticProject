$(".loc_header_main_div_menu_icon").on("click", function() {
    console.log("clicke");
    let display = $(".loc_header_main_div_header_about_div_mobile_view").css("display");

    if (display == "none") {
        $(".loc_header_main_div_header_about_div_mobile_view").css("display", "block");
    } else {
        $(".loc_header_main_div_header_about_div_mobile_view").css("display", "none");
    }
});

$(window).resize(function() {
    if ($(window).width() >= '768') {
        let display = $(".loc_header_main_div_header_about_div_mobile_view").css("display");
        if (display) {
            $(".loc_header_main_div_header_about_div_mobile_view").css("display", "none");
        }
    }
});