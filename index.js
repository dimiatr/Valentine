const starsCount = 400;
for (let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 1 + 1}s`;
    document.body.appendChild(star);
}

function createSnowflake() {
    const globe = document.getElementById('snowGlobe');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${2 + Math.random() * 3}s`;
    globe.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
}

setInterval(createSnowflake, 200);

const text = `Полиночка, с 14 февраля тебя !<3`; 
let i = 0;
const writingElement = document.getElementById('writing-text');

function typeWriter() {
    if (i < text.length) {
        writingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150); // Задержка между буквами
    }
}

typeWriter();