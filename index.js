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

const textOne = `Полиночка, с 14 февраля тебя! ❤️`; 
const textTwo = `И мы в тебя влюблены тоже! 💜`; 

const writingElementOne = document.getElementById('writing-text-one');
const writingElementTwo = document.getElementById('writing-text-two');

let i = 0;
let j = 0;

function typeWriterOne() {
    if (i < textOne.length) {
        writingElementOne.innerHTML += textOne.charAt(i);
        i++;
        setTimeout(typeWriterOne, 150);
    } 
}

function typeWriterTwo() {
    if (j < textTwo.length) {
        writingElementTwo.innerHTML += textTwo.charAt(j);
        j++;
        setTimeout(typeWriterTwo, 150);
    }
}

typeWriterOne();
typeWriterTwo();
