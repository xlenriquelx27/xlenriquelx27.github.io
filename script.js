function createBrokenHeart() {
    const container = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    
    // Usamos el emoji de corazón roto
    heart.innerText = '💔'; 
    heart.classList.add('broken-heart');
    
    // Posición horizontal aleatoria
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Tamaño aleatorio entre 15px y 35px
    const size = Math.random() * 20 + 15;
    heart.style.fontSize = size + 'px';
    
    // Duración de caída aleatoria (velocidad)
    const duration = Math.random() * 3 + 2; // entre 2 y 5 segundos
    heart.style.animationDuration = duration + 's';
    
    // Opacidad inicial aleatoria para dar profundidad
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    
    container.appendChild(heart);
    
    // Eliminar el corazón del DOM después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Generar un nuevo corazón cada 200ms
setInterval(createBrokenHeart, 200);