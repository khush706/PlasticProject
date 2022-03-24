var faceBtn = document.getElementById("face_drop_button");
var bodyBtn = document.getElementById("body_drop_button");

var qSelector = document.querySelectorAll(".services_body_services_details_inner_content_div");
var header = document.querySelectorAll(".services_body_services_details_accordian_div_header_head");
var iDown = document.querySelectorAll("iTag");

faceBtn.addEventListener("click", function() {
    resetAll();
    var display = window.getComputedStyle(document.getElementById("face-inner-div")).display;
    if (display == "none") {
        faceBtn.className = "fa-solid fa-angle-up";
        document.getElementById("face-div-header").style.backgroundColor = "whitesmoke";
        document.getElementById("face-inner-div").style.display = "block";
    } else {
        faceBtn.className = "fa-solid fa-angle-down";
        document.getElementById("face-div-header").style.backgroundColor = "white";
        document.getElementById("face-inner-div").style.display = "none";
    }
});

bodyBtn.addEventListener("click", function() {
    resetAll();
    var display = window.getComputedStyle(document.getElementById("body-inner-div")).display;
    if (display == "none") {
        bodyBtn.className = "fa-solid fa-angle-up";
        document.getElementById("body-div-header").style.backgroundColor = "whitesmoke";
        document.getElementById("body-inner-div").style.display = "block";
    } else {
        bodyBtn.className = "fa-solid fa-angle-down";
        document.getElementById("body-div-header").style.backgroundColor = "white";
        document.getElementById("body-inner-div").style.display = "none";
    }
});

function resetAll() {
    for (var i = 0; i < qSelector.length; i++) {
        qSelector[i].style.display = "none";
        header[i].style.backgroundColor = "white";
    }

    for (var u = 0; u < iDown.length; u++) {
        iDown[u].className = "fa-solid fa-angle-down";
    }

}