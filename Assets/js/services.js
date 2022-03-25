document.addEventListener("DOMContentLoaded", function(event) {
    var faceBtn = document.getElementById("face_drop_button");
    var bodyBtn = document.getElementById("body_drop_button");

    var qSelector = document.querySelectorAll(".services_body_services_details_inner_content_div");
    var header = document.querySelectorAll(".services_body_services_details_accordian_div_header_head");

    var iDownArrow = document.querySelectorAll(".fa-angle-down");
    var iUpArrow = document.querySelectorAll(".fa-angle-up");



    function showDiv(iconBtn, headerDiv, innerDiv) {
        iconBtn.className = "fa-solid fa-angle-up";
        document.getElementById(headerDiv).style.backgroundColor = "whitesmoke";
        document.getElementById(innerDiv).style.display = "block";
    }

    function hideDiv(iconBtn, headerDiv, innerDiv) {
        iconBtn.className = "fa-solid fa-angle-down";
        document.getElementById(headerDiv).style.backgroundColor = "white";
        document.getElementById(innerDiv).style.display = "none";
    }

    function resetAll() {
        // Hiding Visible elements
        for (var i = 0; i < qSelector.length; i++) {
            qSelector[i].style.display = "none";
            header[i].style.backgroundColor = "white";
        }
        //Changing up elements classes to down 
        for (var u = 0; u < iDownArrow.length; u++) {
            iDownArrow[u].className = "fa-solid fa-angle-down";
        }
        for (var d = 0; d < iUpArrow.length; d++) {
            iUpArrow[d].className = "fa-solid fa-angle-down";
        }
    }

    faceBtn.addEventListener("click", function() {
        var display = window.getComputedStyle(document.getElementById("face-inner-div")).display;
        if (display == "none") {
            resetAll();
            showDiv(faceBtn, "face-div-header", "face-inner-div");
        } else {
            hideDiv(faceBtn, "face-div-header", "face-inner-div");
        }
    });

    bodyBtn.addEventListener("click", function() {
        var display = window.getComputedStyle(document.getElementById("body-inner-div")).display;
        if (display == "none") {
            resetAll();
            showDiv(bodyBtn, "body-div-header", "body-inner-div");
        } else {
            hideDiv(bodyBtn, "body-div-header", "body-inner-div");
        }
    });
});