document.addEventListener("DOMContentLoaded", function() {
    const boton = document.querySelector(".button-toggle");
    const menuLinks = document.querySelector(".burger-menu");

    const conocenos = document.querySelector(".conocenos");
    const namesMenu = document.querySelector(".names-menu");

    boton.addEventListener("click", function(){
        menuLinks.classList.toggle("open");
    });

conocenos.addEventListener("mouseover", function(){
        namesMenu.classList.add("open");
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

// Máquina de escribir

function typeWriter(element, text, speed = 50, callback) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (typeof callback === "function") {
      callback();
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("titulo");
  const intro = document.getElementById("intro-text");

  typeWriter(titulo, "El equipo Loop Rebels", 50, () => {
    typeWriter(
      intro,
      "En Loop Rebels no solo escribimos código, creamos ideas que funcionan.",
      30
    );
  });
});