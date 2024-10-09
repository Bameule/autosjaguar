document.addEventListener('DOMContentLoaded', function() {
    // Slider
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    // Solo ejecutar si los elementos del slider existen en la página
    if (sliderWrapper && prevButton && nextButton) {
        let index = 0;
        const items = document.querySelectorAll('.cuadro');
        const totalItems = items.length;

        // Verificar si hay items antes de continuar
        if (totalItems > 0) {
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
        }
    }

    // Dropdown Menu
    const dropdown = document.querySelector('.menu-desplegable .dropdown');
    const dropdownContent = document.querySelector('.menu-desplegable .dropdown-content');

    if (dropdown && dropdownContent) {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
            dropdownContent.classList.toggle('show');
        });

        // Cerrar el menú desplegable si el usuario hace clic fuera de él
        window.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }

    // Menú en móviles
    const menuIcon = document.querySelector('.menu-icon');
    const navegador = document.getElementById("navegador");

    if (menuIcon && navegador) {
        menuIcon.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
            navegador.classList.toggle("active"); // Alterna la clase 'active' para mostrar el menú
        });
    }
});