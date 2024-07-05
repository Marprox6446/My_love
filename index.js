document.addEventListener('DOMContentLoaded', () => {
    const poemContainer = document.querySelector('.poem-container');
    const loveImage = document.querySelector('.love-image');

    const fadeInPoem = () => {
        const lines = document.querySelectorAll('.line');
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, index * 300); // Añadir un ligero retraso entre cada línea
        });
    };

    const fadeInImage = () => {
        loveImage.style.opacity = '1';
        loveImage.style.transform = 'scale(1) rotate(0deg)';
    };

    const startAnimations = () => {
        setTimeout(fadeInPoem, 500); // Iniciar animación del poema después de 500ms
        setTimeout(fadeInImage, 1500); // Iniciar animación de la imagen después de 1500ms
    };

    poemContainer.style.opacity = '1'; // Mostrar el contenedor del poema al cargar la página
    startAnimations();
});
