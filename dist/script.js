const root = document.documentElement;
const body = document.body;
const header = document.querySelector('.site-header');
const progressBar = document.querySelector('.scroll-progress span');
const langToggle = document.querySelector('.lang-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const dialog = document.querySelector('.video-dialog');
const iframe = dialog.querySelector('iframe');

let activeJourneyStep = document.querySelector('.journey-step.active');

function setLanguage(lang) {
  const english = lang === 'en';
  const scrollPosition = window.scrollY;
  const priorBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  root.lang = english ? 'en' : 'ar';
  root.dir = english ? 'ltr' : 'rtl';
  body.classList.toggle('is-en', english);
  document.title = english
    ? 'Dr. Basem Allam | From clinical decisions to measurable value'
    : 'د. باسم علام | من القرار السريري إلى قيمة قابلة للقياس';
  localStorage.setItem('basem-site-language', lang);
  window.scrollTo(0, scrollPosition);
  updateJourneyCompass(activeJourneyStep);
  requestAnimationFrame(() => { root.style.scrollBehavior = priorBehavior; });
}

const requestedLanguage = new URLSearchParams(location.search).get('lang');
setLanguage(requestedLanguage || localStorage.getItem('basem-site-language') || 'ar');

langToggle.addEventListener('click', () => setLanguage(root.lang === 'ar' ? 'en' : 'ar'));

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  mobileNav.hidden = open;
  body.classList.toggle('menu-open', !open);
});

mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  body.classList.remove('menu-open');
}));

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.width = `${progress}%`;
  header.classList.toggle('scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .14 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

function updateJourneyCompass(step) {
  if (!step) return;
  activeJourneyStep = step;
  const number = step.dataset.step;
  const label = root.lang === 'en' ? step.dataset.labelEn : step.dataset.labelAr;
  document.querySelector('.compass-number').textContent = number;
  document.querySelectorAll('.compass-label').forEach((element) => { element.textContent = label; });
  document.querySelector('.journey-compass').style.setProperty('--journey-progress', `${(Number(number) / 6) * 100}%`);
  document.querySelectorAll('.journey-step').forEach((item) => item.classList.toggle('active', item === step));
}

const journeyObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) updateJourneyCompass(visible.target);
}, { rootMargin: '-30% 0px -38% 0px', threshold: [0, .25, .5, .75] });

document.querySelectorAll('.journey-step').forEach((step) => journeyObserver.observe(step));

const careerImage = document.querySelector('#career-image');
const careerMedia = document.querySelector('.career-media');
const careerObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const item = visible.target;
  document.querySelectorAll('.career-item').forEach((row) => row.classList.toggle('active', row === item));
  if (careerImage.getAttribute('src') !== item.dataset.image) {
    careerMedia.classList.add('is-changing');
    const nextImage = new Image();
    nextImage.onload = () => {
      careerImage.src = item.dataset.image;
      careerMedia.classList.remove('is-changing');
    };
    nextImage.src = item.dataset.image;
  }
}, { rootMargin: '-35% 0px -45% 0px', threshold: [0, .35, .7] });

document.querySelectorAll('.career-item').forEach((item) => careerObserver.observe(item));

const featuredVideo = document.querySelector('.featured-video');
const featuredImage = featuredVideo.querySelector('img');

document.querySelectorAll('.episode').forEach((episode) => {
  episode.addEventListener('click', () => {
    document.querySelectorAll('.episode').forEach((item) => item.classList.toggle('active', item === episode));
    featuredVideo.dataset.video = episode.dataset.video;
    featuredImage.src = episode.dataset.image;
    featuredImage.alt = root.lang === 'en' ? episode.dataset.titleEn : episode.dataset.titleAr;
    featuredVideo.querySelector('.featured-copy .lang-ar').textContent = episode.dataset.titleAr;
    featuredVideo.querySelector('.featured-copy .lang-en').textContent = episode.dataset.titleEn;
  });
});

function openVideo(videoId) {
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  dialog.showModal();
  body.classList.add('dialog-open');
}

featuredVideo.addEventListener('click', () => openVideo(featuredVideo.dataset.video));

function closeVideo() {
  dialog.close();
  iframe.src = 'about:blank';
  body.classList.remove('dialog-open');
}

dialog.querySelector('.dialog-close').addEventListener('click', closeVideo);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeVideo(); });
dialog.addEventListener('cancel', (event) => { event.preventDefault(); closeVideo(); });

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count);
    const suffix = element.dataset.suffix || '';
    const started = performance.now();
    const duration = 900;
    function tick(now) {
      const ratio = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;
      if (ratio < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(element);
  });
}, { threshold: .55 });

document.querySelectorAll('[data-count]').forEach((counter) => counterObserver.observe(counter));

if (matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  const hero = document.querySelector('.hero');
  const orbit = document.querySelector('.hero-orbit');
  hero.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - .5) * 18;
    const y = (event.clientY / window.innerHeight - .5) * 18;
    orbit.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
