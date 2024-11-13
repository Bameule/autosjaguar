document.addEventListener('DOMContentLoaded', function() {
    // Slider
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    if (sliderWrapper && prevButton && nextButton) {
        let index = 0;
        const items = document.querySelectorAll('.cuadro');
        const totalItems = items.length;

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

            window.addEventListener('resize', function() {
                updateSlider(); // Actualizar el slider al redimensionar la ventana
            });

            updateSlider();
        }
    }

    // Dropdown Menu
    const dropdown = document.querySelector('.menu-desplegable .dropdown');
    const dropdownContent = document.querySelector('.menu-desplegable .dropdown-content');

    if (dropdown && dropdownContent) {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownContent.classList.toggle('show');
        });

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
            event.stopPropagation();
            navegador.classList.toggle("active");
        });
        
        window.addEventListener('click', function(event) {
            if (!menuIcon.contains(event.target) && !navegador.contains(event.target)) {
                navegador.classList.remove("active");
            }
        });
    }
});