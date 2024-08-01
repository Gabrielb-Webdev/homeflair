// Inicializar AOS
AOS.init();

// Navegación suave
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500);
});

// Validación de formulario
$('form').on('submit', function (e) {
    e.preventDefault();
    alert('Mensaje enviado correctamente.');
});
