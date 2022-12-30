'use strict';

/**
 * navbar toggle
 */
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn");
const navlinks = document.querySelectorAll("[data-nav-link]")

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navTogglerEvent = function (elem){
    for(let i = 0; i < elem.length; i++){
        elem[i].addEventListener("click", function(){
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}

navTogglerEvent(navElemArr);
navTogglerEvent(navlinks)

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]")

window.addEventListener("scroll", function(){

    if(window.scroll >= 200) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active")
    }
});