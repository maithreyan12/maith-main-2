/** Footer line “Created by …” — change only this if your display name changes. */
const PORTFOLIO_AUTHOR_DISPLAY = "Maithreyan D";

(function applyFooterAuthor() {
  const el = document.querySelector(".site-footer__credit");
  if (el) el.textContent = `Created by ${PORTFOLIO_AUTHOR_DISPLAY}`;
})();

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  // also toggle the container so the circular background can animate
  const container = document.querySelector('.hamburger-menu');
  if (container) container.classList.toggle('open');
}

// Smooth-scroll handler for anchor links and elements with `data-scroll`.
document.addEventListener('click', function (e) {
  // Handle elements that specify a scroll target via data-scroll
  const scrollEl = e.target.closest('[data-scroll]');
  if (scrollEl) {
    const selector = scrollEl.getAttribute('data-scroll');
    if (selector) {
      const target = document.querySelector(selector);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // If the hamburger menu is open, close it after clicking
        const menu = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        if (menu && menu.classList.contains('open')) {
          menu.classList.remove('open');
          if (icon) icon.classList.remove('open');
        }
        return;
      }
    }
  }

  // Smooth scroll for same-page anchor links (<a href="#id">)
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor) {
    const href = anchor.getAttribute('href');
    if (href && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close hamburger menu if open
        const menu = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        if (menu && menu.classList.contains('open')) {
          menu.classList.remove('open');
          if (icon) icon.classList.remove('open');
        }
      }
    }
  }
});

// Touch / tap feedback: ripple + scale for interactive elements
(function attachTapFeedback() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // keep it simple for reduced-motion

  const selectors = ['.btn', '.menu-links a', '.nav-links a', '.icon', '.hamburger-icon', '.quick-btn'];
  const elements = new Set();
  selectors.forEach(s => document.querySelectorAll(s).forEach(el => elements.add(el)));

  function createRipple(target, x, y) {
    const rect = target.getBoundingClientRect();
    const rx = x - rect.left;
    const ry = y - rect.top;
    const r = document.createElement('span');
    r.className = 'ripple';
    r.style.left = rx + 'px';
    r.style.top = ry + 'px';
    // ensure the target is positioned
    const prevPos = window.getComputedStyle(target).position;
    if (prevPos === 'static') target.style.position = 'relative';
    target.appendChild(r);
    // remove after animation
    setTimeout(() => { try { r.remove(); } catch (e) {} }, 700);
  }

  function onDown(e) {
    const t = e.currentTarget;
    t.classList.add('tapped');
    // create ripple at event point
    const ev = e.touches ? e.touches[0] : e;
    createRipple(t, ev.clientX, ev.clientY);
  }
  function onUp(e) {
    const t = e.currentTarget;
    setTimeout(() => t.classList.remove('tapped'), 160);
  }

  elements.forEach(el => {
    el.classList.add('tap-feedback');
    el.addEventListener('mousedown', onDown);
    el.addEventListener('mouseup', onUp);
    el.addEventListener('mouseleave', onUp);
    el.addEventListener('touchstart', onDown, { passive: true });
    el.addEventListener('touchend', onUp);
  });
})();

// Theme toggle: initialize from localStorage or prefers-color-scheme, persist choice
(function themeToggle() {
  const KEY = 'theme'; // 'light' or 'dark'

  // SVGs used for the toggle (use currentColor)
  const moonSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const sunSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  function applyTheme(theme) {
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');

    // update any toggles that exist
    const toggles = Array.from(document.querySelectorAll('.theme-toggle'));
    toggles.forEach(btn => {
      btn.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
      btn.setAttribute('aria-pressed', theme === 'dark');
    });
  }

  function getInitialTheme() {
    const stored = localStorage.getItem(KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    applyTheme(next);
  }

  // Defer DOM queries until DOM is ready so toggles inserted in HTML are found
  document.addEventListener('DOMContentLoaded', () => {
    const toggles = Array.from(document.querySelectorAll('.theme-toggle'));
    toggles.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
      // ensure aria role
      btn.setAttribute('role', 'button');
      btn.setAttribute('aria-label', 'Toggle theme');
    });

    // initialize
    const initial = getInitialTheme();
    applyTheme(initial);
  });
})();

// Add DOMContentLoaded hook to trigger CSS entrance animations
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  // Parallax / subtle mouse interaction for profile picture
  const picContainer = document.querySelector(".section__pic-container");
  const pic = document.getElementById("profile-pic");
  if (!picContainer || !pic) return;

  function onMove(e) {
    const rect = picContainer.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
    const dy = (e.clientY - cy) / rect.height;
    const tx = dx * 16; // translate range
    const ty = dy * 12;
    const rx = dy * -6; // slight rotate on X
    const ry = dx * 6; // slight rotate on Y
    pic.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  function onLeave() {
    pic.style.transform = "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)";
  }

  picContainer.addEventListener("mousemove", onMove);
  picContainer.addEventListener("mouseleave", onLeave);
  picContainer.addEventListener("touchmove", (ev) => {
    if (ev.touches && ev.touches[0]) onMove(ev.touches[0]);
  }, { passive: true });
  picContainer.addEventListener("touchend", onLeave);
});

// Circle menu button: toggle .menu-links open/close and sync aria state
document.addEventListener('DOMContentLoaded', () => {
  const circle = document.querySelector('.circle-menu');
  const menu = document.querySelector('.menu-links');
  if (!circle) return;

  const overlay = document.querySelector('.menu-overlay');
  let lastFocused = null;

  function getButtonCenter(btn) {
    const r = btn.getBoundingClientRect();
    const x = r.left + r.width / 2 + window.scrollX;
    const y = r.top + r.height / 2 + window.scrollY;
    return { x, y };
  }

  // Toggle both the small menu-links (if present) and the circular overlay
  function setOpen(open) {
    circle.classList.toggle('open', open);
    circle.setAttribute('aria-expanded', !!open);
    if (menu) menu.classList.toggle('open', open);

    if (overlay) {
      if (open) {
        // Save focus so we can restore it when closed
        lastFocused = document.activeElement;
        const c = getButtonCenter(circle);
        // set CSS variables the stylesheet will use for clip origin
        overlay.style.setProperty('--overlay-x', c.x + 'px');
        overlay.style.setProperty('--overlay-y', c.y + 'px');
        overlay.classList.add('open');
        // move focus to the first focusable item inside overlay for accessibility
        const focusable = overlay.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
        if (focusable) focusable.focus();
      } else {
        overlay.classList.remove('open');
        // restore focus
        try { if (lastFocused && lastFocused.focus) lastFocused.focus(); } catch (e) {}
        lastFocused = null;
      }
    }
  }

  circle.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = circle.classList.contains('open') || (overlay && overlay.classList.contains('open'));
    setOpen(!isOpen);
  });

  // Close overlay on Escape
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') setOpen(false);
  });

  // Close overlay when a link inside it is clicked
  if (overlay) {
    overlay.addEventListener('click', (ev) => {
      const a = ev.target.closest('a');
      if (a) {
        // allow normal navigation but close overlay
        setOpen(false);
      }
    });
  }
});

// Quick circular menu: active-state + smooth scroll + keyboard support
document.addEventListener('DOMContentLoaded', () => {
  const buttons = Array.from(document.querySelectorAll('.quick-btn'));
  if (!buttons.length) return;

  // smooth scroll handled globally by data-scroll listener
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSel = btn.getAttribute('data-scroll');
      const target = targetSel && document.querySelector(targetSel);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Active section highlighting
  const sectionMap = new Map();
  buttons.forEach(btn => {
    const sel = btn.getAttribute('data-scroll');
    const section = sel && document.querySelector(sel);
    if (section) sectionMap.set(section, btn);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const btn = sectionMap.get(entry.target);
      if (!btn) return;
      if (entry.isIntersecting) {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sectionMap.forEach((_, section) => observer.observe(section));
});

// Add interactive 3D smoky parallax for the smoky pseudo-element
(function attachSmokeParallax() {
  const containers = document.querySelectorAll('#profile .section__pic-container, #about .section__pic-container');
  if (!containers.length) return;

  containers.forEach(container => {
    let raf = null;
    let last = { tx: 0, ty: 0, rx: 0, ry: 0, s: 1 };

    function updateVars(nowValues) {
      container.style.setProperty('--tx', nowValues.tx + 'px');
      container.style.setProperty('--ty', nowValues.ty + 'px');
      container.style.setProperty('--rx', nowValues.rx + 'deg');
      container.style.setProperty('--ry', nowValues.ry + 'deg');
      container.style.setProperty('--s', nowValues.s);
    }

    function schedule(values) {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        updateVars(values);
        raf = null;
      });
    }

    function onMove(e) {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] && e.touches[0].clientX) || cx;
      const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] && e.touches[0].clientY) || cy;
      const dx = (clientX - cx) / rect.width; // roughly -0.5..0.5
      const dy = (clientY - cy) / rect.height;

      // Map to transform values (tweak ranges here)
      const tx = Math.max(-18, Math.min(18, dx * 36));
      const ty = Math.max(-12, Math.min(12, dy * 24));
      const rx = Math.max(-8, Math.min(8, -dy * 12));
      const ry = Math.max(-8, Math.min(8, dx * 12));
      const s = 1 + Math.min(0.06, (Math.abs(dx) + Math.abs(dy)) * 0.03);

      last = { tx, ty, rx, ry, s };
      schedule(last);
    }

    function onLeave() {
      last = { tx: 0, ty: 0, rx: 0, ry: 0, s: 1 };
      schedule(last);
    }

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
    container.addEventListener('touchmove', (ev) => {
      onMove(ev.touches ? ev.touches[0] : ev);
    }, { passive: true });
    container.addEventListener('touchend', onLeave);
  });
})();

/* Short, lightweight 3D-like particle system used for word bursts.
   Creates a single full-screen canvas and spawns short-lived particles
   positioned at a given x,y page coordinate. Uses perspective scaling
   to give a 3D feel. Respects prefers-reduced-motion. */
(function shortParticles() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.left = '0';
  canvas.style.top = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1300';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  let lastTime = 0;

  // read particle color from CSS variable so theme controls particle appearance
  const cssParticleColor = (getComputedStyle(document.documentElement).getPropertyValue('--particle-color') || '').trim() || 'rgba(0,0,0,0.75)';

  function rand(min, max) { return Math.random() * (max - min) + min; }

  class P {
    constructor(x, y, color) {
      // 3D-like coordinates: z from 0 (near) to 1 (far)
      this.x = x;
      this.y = y;
      this.z = rand(0.02, 0.9);
      const spread = 40 + (1 - this.z) * 70; // closer => larger spread
      const ang = rand(0, Math.PI * 2);
      const speed = rand(80, 280) * (1 - this.z);
      this.vx = Math.cos(ang) * speed;
      this.vy = Math.sin(ang) * speed * 0.6 - rand(10, 60); // slight upward bias
      this.vz = rand(-0.2, 0.2);
      this.life = rand(420, 980); // ms
      this.age = 0;
      this.size = rand(2, 6) * (1 - this.z) + 1;
      this.color = color || cssParticleColor;
    }
    step(dt) {
      this.age += dt;
      if (this.age > this.life) return false;
      // simple motion
      const t = dt / 1000;
      this.x += this.vx * t;
      this.y += this.vy * t;
      this.z += this.vz * t * 0.3;
      // gravity-like slow down
      this.vy += 80 * t * (0.2 + this.z);
      return true;
    }
    draw(ctx) {
      const perspective = 600; // larger => less perspective
      const scale = 1 / (1 + (1 - this.z) * 0.8);
      const s = this.size * scale;
      ctx.beginPath();
      ctx.fillStyle = this.color.replace(/,\s*?0?\.?\d*\)$/, ', 0.9)');
      ctx.globalCompositeOperation = 'lighter';
      ctx.arc(this.x, this.y, s, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function spawn(x, y, opts) {
    const color = opts && opts.color ? opts.color : cssParticleColor;
    const count = opts && opts.count ? opts.count : Math.round(rand(8, 18));
    for (let i = 0; i < count; i++) particles.push(new P(x, y, color));
  }

  function frame(t) {
    if (!lastTime) lastTime = t;
    const dt = Math.min(40, t - lastTime);
    lastTime = t;
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      if (!p.step(dt)) {
        particles.splice(i, 1);
        continue;
      }
      p.draw(ctx);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // expose spawn globally for other code to call
  window.__spawnParticles = function (pageX, pageY, opts) {
    // convert page coords to canvas-local coords
    const rect = canvas.getBoundingClientRect();
    const x = pageX - rect.left - window.scrollX;
    const y = pageY - rect.top - window.scrollY;
    spawn(x, y, opts);
  };
})();

// Rotating/blinking title text (e.g., "Maithreyan D")
(function rotatingTitle() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const title = document.querySelector('.title');
  const logos = document.querySelectorAll('.logo');
  if (!title) return;

  const names = [
    'Maithreyan D',
    'Maithreyan - Dev',
    'MG',
  ];

  // Ensure starting value is in the list
  if (!names.includes(title.textContent.trim())) names.unshift(title.textContent.trim());

  let idx = names.indexOf(title.textContent.trim());
  if (idx < 0) idx = 0;

  const changeInterval = 2500; // ms
  const blinkDuration = 520; // matches CSS animation

  function doChange() {
    const next = (idx + 1) % names.length;
    if (prefersReduced) {
      // No animation — just swap text
      idx = next;
      title.textContent = names[idx];
      logos.forEach(l => l.textContent = names[idx]);
      return;
    }

    // Add blinking class to animate out/in
    title.classList.add('blinking');
    logos.forEach(l => l.classList.add('blinking'));

    // Swap text midway through the blink so it appears when faded in
    setTimeout(() => {
      idx = next;
      title.textContent = names[idx];
      logos.forEach(l => l.textContent = names[idx]);

      // Keep layout fixed: do not toggle nav or profile placement on short names.
      // (Removed layout-shifting code so hamburger/menu/profile remain in place.)
    }, Math.floor(blinkDuration / 2));

    // Remove blinking class after animation completes
    setTimeout(() => {
      title.classList.remove('blinking');
      logos.forEach(l => l.classList.remove('blinking'));
    }, blinkDuration + 30);
  }

  // Start periodic changes
  setInterval(doChange, changeInterval);
})();

// Word-by-word subtitle animator for .section__text__p2
(function subtitleWords() {
  const p2 = document.querySelector('.section__text__p2');
  if (!p2) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // New order per request
  const phrases = [
    'MERN Stack Developer',
    'Content Creator',
    'Full Stack Developer'
  ];

  // Cycle through 4 color classes each time the "Content Creator" phrase is shown.
  let colorIndex = 0;
  const colorsCount = 4;

  // Create dynamic container
  const wrap = document.createElement('span');
  wrap.className = 'dynamic-words';
  p2.textContent = '';
  p2.appendChild(wrap);

  if (prefersReduced) {
    wrap.textContent = phrases.join(' • ');
    return;
  }

  let idx = 0;

  function showPhrase(i) {
    // clear content and any previous color class
    wrap.innerHTML = '';
    for (let c = 0; c < colorsCount; c++) wrap.classList.remove(`cw-${c}`);
    // Apply the current color class to the dynamic words wrapper for all phrases
    // (Keep the separate "Hello, I'm" element stable—it's not part of .section__text__p2.)
    wrap.classList.add(`cw-${colorIndex}`);
    const words = phrases[i].split(' ');
    // create spans first
    const spans = words.map((w, j) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = w;
      // for the 'Full Stack Developer' phrase (index 2), mark fullstack
      if (i === 2) span.classList.add('fullstack');
      wrap.appendChild(span);

      // create smoky layers unless user prefers reduced motion
      if (!prefersReduced) {
        // regular smoke layer
        const smoke = document.createElement('span');
        smoke.className = 'smoke';
        // staggered small per-word delay
        smoke.style.animationDelay = `${j * 140 + 60}ms`;
        smoke.style.animationDuration = `${1600 + (j % 2) * 400}ms`;
        span.appendChild(smoke);

        // additional alt smoke for depth
        const smokeAlt = document.createElement('span');
        smokeAlt.className = 'smoke smoke-alt';
        smokeAlt.style.animationDelay = `${j * 180 + 120}ms`;
        smokeAlt.style.animationDuration = `${2100 + (j % 3) * 500}ms`;
        span.appendChild(smokeAlt);

        // extra ghost burst for fullstack phrase words
        if (i === 2) {
          const ghost = document.createElement('span');
          ghost.className = 'smoke smoke-ghost';
          ghost.style.animationDelay = `${j * 220 + 40}ms`;
          ghost.style.animationDuration = `${1400 + (j % 2) * 300}ms`;
          span.appendChild(ghost);
        }
      }

      return span;
    });

    // animate each word: move right and back, staggered
    spans.forEach((span, wi) => {
      setTimeout(() => {
        span.classList.add('animate');
        // spawn short 3D-like particle burst at the word's position
        if (!prefersReduced && window.__spawnParticles) {
          const rect = span.getBoundingClientRect();
          const x = rect.left + rect.width / 2 + window.scrollX;
          const y = rect.top + rect.height / 2 + window.scrollY;
          // spawn with default theme-aware particle color
          window.__spawnParticles(x, y);
        }
      }, wi * 350);
    });

    // Calculate time until all animations finish: last word start + its duration
    const lastStart = (spans.length - 1) * 350;
    const maxDuration = 2200; // longest smoke/word animation duration we set
    const extraHold = 700;
    const timeUntilNext = lastStart + maxDuration + extraHold;

    setTimeout(() => {
      // clear current words and show next
      idx = (i + 1) % phrases.length;
      // Advance the color index so the next phrase uses the next color.
      colorIndex = (colorIndex + 1) % colorsCount;
      showPhrase(idx);
    }, timeUntilNext);
  }

  // start
  showPhrase(0);
})();

// AI Chatbot for Portfolio Contact Details
// ============================================
// CONFIGURATION INSTRUCTIONS:
// 1. To use ChatGPT: Get API key from https://platform.openai.com/api-keys
//    - Add your key to: aiConfig.chatgpt.apiKey
//    - Set: aiConfig.provider = 'chatgpt'
//
// 2. To use Gemini: Get API key from https://makersuite.google.com/app/apikey
//    - Add your key to: aiConfig.gemini.apiKey
//    - Set: aiConfig.provider = 'gemini'
//
// 3. The chatbot will first try to answer locally (contact info, skills, etc.)
//    If no local match, it will use the configured AI API
// ============================================

(function chatbotAI() {
  const toggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chatbot-close');
  const messagesContainer = document.getElementById('chatbot-messages');
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');

  if (!toggle || !chatbotWindow) return;

  // Contact information database
  const contactInfo = {
    email: 'maithreyan2006@gmail.com',
    linkedin: 'https://www.linkedin.com/in/maithreyan-d-93924a2a6',
    github: 'https://github.com/maithreyan12',
    name: 'Maithreyan',
    title: 'Full Stack Developer',
    education: 'B.Tech Information Technology',
    experience: '2+ years in Frontend Development',
    location: 'India'
  };

  const skills = {
    frontend: ['HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'Material UI'],
    backend: ['PostgreSQL', 'Node.js', 'Express.js', 'Git'],
    level: {
      'HTML': 'Experienced',
      'CSS': 'Experienced',
      'SASS': 'Intermediate',
      'JavaScript': 'Basic',
      'TypeScript': 'Basic',
      'Material UI': 'Intermediate',
      'PostgreSQL': 'Basic',
      'Node.js': 'Intermediate',
      'Express.js': 'Intermediate',
      'Git': 'Intermediate'
    }
  };

  // Toggle chat window
  function toggleChat() {
    const isActive = chatbotWindow.classList.contains('active');
    chatbotWindow.classList.toggle('active');
    toggle.setAttribute('aria-expanded', !isActive);
    chatbotWindow.setAttribute('aria-hidden', isActive);
    if (!isActive) {
      input.focus();
    }
  }

  toggle.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatbotWindow.classList.contains('active')) {
      toggleChat();
    }
  });

  // Add message to chat
  function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (typeof text === 'string') {
      const p = document.createElement('p');
      p.textContent = text;
      contentDiv.appendChild(p);
    } else {
      contentDiv.innerHTML = text;
    }
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    return messageDiv;
  }

  // Typewriter effect for bot messages
  function typeMessage(element, text, speed = 30) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      element.innerHTML = text;
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      return;
    }

    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  // Natural language processing - pattern matching
  function processMessage(userMessage) {
    const msg = userMessage.toLowerCase().trim();
    
    // Greetings
    if (msg.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/)) {
      return `Hello! 👋 I'm <strong>Maithreyan</strong>, your AI assistant. I'm here to help you learn about my portfolio. What would you like to know?`;
    }

    // Email
    if (msg.match(/\b(email|e-mail|mail|contact email|email address)\b/)) {
      return `📧 Email: <a href="mailto:${contactInfo.email}" target="_blank">${contactInfo.email}</a><br><br>You can reach out directly via email for collaborations, job opportunities, or any inquiries!`;
    }

    // LinkedIn
    if (msg.match(/\b(linkedin|linked in|linked-in|professional|network|profile)\b/)) {
      return `💼 LinkedIn: <a href="${contactInfo.linkedin}" target="_blank" rel="noopener noreferrer">${contactInfo.linkedin}</a><br><br>Connect on LinkedIn to see professional experience and updates!`;
    }

    // GitHub
    if (msg.match(/\b(github|git hub|git-hub|code|repository|repos|projects|portfolio)\b/)) {
      return `💻 GitHub: <a href="${contactInfo.github}" target="_blank" rel="noopener noreferrer">${contactInfo.github}</a><br><br>Check out the code repositories and projects on GitHub!`;
    }

    // Contact info summary
    if (msg.match(/\b(contact|contact info|contact details|how to reach|get in touch|reach out)\b/)) {
      return `📞 Contact Information:<br><br>
        📧 Email: <a href="mailto:${contactInfo.email}">${contactInfo.email}</a><br>
        💼 LinkedIn: <a href="${contactInfo.linkedin}" target="_blank">LinkedIn Profile</a><br>
        💻 GitHub: <a href="${contactInfo.github}" target="_blank">GitHub Profile</a><br><br>
        Feel free to reach out through any of these channels!`;
    }

    // Skills
    if (msg.match(/\b(skills|technologies|tech stack|what can|abilities|expertise|proficient)\b/)) {
      const frontendList = skills.frontend.map(s => `• ${s} (${skills.level[s]})`).join('<br>');
      const backendList = skills.backend.map(s => `• ${s} (${skills.level[s]})`).join('<br>');
      return `🛠️ Skills & Technologies:<br><br>
        <strong>Frontend:</strong><br>${frontendList}<br><br>
        <strong>Backend:</strong><br>${backendList}`;
    }

    // Experience
    if (msg.match(/\b(experience|years|how long|background|work|professional)\b/)) {
      return `💼 Experience: ${contactInfo.experience}<br><br>
        ${contactInfo.name} has hands-on experience in HTML, CSS, JavaScript, and frameworks like React and Django. 
        Proficient in designing and developing modern, user-friendly websites with a focus on responsive design.`;
    }

    // Education
    if (msg.match(/\b(education|degree|university|college|study|studying|student)\b/)) {
      return `🎓 Education: ${contactInfo.education}<br><br>
        Currently pursuing a Bachelor's degree in Information Technology, 
        passionate about full-stack development and modern web technologies.`;
    }

    // About/Who
    if (msg.match(/\b(who|about|tell me|introduce|background|info about)\b/)) {
      return `👋 About ${contactInfo.name}:<br><br>
        ${contactInfo.name} is a ${contactInfo.title} and an enthusiastic Information Technology student. 
        Passionate about designing and developing modern, user-friendly websites. 
        Experienced with HTML, CSS, JavaScript, React, Django, and design tools like Figma. 
        Currently exploring both front-end and full-stack development.`;
    }

    // Projects
    if (msg.match(/\b(projects|portfolio|work|what has|built|created|show me)\b/)) {
      return `🚀 Projects:<br><br>
        Check out the Projects section on this portfolio to see recent work! 
        You can also visit the <a href="${contactInfo.github}" target="_blank">GitHub profile</a> 
        to explore code repositories and contributions.`;
    }

    // Help
    if (msg.match(/\b(help|what can|what do|assist|support|commands)\b/)) {
      return `💡 I can help you with:<br><br>
        • Contact information (email, LinkedIn, GitHub)<br>
        • Skills and technologies<br>
        • Experience and background<br>
        • Education details<br>
        • Projects and portfolio<br><br>
        Just ask me anything about ${contactInfo.name}'s portfolio!`;
    }

    // Return null if no local match - will use AI API
    return null;
  }

  // AI API Configuration
  const aiConfig = {
    // Choose 'chatgpt' or 'gemini'
    provider: 'chatgpt', // Change to 'gemini' to use Google Gemini
    
    // ChatGPT Configuration (OpenAI)
    chatgpt: {
      apiKey: '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',
      apiUrl: 'https://api.openai.com/v1/chat/completions',
      model: 'gpt-3.5-turbo'
    },
    
    // Gemini Configuration (Google)
    gemini: {
      apiKey: 'AIzaSyBJkp-xhSuvBeUK0T4T0-iNQ39r-4-BFE8',
      apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
    }
  };

  // Get AI response from ChatGPT
  async function getChatGPTResponse(userMessage) {
    if (!aiConfig.chatgpt.apiKey) {
      return '⚠️ ChatGPT API key not configured. Please add your OpenAI API key in the chatbot configuration.';
    }

    const portfolioContext = `You are Maithreyan, an AI assistant helping visitors learn about Maithreyan's portfolio. 
    Here is the portfolio information:
    - Name: Maithreyan
    - Title: ${contactInfo.title}
    - Email: ${contactInfo.email}
    - LinkedIn: ${contactInfo.linkedin}
    - GitHub: ${contactInfo.github}
    - Education: ${contactInfo.education}
    - Experience: ${contactInfo.experience}
    - Skills: Frontend: ${skills.frontend.join(', ')}, Backend: ${skills.backend.join(', ')}
    
    Always introduce yourself as Maithreyan first. Answer the user's question in a friendly, helpful manner. Keep responses concise and relevant. 
    If asked about contact info, provide the actual email, LinkedIn, or GitHub links.`;

    try {
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(aiConfig.chatgpt.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aiConfig.chatgpt.apiKey}`
        },
        body: JSON.stringify({
          model: aiConfig.chatgpt.model,
          messages: [
            { role: 'system', content: portfolioContext },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 200, // Reduced for faster responses
          temperature: 0.7,
          stream: false
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API error: ${response.status}`);
      }

      const data = await response.json();
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from ChatGPT');
      }
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('ChatGPT API Error:', error);
      if (error.name === 'AbortError') {
        return `Sorry, the request timed out. Please try again with a shorter question or ask about contact info, skills, or experience.`;
      }
      return `Sorry, I'm having trouble connecting to ChatGPT. ${error.message || 'Please try again later or ask about contact info, skills, or experience.'}`;
    }
  }

  // Get AI response from Gemini
  async function getGeminiResponse(userMessage) {
    if (!aiConfig.gemini.apiKey) {
      return '⚠️ Gemini API key not configured. Please add your Google Gemini API key in the chatbot configuration.';
    }

    const portfolioContext = `You are Maithreyan, an AI assistant helping visitors learn about Maithreyan's portfolio. 
    Here is the portfolio information:
    - Name: Maithreyan
    - Title: ${contactInfo.title}
    - Email: ${contactInfo.email}
    - LinkedIn: ${contactInfo.linkedin}
    - GitHub: ${contactInfo.github}
    - Education: ${contactInfo.education}
    - Experience: ${contactInfo.experience}
    - Skills: Frontend: ${skills.frontend.join(', ')}, Backend: ${skills.backend.join(', ')}
    
    Always introduce yourself as Maithreyan first. Answer the user's question in a friendly, helpful manner. Keep responses concise and relevant. 
    If asked about contact info, provide the actual email, LinkedIn, or GitHub links.`;

    try {
      const url = `${aiConfig.gemini.apiUrl}?key=${aiConfig.gemini.apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${portfolioContext}\n\nUser question: ${userMessage}`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      return `Sorry, I'm having trouble connecting to Gemini. Error: ${error.message}. Please try again later or ask about contact info, skills, or experience.`;
    }
  }

  // Get AI response (ChatGPT or Gemini)
  async function getAIResponse(userMessage) {
    if (aiConfig.provider === 'gemini') {
      return await getGeminiResponse(userMessage);
    } else {
      return await getChatGPTResponse(userMessage);
    }
  }

  // Display bot response with typing effect
  function displayBotResponse(botResponse) {
    const botMessage = addMessage('', false);
    const contentDiv = botMessage.querySelector('.message-content');
    
    // Use typewriter effect for HTML content
    if (botResponse.includes('<')) {
      contentDiv.innerHTML = '';
      let html = botResponse;
      let text = '';
      let i = 0;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReduced) {
        contentDiv.innerHTML = html;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
        return;
      }

      const timer = setInterval(() => {
        if (i < html.length) {
          text += html.charAt(i);
          // Only update if we've completed a tag or text segment
          if (html.charAt(i) === '>' || (html.charAt(i) === '<' && i > 0 && html.charAt(i-1) !== '<')) {
            contentDiv.innerHTML = text;
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }
          i++;
        } else {
          contentDiv.innerHTML = html;
          clearInterval(timer);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
          input.disabled = false;
          sendBtn.disabled = false;
          input.focus();
        }
      }, 10); // Faster typing speed (reduced from 20ms to 10ms)
    } else {
      typeMessage(contentDiv, botResponse, 10); // Faster typing speed
      setTimeout(() => {
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
      }, botResponse.length * 10 + 50); // Reduced delay
    }
  }

  // Send message - optimized for speed
  async function sendMessage() {
    const userMessage = input.value.trim();
    if (!userMessage) return;

    // Add user message immediately
    addMessage(userMessage, true);
    input.value = '';

    // Disable input while processing
    input.disabled = true;
    sendBtn.disabled = true;

    let thinkingMessage = null;
    let loadingMessage = null;

    try {
      // Try local response first (instant)
      let botResponse = processMessage(userMessage);

      // If no local response, use AI API
      if (botResponse === null) {
        // Show loading message immediately
        loadingMessage = addMessage('🤖 Connecting to ChatGPT...', false);
        
        try {
          // Get AI response with timeout
          botResponse = await getAIResponse(userMessage);
          if (!botResponse || botResponse.trim() === '') {
            throw new Error('Empty response from AI');
          }
        } catch (apiError) {
          console.error('AI API Error:', apiError);
          botResponse = `Sorry, I encountered an error: ${apiError.message || 'Unable to connect to ChatGPT'}. Please try asking about contact info, skills, experience, or projects.`;
        }
        
        // Remove loading message
        if (loadingMessage && loadingMessage.parentNode) {
          loadingMessage.remove();
        }
      }

      // Ensure we have a response
      if (!botResponse) {
        botResponse = `I'm not sure how to answer that. Could you ask about contact info, skills, experience, education, or projects?`;
      }

      // Display the response immediately
      displayBotResponse(botResponse);
    } catch (error) {
      console.error('Send message error:', error);
      // Clean up any messages
      if (thinkingMessage && thinkingMessage.parentNode) {
        thinkingMessage.remove();
      }
      if (loadingMessage && loadingMessage.parentNode) {
        loadingMessage.remove();
      }
      
      // Show error message
      const errorResponse = `Sorry, something went wrong. Please try again or ask about contact info, skills, experience, or projects.`;
      displayBotResponse(errorResponse);
    }
  }

  // Event listeners
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Auto-focus input when window opens
  toggle.addEventListener('click', () => {
    setTimeout(() => {
      if (chatbotWindow.classList.contains('active')) {
        input.focus();
      }
    }, 100);
  });
})();

// Contact form → EmailJS (public key is safe in the browser)
(function contactFormEmailJS() {
  const EMAILJS_PUBLIC_KEY = "vG36awI5N4SNk9J2o";
  const EMAILJS_SERVICE_ID = "service_tqvd4hh";
  const EMAILJS_TEMPLATE_ID = "template_z7pba0d";

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const statusEl = document.getElementById("contact-form-status");
    if (!form || typeof emailjs === "undefined") {
      if (statusEl && typeof emailjs === "undefined") {
        statusEl.textContent = "Could not load EmailJS. Check your network or ad blocker.";
      }
      return;
    }

    emailjs.init(EMAILJS_PUBLIC_KEY);

    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value?.trim() || "";
      const email = document.getElementById("email")?.value?.trim() || "";
      const phone = document.getElementById("phone")?.value?.trim() || "";
      const message = document.getElementById("message")?.value?.trim() || "";

      if (statusEl) statusEl.textContent = "";

      const originalLabel = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          name,
          email,
          phone,
          message,
        })
        .then(() => {
          if (statusEl) statusEl.textContent = "Message sent successfully — I'll get back to you soon.";
          form.reset();
        })
        .catch((err) => {
          console.error(err);
          if (statusEl) statusEl.textContent = "Could not send message. Please try again or email directly.";
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel || "Submit";
          }
        });
    });
  });
})();
