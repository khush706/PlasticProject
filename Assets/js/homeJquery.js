//Hiding Dropdown when on other elements


$("#plasticRe").on("mouseover", function() {
    $("#servicesDropDiv").css("display", "none");
    $("#galleryDropDiv").css("display", "none");
});
$("#abt").on("mouseover", function() {
    $("#servicesDropDiv").css("display", "none");
    $("#galleryDropDiv").css("display", "none");
});
$("#meetTheTeamPara").on("mouseover", function() {
    $("#servicesDropDiv").css("display", "none");
    $("#galleryDropDiv").css("display", "none");
});
$("#locationPara").on("mouseover", function() {
    $("#servicesDropDiv").css("display", "none");
    $("#galleryDropDiv").css("display", "none");
});
$("#contactPara").on("mouseover", function() {
    $("#servicesDropDiv").css("display", "none");
    $("#galleryDropDiv").css("display", "none");
});


$("#services").on("mouseover", function() {
    $("#servicesDropDiv").css("display", "flex");
});
$("#servicesDropDiv").on("mouseleave", function() {
    $("#servicesDropDiv").css("display", "none");
});
$("#servicesDropDiv").on("mouseover", function() {
    $("#servicesDropDiv").css("display", "flex");
});



$("#gallery").on("mouseover", function() {
    $("#galleryDropDiv").css("display", "flex");
});
$("#galleryDropDiv").on("mouseleave", function() {
    $("#galleryDropDiv").css("display", "none");
});