const our_services = () => {

    var showIcon = document.querySelectorAll(".showBtnForOurServices");
    var showableDiv = document.querySelectorAll(".our__services__body-offer-services-details-div-sub-heading");

    if (showIcon.length == showableDiv.length) {
        for (var i = 0; i < showIcon.length; i++) {
            addClickEvent(showIcon[i], i);
        }

    }

    function addClickEvent(item, index) {
        item.addEventListener("click", () => {
            var div = showableDiv[index];
            if (div.style.display == "block") {
                div.style.display = "none";
                item.className = "fa-solid fa-circle-plus showBtnForOurServices";
                item.style.color = "black";
            } else {   resetAll();
                item.className = "fa-solid fa-circle-minus showBtnForOurServices";
                item.style.color = "red";
                div.style.display = "block";
             
            }
        });

    }

    function resetAll() {
        for (var i = 0; i < showIcon.length; i++) {
            showIcon[i].className = "fa-solid fa-circle-plus showBtnForOurServices";
            showIcon[i].style.color = "black";
            showableDiv[i].style.display = "none";
        }
    }
}

export default our_services;