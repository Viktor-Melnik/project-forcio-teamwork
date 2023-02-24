// логіка для секції header. Кодить Віктор

const burger = document.querySelector(".main-header__burger");
const nav = document.querySelector(".main-header__nav");


burger.addEventListener("click", function() {
    this.classList.toggle("main-header__burger--active");

    nav.classList.toggle("main-header__nav--active");
})

window.onresize = viewport;

function viewport() {
    if (document.documentElement.clientWidth > 480) {
        burger.classList.remove("main-header__burger--active");
        nav.classList.remove("main-header__nav--active");
    }
}