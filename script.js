/* ============================================================
   script.js – HBD Project Full Upgrade
   Handles: sections, particles, gift, confetti, music toggle
   ============================================================ */

// ── AOS ────────────────────────────────────────────────────
AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });

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

  const box = document.getElementById('giftBox');
  box.classList.add('open');

  // First confetti burst
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.55 },
    colors: ['#ff4d8d', '#ff85b3', '#ff3cac', '#ffffff', '#ffaacc'],
  });

  // Second burst with delay
  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      angle: 60,
      origin: { x: 0.1, y: 0.55 },
      colors: ['#ff4d8d', '#ffd6e7', '#ffffff'],
    });
    confetti({
      particleCount: 80,
      spread: 70,
      angle: 120,
      origin: { x: 0.9, y: 0.55 },
      colors: ['#ff4d8d', '#ffd6e7', '#ffffff'],
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
    colors: ['#ff4d8d', '#ff85b3', '#ff3cac'],
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
      hue:   330 + Math.random() * 30,
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

// ── MUSIC TOGGLE ───────────────────────────────────────────
(function initMusic() {
  const btn = document.getElementById('music-btn');
  if (!btn) return;

  // Simple ambient audio using Web Audio API
  let audioCtx  = null;
  let playing   = false;
  let gainNode  = null;
  let oscillators = [];

  function createAmbient() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gainNode.connect(audioCtx.destination);

    // Soft pad chord — C major: C4-E4-G4-B4
    const freqs = [261.63, 329.63, 392.00, 493.88, 523.25];
    freqs.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      const oscGain = audioCtx.createGain();
      oscGain.gain.setValueAtTime(0.04 + (i === 0 ? 0.04 : 0), audioCtx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(gainNode);
      osc.start();
      oscillators.push(osc);
    });
  }

  function startMusic() {
    if (!audioCtx) createAmbient();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    gainNode.gain.setTargetAtTime(0.06, audioCtx.currentTime, 0.5);
    playing = true;
    btn.textContent = '🔊';
    btn.classList.add('playing');
    btn.title = 'Matikan musik';
  }

  function stopMusic() {
    if (audioCtx) {
      gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.4);
    }
    playing = false;
    btn.textContent = '🎵';
    btn.classList.remove('playing');
    btn.title = 'Putar musik';
  }

  btn.addEventListener('click', () => {
    if (playing) stopMusic();
    else startMusic();
  });
})();
