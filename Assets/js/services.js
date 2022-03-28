var accordian_heading = document.querySelectorAll(".services_body_services_details_accordian_div_header_head");
for (var i = 0; i < accordian_heading.length; i++) {
    addClickEvent(i);
}

function addClickEvent(i) {
    accordian_heading[i].addEventListener("click", function() {
        var div = this.nextElementSibling;
        var child = accordian_heading[i].children[1];
        if (div.style.display == "block") {
            div.style.display = "none";
            child.className = "fa-solid fa-angle-down";
        } else {
            hideAll();
            div.style.display = "block";
            child.className = "fa-solid fa-angle-up";
        }
    });
}

function hideAll() {
    for (var i = 0; i < accordian_heading.length; i++) {
        accordian_heading[i].nextElementSibling.style.display = "none";
        accordian_heading[i].children[1].className = "fa-solid fa-angle-down";
    }
}