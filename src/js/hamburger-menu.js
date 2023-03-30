const openButton = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".hamburger-menu");
const hamMenuClose = document.querySelector(".hamburger-menu__close");
const hamburgerBody = document.body;

openButton.addEventListener("click", e => {
        e.preventDefault();
        hamMenu.classList.add("hamburger-menu-active");
        hamburgerBody.classList.add("fancybox-active");
});

hamMenu.addEventListener("click", e => {
        if (e.target == hamMenu || e.target.classList.contains("hamburger-menu__link")) {
            hamMenu.classList.remove("hamburger-menu-active");
            hamburgerBody.classList.remove("fancybox-active");
        }
});

hamMenuClose.addEventListener("click", e => {
        e.preventDefault();
        hamMenu.classList.remove("hamburger-menu-active")
});