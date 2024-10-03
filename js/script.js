document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let index = 0;
    const items = document.querySelectorAll('.cuadro');
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth;
    
    function updateSlider() {
        const offset = -index * itemWidth;
        sliderWrapper.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', function() {
        index = (index > 0) ? index - 1 : totalItems - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', function() {
        index = (index < totalItems - 1) ? index + 1 : 0;
        updateSlider();
    });

    // Inicializar el slider
    updateSlider();
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.menu-desplegable .dropdown');
    const dropdownContent = document.querySelector('.menu-desplegable .dropdown-content');

    dropdown.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Cerrar el menú desplegable si el usuario hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

function MiFuncion() {
    // aquí se define el ID del elemento que va a tomar la clase
  var x = document.getElementById("navegador");
  if (x.className === " ") {
      // esta es la clase que se agrega al elemento con eo id="navegador"
    x.className += "responsive";
  } else {
    x.className = " ";
  }
}