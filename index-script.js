console.log("Hola, mundo");


document.addEventListener("DOMContentLoaded", function() {
    const boton = document.querySelector(".button-toggle");
    const menuLinks = document.querySelector(".burger-menu");

    boton.addEventListener("click", function(){
        menuLinks.classList.toggle("open");
    });

window.addEventListener("resize", function () {
        if (window.innerWidth > 768 && menuLinks.classList.contains("open")) {
            menuLinks.classList.remove("open");
        }
    });
})