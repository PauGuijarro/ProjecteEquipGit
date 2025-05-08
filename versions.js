document.getElementById('coolBtn').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = '¡Efecto guay activado! 🚀';
    mensaje.classList.add('animated');
    setTimeout(() => mensaje.classList.remove('animated'), 500);
});
