$("#iPlayBtn").on("click", function() {
    $("#iframe").css("display", "block");
    $(".grid_div_for_iframe_imageHolderDiv").css("display", "none");
    $("#iframe")[0].src += "?autoplay=1";
});