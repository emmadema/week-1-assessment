


window.addEventListener("DOMContentLoaded", setBodyGradientOnLoad);

function setBodyGradientOnLoad() {
    var heightPx = window.innerHeight;
    var gradientStop = Math.floor( heightPx * 0.3 );
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = "linear-gradient(to bottom, #6283a1, #4b7193  " + gradientStop + "px, white " + gradientStop + "px, white)";
}