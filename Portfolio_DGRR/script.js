// Efecto de desplazamiento suave
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.getElementById(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Botón "Volver arriba"
const volverArriba = document.querySelector('.volver-arriba');

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    volverArriba.style.display = 'block';
  } else {
    volverArriba.style.display = 'none';
  }
});

volverArriba.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menú de redes sociales
const redesSocialesMenu = document.querySelector('.redes-sociales-menu button');
const redesSocialesList = document.querySelector('.redes-sociales-menu ul');

redesSocialesMenu.addEventListener('click', function() {
  redesSocialesList.classList.toggle('active');
});

// Formulario de contacto (se requiere implementar la lógica de validación y envío de datos)
const contactoForm = document.querySelector('.contacto form');

contactoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Implementar la validación de datos
  // Implementar el envío de datos mediante AJAX
  // Mostrar mensaje de confirmación o error
});
