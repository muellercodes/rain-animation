function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    const size = Math.random() * 2 + 1; // More variability in size
    raindrop.style.width = `${size}px`;
    raindrop.style.height = `${size * 10}px`; // Keeping the aspect ratio according to size
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    raindrop.style.opacity = Math.random() * 0.5 + 0.5;
    raindrop.style.transform = `scale(${Math.random()})`;

    // Wind effect
    const wind = Math.random() > 0.5 ? 1 : -1;
    raindrop.style.animationName = 'fall';
    raindrop.style.animationTimingFunction = 'linear';
    raindrop.style.animationIterationCount = 'infinite';
    raindrop.style.transform = `translateX(${wind * 10 * Math.random()}px)`;

    document.getElementById('rain').appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 2000); // Remove raindrop after it falls
}

setInterval(createRaindrop, 50); // Increase the rate of raindrops

// Adding keyframes for the wind effect
document.styleSheets[0].insertRule(`
@keyframes fall {
    to {
        transform: translateY(100vh) translateX(${wind * 10 * Math.random()}px);
    }
}`, 0);
