const bgMusic = document.getElementById('bgMusic');
const enterBtn = document.getElementById('enterBtn');
const welcome = document.getElementById('welcome');
const musicBtn = document.getElementById('musicBtn');

function playMusic(){
  bgMusic.volume = 0.55;
  bgMusic.play().then(()=>{ musicBtn.textContent = 'Ⅱ'; }).catch(()=>{});
}

enterBtn.addEventListener('click', () => {
  welcome.classList.add('hide');
  playMusic();
});

musicBtn.addEventListener('click', () => {
  if(bgMusic.paused){ playMusic(); }
  else { bgMusic.pause(); musicBtn.textContent = '♪'; }
});

const eventDate = new Date('2026-07-04T16:30:00-06:00').getTime();
function updateCountdown(){
  const now = Date.now();
  const diff = Math.max(eventDate - now, 0);
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById('days').textContent = String(days).padStart(2,'0');
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
},{threshold:0.18});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
