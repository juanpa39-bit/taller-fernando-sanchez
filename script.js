document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.menu ul');
    const links = document.querySelectorAll('.menu a');
    const form = document.getElementById('contact-form');
    const status = document.querySelector('.form-status');

    if (toggle && navList) {
        toggle.addEventListener('click', () => {
            navList.classList.toggle('open');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('open');
            });
        });
    }

    if (form && status) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombre = form.nombre.value.trim();
            const telefono = form.telefono.value.trim();
            const mensaje = form.mensaje.value.trim();
            const texto = `Hola, quiero consultar por un turno.\nNombre: ${nombre}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`;
            const numeroWhatsApp = '+5492268535020';
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank', 'noopener,noreferrer');
            status.textContent = 'Redirigiendo a WhatsApp...';
            form.reset();
        });
    }
});
