'use strict';

const leftArrow = document.getElementsByClassName("screen7__nav-left")[0],
    rightArrow = document.getElementsByClassName("screen7__nav-right")[0],
    sliderInner = document.getElementsByClassName("inner")[1],
    slideAmount = document.getElementsByClassName("screen7__slide").length
;

let slideIndex = 0;

leftArrow.addEventListener('click', function() {
    if (slideIndex == 0) {
        slideIndex = 3;
        sliderInner.style.transform = `translateX(-80%)`;
    } else {
        sliderInner.style.transform = `translateX(-${20*slideIndex})`;
        slideIndex--;
    }
});

rightArrow.addEventListener('click', function() {
    if (slideIndex == slideAmount) {
        slideIndex = 0;
        sliderInner.style.transform = `translateX(0)`;
    } else {
        sliderInner.style.transform = `translateX(-${20*slideIndex})`;
        slideIndex++;
    }
});