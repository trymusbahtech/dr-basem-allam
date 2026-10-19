const root = document.documentElement;
const langToggle = document.querySelector('.lang-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const dialog = document.querySelector('.video-dialog');
const iframe = dialog.querySelector('iframe');

function setLanguage(lang) {
  const isEnglish = lang === 'en';
  root.lang = isEnglish ? 'en' : 'ar';
  root.dir = isEnglish ? 'ltr' : 'rtl';
  document.body.classList.toggle('is-en', isEnglish);
  document.title = isEnglish
    ? 'Dr. Basem Allam | RCM & Healthcare Executive'
    : 'د. باسم علام | قيادة دورة الإيرادات والتأمين الصحي';
  localStorage.setItem('basem-site-language', lang);
}

const queryLanguage = new URLSearchParams(location.search).get('lang');
setLanguage(queryLanguage || localStorage.getItem('basem-site-language') || 'ar');

langToggle.addEventListener('click', () => {
  setLanguage(root.lang === 'ar' ? 'en' : 'ar');
});

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  mobileNav.hidden = open;
  document.body.classList.toggle('menu-open', !open);
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('.video-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    iframe.src = `https://www.youtube-nocookie.com/embed/${trigger.dataset.video}?autoplay=1&rel=0`;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});

function closeDialog() {
  dialog.close();
  iframe.src = 'about:blank';
  document.body.classList.remove('dialog-open');
}

dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeDialog();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 20), { passive: true });
