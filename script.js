/* ============================================================
   script.js – HBD Project Full Upgrade
   Handles: sections, particles, gift, confetti, setupConfig
   ============================================================ */

// ── CONFIGURATION ──────────────────────────────────────────
const CONFIG = {
  name: "[nama]",           // Ganti dengan nama yang berulang tahun
  nickname: "[nama]",       // Nama panggilan untuk teks tertentu
  date: "May 7",             // Ganti dengan tanggal lahir (e.g. "January 31")
  monthYear: "May 2026",     // Ganti untuk judul kalender
  specialDay: 7,             // Angka tanggal lahir untuk kalender
};

// ── AOS ────────────────────────────────────────────────────
AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });

// ── SETUP CONFIG ───────────────────────────────────────────
function setupConfig() {
  document.title = `Happy Birthday ${CONFIG.name} ✨`;
  
  const userName = document.getElementById('user-name');
  if (userName) userName.innerHTML = `Happy Birthday<br/>${CONFIG.nickname} 🌸`;

  const dateBadge = document.getElementById('date-badge');
  if (dateBadge) dateBadge.textContent = `🎂 ${CONFIG.date} · Special Day`;

  const calTitle = document.getElementById('calendar-title');
  if (calTitle) calTitle.textContent = CONFIG.monthYear;

  const calSpecial = document.getElementById('calendar-special');
  if (calSpecial) calSpecial.textContent = `${CONFIG.specialDay} ❤️`;
}

// Call on load
document.addEventListener('DOMContentLoaded', setupConfig);

// ── STATE ──────────────────────────────────────────────────
let currentSection = 'opening';
let giftOpened     = false;

// Track section order for dot navigation
const sectionOrder = ['opening', 'gift', 'heart', 'closing'];

// ── SECTION NAVIGATION ─────────────────────────────────────
function goToSection(id) {
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
    s.style.animation = '';
  });

  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('active');
  currentSection = id;

  // Animate in
  el.style.animation = 'fadeSlideUp 0.55s cubic-bezier(.4,0,.2,1) forwards';
  setTimeout(() => { el.style.animation = ''; }, 600);

  // Update dots
  document.querySelectorAll('.dot').forEach(d => {
    d.classList.toggle('active', d.dataset.section === id);
  });

  // Re-run AOS for newly visible elements
  AOS.refresh();

  // Scroll to top just in case
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Backward compat alias
function nextSection(id) { goToSection(id); }

// ── GIFT ───────────────────────────────────────────────────
function openGift() {
  if (giftOpened) return;
  giftOpened = true;

  const giftSection = document.getElementById('gift');
  const box = document.getElementById('giftBox');
  
  // Add impact class
  giftSection.style.animation = 'none';
  setTimeout(() => { giftSection.style.animation = 'sectionShake 0.4s ease'; }, 10);
  
  box.classList.add('open');

  // First confetti burst
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.55 },
    colors: ['#a855f7', '#c084fc', '#d8b4fe', '#ffffff', '#e9d5ff'],
  });

  // Second burst with delay
  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      angle: 60,
      origin: { x: 0.1, y: 0.55 },
      colors: ['#a855f7', '#e9d5ff', '#ffffff'],
    });
    confetti({
      particleCount: 80,
      spread: 70,
      angle: 120,
      origin: { x: 0.9, y: 0.55 },
      colors: ['#a855f7', '#e9d5ff', '#ffffff'],
    });
  }, 300);

  setTimeout(() => goToSection('heart'), 1500);
}

function specialDay() {
  document.getElementById('danaSurprise').classList.remove('hidden');
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 },
    colors: ['#a855f7', '#c084fc', '#d8b4fe'],
  });
}

// ── PARTICLES ──────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  function createParticle() {
    return {
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     0.5 + Math.random() * 1.8,
      dx:   (Math.random() - 0.5) * 0.3,
      dy:   -0.15 - Math.random() * 0.25,
      alpha: 0.1 + Math.random() * 0.5,
      hue:   260 + Math.random() * 30,
    };
  }

  for (let i = 0; i < 80; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 75%, ${p.alpha})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
      p.alpha -= 0.0008;

      if (p.y < -10 || p.alpha <= 0) {
        Object.assign(p, createParticle(), { y: H + 10 });
      }
    }
    requestAnimationFrame(draw);
  }

  draw();
})();
