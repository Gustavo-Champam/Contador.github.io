const startDate = new Date("2024-10-02T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("years").textContent = String(years).padStart(2, "0");
  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  document.getElementById("box-years").style.display = years > 0 ? 'inline-block' : 'none';
}

setInterval(updateTimer, 1000);
updateTimer();

// Música
const music = document.getElementById("music");
const toggleMusicBtn = document.getElementById("toggleMusic");
let isPlaying = false;

toggleMusicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.muted = false;
    music.play();
    toggleMusicBtn.textContent = "Pausar Música ⏸️";
  } else {
    music.pause();
    toggleMusicBtn.textContent = "Ativar Música 🎵";
  }
  isPlaying = !isPlaying;
});

// Carrossel + legenda romântica com efeito de digitação
let current = 0;
const fadeImages = document.querySelectorAll(".carousel-image");
const legendaEl = document.getElementById("legenda");
const legendas = [
  "Meu eterno amor...",
  "Seu sorriso é meu lar.",
  "Eu te amo muito meu amor",
  "Você é meu MUNDO",
  "A melhor namorada, a mais perfeita e bela",
  "Eu te amo muitão de muitão",
  "Com você, tudo é mais bonito.",
  "Cada dia contigo é incrível",
  "Te amo mais que ontem e menos que amanhã."
];

function typeWriter(text, element, i = 0) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, element, i + 1), 40);
  }
}

function showSlide(index) {
  fadeImages.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });

  legendaEl.textContent = "";
  if (legendas[index]) {
    typeWriter(legendas[index], legendaEl);
  }
}

function nextSlide() {
  current = (current + 1) % fadeImages.length;
  showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 4000);

// Corações flutuando
const heartsContainer = document.getElementById("heartsContainer");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 800);
