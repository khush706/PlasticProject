var faceBtn = document.getElementById("face_drop_button");
var bodyBtn = document.getElementById("body_drop_button");

faceBtn.addEventListener("click", function() {
    let faceDisplay = document.getElementsByClassName("services_body_services_details_face_div_header_content");
    let display = window.getComputedStyle(faceDisplay[0]).display;
    if (display == "none") {
        faceBtn.className = "fa-solid fa-angle-up";
        document.getElementsByClassName("services_body_services_details_face_div_header_head")[0].style.backgroundColor = "whitesmoke";
        document.getElementsByClassName("services_body_services_details_face_div_header_content")[0].style.display = "block";
    } else {
        faceBtn.className = "fa-solid fa-angle-down";
        document.getElementsByClassName("services_body_services_details_face_div_header_head")[0].style.backgroundColor = "white";
        document.getElementsByClassName("services_body_services_details_face_div_header_content")[0].style.display = "none";
    }
});

bodyBtn.addEventListener("click", function() {
    let bodyDisplay = document.getElementsByClassName("services_body_services_details_body_div_header_content");
    let display = window.getComputedStyle(bodyDisplay[0]).display;

    if (display == "none") {
        bodyBtn.className = "fa-solid fa-angle-up";
        document.getElementsByClassName("services_body_services_details_body_div_header_head")[0].style.backgroundColor = "whitesmoke";
        document.getElementsByClassName("services_body_services_details_body_div_header_content")[0].style.display = "block";
    } else {
        bodyBtn.className = "fa-solid fa-angle-down";
        document.getElementsByClassName("services_body_services_details_body_div_header_head")[0].style.backgroundColor = "white";
        document.getElementsByClassName("services_body_services_details_body_div_header_content")[0].style.display = "none";
    }
});