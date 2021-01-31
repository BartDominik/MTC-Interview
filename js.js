//show hide nav on mobile

function showHideMobileNav() {
   var element = document.getElementById("myTopnav");
   element.classList.toggle("showNav");
   var element = document.getElementById("icon");
   element.classList.toggle("changeX");
}




  //fix nav on scroll
window.onscroll = function() {myFunction()};
var mobileLogo = document.getElementById("mobileLogo");
var header = document.getElementById("myTopnav");
var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    mobileLogo.classList.add("makeBlack")
  } else {
    header.classList.remove("sticky");
    mobileLogo.classList.remove("makeBlack")
  }
}

//Slider Test

var slider = tns({
    container: '.my-slider',
    autoHeight: true,
    items: 1,
    swipeAngle: false,
    slideBy: 'page',
    nav: false,
    autoplay: true,
    autoplayButtonOutput:false,
    controlsText: [``, ``]
  });

