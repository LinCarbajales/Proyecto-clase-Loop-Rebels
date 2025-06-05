// main.js

document.addEventListener("DOMContentLoaded", () => {
    const testimonios = document.querySelectorAll(".comentario");

    const observador = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            //Delay en cascada
            setTimeout(() => {
                entry.target.classList.add("visible") ; 
            }, index * 200); //200ms entre cada testimonio
            //solo animar una vez
            observador.unobserve(entry.target);
        }
    });
    }, {
    threshold: 0.1 // el 10% del elemento visible dispara la animación
    });

    testimonios.forEach(comentario => {
    observador.observe(comentario);
    });
});


//para que la imagen aparezca en la pantalla con efecto de animación//
window.addEventListener("load", () => {
    document.querySelectorAll("img").forEach(img => {
    img.classList.add("visible");
    });
});


//Header - Hamburguesa
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


// 🧩 INICIO DEL FORMULARIO VALIDADO EN JS

// Seleccionamos el formulario por su ID
const formulario = document.querySelector("#form-contacto");

// Evento que se dispara cuando se intenta enviar el formulario
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // ⛔ Evita que se recargue la página

  // Tomamos los valores ingresados por el usuario
    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensaje = document.querySelector("#mensaje").value.trim();

  // Verificamos que no estén vacíos
    if (!nombre || !email || !mensaje) {
    alert("⚠️ Por favor, completa todos los campos.");
    return; // 🚫 No continúa si falta algo
    }

  // Opcional: validación muy básica de email
    if (!email.includes("@") || !email.includes(".")) {
    alert("⚠️ Por favor, ingresa un correo electrónico válido.");
    return;
    }

  // ✅ Si todo está bien, mostramos mensaje y limpiamos
    alert("✅ ¡Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto pronto.");
  formulario.reset(); // 🧼 Limpia el formulario
});

// 🧩 FIN DEL FORMULARIO VALIDADO EN JS