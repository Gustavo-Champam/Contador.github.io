const startDate = new Date("2024-08-02T00:00:00");

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
