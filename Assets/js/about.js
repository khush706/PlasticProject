$("#iPlayBtn").on("click", function() {
    $("#iframe").css("display", "block");
    $(".grid_div_for_iframe_imageHolderDiv").css("display", "none");
    $("#iframe")[0].src += "?autoplay=1";
});


$("#playBtnVideo").on("click", function() {
    $("#iframeDocVideo").css("display", "block");
    $(".about__body__doctor-intro-thumbnail-div").css("display", "none");
    $("#iframeDocVideo")[0].src += "?autoplay=1";
});


