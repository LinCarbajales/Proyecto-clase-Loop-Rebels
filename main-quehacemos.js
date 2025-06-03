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