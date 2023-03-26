const openButton = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".hamburger-menu");
const hamMenuClose = document.querySelector(".hamburger-menu__close");

    openButton.addEventListener("click", e => {
        e.preventDefault(),
        hamMenu.classList.add("hamburger-menu-active")
    }),
    hamMenu.addEventListener("click", e => {
        if (e.target == hamMenu) {
            hamMenu.classList.remove("hamburger-menu-active")
        }
    }),
    hamMenuClose.addEventListener("click", e => {
        e.preventDefault(),
        hamMenu.classList.remove("hamburger-menu-active")
});