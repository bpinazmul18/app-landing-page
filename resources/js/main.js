$(document).ready(function() {
    $(".js--services-section").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });
    //OWL CAROUSEL//
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1
    });

    //OWL CAROUSEL CONTROL BUTTON//
    $('.control-prev-btn').click(function() {
        $('.owl-prev').trigger('click');
    });
    $('.control-next-btn').click(function() {
        $('.owl-next').trigger('click');
    });
    //FUNCTION CALL//
    check();
    accordion();
})

function check() {
    var checkBox = document.getElementById("checkBox");
    var element = document.getElementById("month");
    var annaul = document.getElementById("annaul");
    var text1 = document.getElementsByClassName("card-text-1");
    var text2 = document.getElementsByClassName("card-text-2");

    if (checkBox.checked == false) {
        element.classList.add("switch-color");
        annaul.classList.remove("switch-color");
    } else {
        element.classList.remove("switch-color");
        annaul.classList.add("switch-color");
    }

    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked == false) {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        } else if (checkBox.checked == true) {
            text1[i].style.display = "none";
            text2[i].style.display = "block"
        }
    }
}


// ACCORDION SECTION//
function accordion() {
    var acc = document.getElementsByClassName("accordion-btn");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}