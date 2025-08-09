window.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('contrasena');
    const eyeSpan = passwordInput.parentElement.querySelector('span[style*="cursor:pointer"]');
    const eyeIcon = eyeSpan ? eyeSpan.querySelector('img[alt="Mostrar/Ocultar"]') : null;
    let visible = false;

    if (eyeIcon && passwordInput) {
        eyeIcon.addEventListener('click', function() {
            visible = !visible;
            passwordInput.type = visible ? 'text' : 'password';
            eyeIcon.src = visible
                ? 'https://cdn-icons-png.flaticon.com/512/159/159604.png'
                : 'https://cdn-icons-png.flaticon.com/512/709/709612.png';
        });
    }
});