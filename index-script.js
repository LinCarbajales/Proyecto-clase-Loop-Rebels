console.log("Hola, mundo");


document.addEventListener("DOMContentLoaded", function() {
    const boton = document.querySelector(".button-toggle");
    const menuLinks = document.querySelector(".menu");

    boton.addEventListener("click", function(){
        menuLinks.classList.toggle("open");
    })
})

document.querySelectorAll('.ficha').forEach(ficha => {
  ficha.addEventListener('click', () => {
    ficha.classList.toggle('flipped');
  });
});

document.querySelectorAll('.redes a').forEach(red => {
  red.addEventListener('click', e => {
    e.stopPropagation();  // Detiene que el click suba al padre
  });
});

document.querySelectorAll('.btn-flip').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const ficha = btn.closest('.ficha');
    ficha.classList.toggle('is-flipped');
  });
});