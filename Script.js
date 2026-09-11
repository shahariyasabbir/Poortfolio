// ---------------------------------------------------------------
// Mobile tab-bar toggle
// ---------------------------------------------------------------
const tabToggle = document.getElementById('tabToggle');
const tabs = document.getElementById('tabs');

tabToggle?.addEventListener('click', () => {
  const isOpen = tabs.classList.toggle('open');
  tabToggle.setAttribute('aria-expanded', String(isOpen));
});

tabs?.addEventListener('click', (e) => {
  if (e.target.closest('.tab')) {
    tabs.classList.remove('open');
    tabToggle.setAttribute('aria-expanded', 'false');
  }
});

// ---------------------------------------------------------------
// One orchestrated moment: type out the "currentFocus" value once
// on load. Respects prefers-reduced-motion.
// ---------------------------------------------------------------
const focusEl = document.getElementById('typedFocus');
const phrases = [
  'shipping full-stack side projects',
  'FedDRL-IDS thesis work',
  '300+ solved problems and counting',
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function typeOnce(el, text, speed = 38) {
  return new Promise((resolve) => {
    let i = 0;
    const tick = () => {
      el.textContent = '"' + text.slice(0, i) + '"';
      i++;
      if (i <= text.length) {
        setTimeout(tick, speed);
      } else {
        resolve();
      }
    };
    tick();
  });
}

if (focusEl) {
  if (prefersReducedMotion) {
    focusEl.textContent = '"' + phrases[0] + '"';
  } else {
    typeOnce(focusEl, phrases[0]);
  }
}

// ---------------------------------------------------------------
// Active tab highlight based on scroll position
// ---------------------------------------------------------------
const sections = document.querySelectorAll('main .panel[id]');
const tabLinks = document.querySelectorAll('.tab');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tabLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
          link.style.borderBottomColor = link.getAttribute('href') === `#${id}` ? 'var(--accent-purple)' : 'transparent';
        });
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
);

sections.forEach((section) => observer.observe(section));