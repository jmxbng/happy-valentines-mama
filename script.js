function checkPassword() {
    const input = document.getElementById('password-input').value;
    const lock = document.getElementById('lock-screen');
    const envelope = document.getElementById('envelope-overlay');
    const errorMsg = document.getElementById('error-msg');

    const correctDate = "11/26/2004"; 

    if (input === correctDate || input.toLowerCase() === "forever") {
        lock.style.opacity = "0";
        setTimeout(() => {
            lock.style.display = 'none';
            envelope.style.display = 'flex';
        }, 600);
    } else {
        errorMsg.style.display = 'block';
        document.querySelector('.glass-card').style.animation = 'shake 0.4s';
        setTimeout(() => document.querySelector('.glass-card').style.animation = '', 400);
    }
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password-input');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    this.style.opacity = type === 'password' ? '0.5' : '1';
});

function openEnvelope() {
    const envelope = document.getElementById('main-envelope');
    const overlay = document.getElementById('envelope-overlay');
    const content = document.getElementById('main-content-wrapper');

    envelope.classList.add('open');
    setTimeout(() => {
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
            content.style.display = "block";
            setInterval(createHeart, 400);
        
    const music = document.getElementById('bg-music');
            if (music) {
                music.currentTime = 170;   // Halimbawa: simulan sa 2:00 (120 seconds)
                music.volume = 0.25;
                music.play().catch(e => console.log("Error:", e));
            }
        }, 800);
    }, 700);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.moment').forEach(m => observer.observe(m));

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        bottom: -20px;
        color: #9e001c;
        font-size: ${Math.random() * 20 + 10}px;
        z-index: 1000;
        pointer-events: none;
        filter: drop-shadow(0 0 5px rgba(158, 0, 28, 0.5));
        animation: floatUp 5s linear forwards;
    `;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

const message = "Mama, every day with you is a reminder of how lucky I am to be your child. Thank you for your quiet strength when I needed comfort, for your loud laughter when we were happy, and for the endless love that has never once wavered. I promise to love you more today than I did yesterday, to take care of you the way you've always taken care of me, and to make you proud in every way I can. You are my greatest blessing, my home, my safe place, and my forever reason to keep going. No matter where life takes us, my heart will always come back to you. You are my beginning, my strength, and my always.";
let index = 0;
let hasTyped = false;

function typeWriter() {
    if (index < message.length) {
        document.getElementById("typing-text").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 35); 
    }
}

const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped) {
            hasTyped = true;
            typeWriter();
        }
    });
}, { threshold: 0.5 });

document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("typing-container");
    if (target) typingObserver.observe(target);
});

const styleSheet = document.createElement('style');
styleSheet.innerHTML = `@keyframes floatUp {
    0% { transform: translateY(0) rotate(0); opacity: 1; }
    100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(styleSheet);
document.getElementById('music-toggle').addEventListener('click', function() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
        this.textContent = '🎵 On';
    } else {
        music.pause();
        this.textContent = '🎵 Mute';
    }
});