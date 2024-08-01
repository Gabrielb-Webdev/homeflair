// Inicializar AOS
AOS.init({
    duration: 1200,
    once: true
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación de formulario
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensaje enviado correctamente.');
});
