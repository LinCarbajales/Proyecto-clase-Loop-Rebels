document.addEventListener("DOMContentLoaded", function() {
    const boton = document.querySelector(".button-toggle");
    const menuLinks = document.querySelector(".burger-menu");

    const conocenos = document.querySelector(".conocenos");
    const namesMenu = document.querySelector(".names-menu");

    boton.addEventListener("click", function(){
        menuLinks.classList.toggle("open");
    });

    conocenos.addEventListener("click", function(){
        namesMenu.classList.toggle("open");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768 && menuLinks.classList.contains("open")) {
            menuLinks.classList.remove("open");
            namesMenu.classList.remove("open");
        }
    });
});