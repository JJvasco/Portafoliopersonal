document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll para el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animación de las habilidades
    const habilidades = document.querySelectorAll('.habilidad');
    habilidades.forEach((habilidad, index) => {
        habilidad.style.animationDelay = `${index * 0.1}s`;
    });

    // Efecto de hover para las cartas interactivas
    const cartas = document.querySelectorAll('.cartas-interactivas');
    cartas.forEach(carta => {
        carta.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
        });
        carta.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
        });
    });

    // Efecto de carga para los proyectos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.proyecto').forEach(proyecto => {
        observer.observe(proyecto);
    });

    // Efecto de escritura para la carta de presentación
    const cartaPresentacion = document.querySelector('.carta');
    if (cartaPresentacion) {
        const parrafos = cartaPresentacion.querySelectorAll('p');
        parrafos.forEach((p, i) => {
            p.style.animationDelay = `${i * 0.3}s`;
        });
    }
});
// Filtrado de proyectos
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover clase active de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Agregar clase active al botón clickeado
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Botón de alternancia de tema - versión mejorada
document.addEventListener('DOMContentLoaded', function() {
    // Crear el botón solo si no existe
    if (!document.querySelector('.theme-toggle')) {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Cambiar tema');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        document.body.appendChild(themeToggle);
        
        // Función para aplicar el tema
        function applyTheme(theme) {
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                themeToggle.setAttribute('data-theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                themeToggle.setAttribute('data-theme', 'light');
            }
        }
        
        // Manejar el click del botón
        themeToggle.addEventListener('click', function() {
            const isDark = document.body.classList.contains('dark-mode');
            applyTheme(isDark ? 'light' : 'dark');
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
        });
        
        // Cargar tema guardado o detectar preferencia del sistema
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (systemPrefersDark) {
            applyTheme('dark');
        }
    }
});