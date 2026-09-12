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