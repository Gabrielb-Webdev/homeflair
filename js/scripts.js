// Inicializar AOS
AOS.init({
    duration: 1200,
    once: true
});

// Inicializar Particles.js
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json', function() {
    console.log('callback - Particles.js config loaded');
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Ajuste del desplazamiento
        const offset = 70; // Ajustar según el tamaño de la navbar
        const target = document.querySelector(this.getAttribute('href'));
        const topPosition = target.offsetTop - offset;
        
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    });
});

// Loader
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }, 1000); // Mantener el loader visible por 1 segundo
});

// Mo.js Animación de Entrada
const burst = new mojs.Burst({
    parent: '#hero-title',
    radius: { 0: 100 },
    count: 10,
    children: {
        shape: 'circle',
        radius: 20,
        fill: { 'cyan': 'yellow' },
        strokeWidth: 5,
        duration: 2000,
        easing: 'cubic.out',
    }
});

document.addEventListener('DOMContentLoaded', () => {
    burst.replay();
});

// Mo.js Animación de Botón
const buttonAnimation = new mojs.Burst({
    parent: '#contact-btn',
    radius: { 0: 100 },
    count: 20,
    children: {
        shape: 'circle',
        radius: { 4: 0 },
        fill: [ 'red', 'yellow', 'cyan', 'pink' ],
        degreeShift: 'rand(-90, 90)',
        duration: 1500
    }
});

document.getElementById('contact-btn').addEventListener('click', function() {
    buttonAnimation.replay();
});

// Validación de formulario
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensaje enviado correctamente.');
});

// Carga diferida de imágenes
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback para navegadores antiguos
        let lazyLoadThrottleTimeout;
        function lazyLoad() {
            if (lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
            }    

            lazyLoadThrottleTimeout = setTimeout(function() {
                let scrollTop = window.pageYOffset;
                lazyImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyImages.length == 0) { 
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationChange", lazyLoad);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationChange", lazyLoad);
    }
});
