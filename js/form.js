document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    // Validacion inputs
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombreRegex.test(nombre)) {
        alert('El nombre solo puede contener letras.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    if (mensaje.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres.');
        return;
    }

    // Validacion radio 
    const radioSeleccionado = document.querySelector('input[name="opcion_radio"]:checked');
    if (!radioSeleccionado) {
        alert('Por favor, selecciona cómo nos conociste.');
        return;
    }

    // Enviar form post validacion
    event.target.submit();
});
