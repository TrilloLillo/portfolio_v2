document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // 1. Cálculo de posición con offset para tu header fijo (h-12)
            const headerOffset = 60;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // 2. Ejecutar el Scroll suave
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // 3. Efecto de "Resaltado de Sistema"
            // Esperamos un poco a que el scroll termine para activar el efecto
            setTimeout(() => {
                targetElement.classList.add('ring-4', 'ring-primary', 'ring-opacity-50', 'transition-all', 'duration-500');
                
                // Quitamos el resaltado después de 1 segundo
                setTimeout(() => {
                    targetElement.classList.remove('ring-4', 'ring-primary', 'ring-opacity-50');
                }, 1000);
            }, 600); 
        }
    });
});