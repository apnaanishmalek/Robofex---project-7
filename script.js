var navVar = document.querySelector('.navbar');
var lastScroll = window.pageYOffset;

window.onscroll = function() {
    var currentScroll = window.pageYOffset;

    if(lastScroll>currentScroll) {
        navVar.style.top = "0";
        navVar.style.opacity = "1";
    }

    else {
        navVar.style.top = "-100px";
        navVar.style.transition = ".4s linear";
        navVar.style.opacity = "0";
    }

    currentScroll=lastScroll;

}