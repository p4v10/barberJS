"use strict";

var slideIndex = 0;
slideShow();

function slideShow() {
    let slides = document.getElementsByClassName("mySlides");
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(slideShow, 3500);
}


// var subShow = document.getElementById("more");
// var subMenu = document.getElementById("sub");
// subShow.addEventListener('mouseover', function(event){
//     if(subMenu.style.display == "none"){
//         subMenu.style.display = "block";
//     } else{
//         subMenu.style.display = "none";
//     }
// });

var menuWrap = document.getElementById("wrapMen");
var burger = document.getElementById("iconShow");
var burWrap = document.getElementById("navB");
burger.addEventListener('click', function(event) {
    if(menuWrap.style.display == "none"){
        menuWrap.style.display = "block";
        burWrap.style.backgroundColor = "#1b1b1c";
    } else {
        menuWrap.style.display = "none";
        burWrap.style.backgroundColor = "";
    }
});

var containerText = document.getElementsByClassName("containerImg");
var texter = document.getElementsByClassName("textS");
var allCont = Array.from(containerText);
var botText = Array.from(texter);
console.log(allCont);
console.log(botText);


function showSome(){
    for(var i = 0; i < allCont.length; i++){
        if(allCont[i].onmouseover){
            for(var i = 0; i < botText.length; i++){
                botText[i].style.opacity = "1";
            }
        }
    }
}

// function showSome(){
//     if(allCont[0].onmouseover){
//         botText[0].style.opacity = "1";
//     }
//     if(allCont[1].onmouseover){
//         botText[1].style.opacity = "1";
//     }
//     if(allCont[2].onmouseover){
//         botText[2].style.opacity = "1";
//     }
//     if(allCont[3].onmouseover){
//         botText[3].style.opacity = "1";
//     }
//     if(allCont[4].onmouseover){
//         botText[4].style.opacity = "1";
//     }
//     if(allCont[5].onmouseover){
//         botText[5].style.opacity = "1";
//     }
// }


function hideSome(){
    if(allCont[0].onmouseout){
        botText[0].style.opacity = "0";
    }
    if(allCont[1].onmouseout){
        botText[1].style.opacity = "0";
    }
    if(allCont[2].onmouseout){
        botText[2].style.opacity = "0";
    }
    if(allCont[3].onmouseout){
        botText[3].style.opacity = "0";
    }
    if(allCont[4].onmouseout){
        botText[4].style.opacity = "0";
    }
    if(allCont[5].onmouseout){
        botText[5].style.opacity = "0";
    }
}


var slideIn = 1;
showSlides(slideIn);
function plusSlides(n){
    showSlides(slideIn += n);
}

function currentSlide(n) {
    showSlides(slideIn = n)
}
function showSlides(n) {
    let sliders = document.getElementsByClassName("sliders-down");
    let dots = document.getElementsByClassName("dot");

    if(n >sliders.length){
        slideIn = 1;
    }
    if(n < 1){
        slideIn = sliders.length;
    }
    for(let i = 0; i < sliders.length; i++){
        sliders[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    sliders[slideIn-1].style.display = "block";
    dots[slideIn-1].className += " active";
}

