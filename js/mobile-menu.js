(() => {
    const refs = {
        openMenuBtn: document.querySelector(".menu-button"),
        closeMenuBtn: document.querySelector(".mob-menu__exit-button"),
        menu: document.querySelector(".mob-menu"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-open");
    }
})();
