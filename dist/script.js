const root = document.documentElement;
const body = document.body;
const header = document.querySelector('.site-header');
const progressBar = document.querySelector('.scroll-progress span');
const langToggle = document.querySelector('.lang-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const dialog = document.querySelector('.video-dialog');
const iframe = dialog?.querySelector('iframe');

let activeJourneyStep = document.querySelector('.journey-step.active');

function icon(name, className = 'icon') {
  return `<svg class="${className}" aria-hidden="true"><use href="assets/icons.svg#${name}"></use></svg>`;
}

function setLanguage(lang) {
  const english = lang === 'en';
  const scrollPosition = window.scrollY;
  const priorBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  root.lang = english ? 'en' : 'ar';
  root.dir = english ? 'ltr' : 'rtl';
  body.classList.toggle('is-en', english);
  document.querySelectorAll('.site-header .brand').forEach((brand) => {
    const arabicName = brand.querySelector('strong.lang-ar');
    const englishName = brand.querySelector('strong.lang-en');
    const tagline = brand.querySelector('small');
    if (arabicName) arabicName.textContent = 'دكتور علام';
    if (englishName) englishName.textContent = 'Dr 3llam';
    if (tagline) tagline.textContent = english ? 'HEALTH INSURANCE' : 'للتأمين الصحي';
  });
  document.title = english
    ? (body.dataset.titleEn || 'Dr. Basem Allam | Healthcare RCM Executive')
    : (body.dataset.titleAr || 'د. باسم علام | قيادة دورة الإيرادات الصحية');
  localStorage.setItem('basem-site-language-v2', lang);
  window.scrollTo(0, scrollPosition);
  updateJourneyCompass(activeJourneyStep);
  requestAnimationFrame(() => { root.style.scrollBehavior = priorBehavior; });
}

const requestedLanguage = new URLSearchParams(location.search).get('lang');
setLanguage(requestedLanguage || localStorage.getItem('basem-site-language-v2') || 'en');

langToggle?.addEventListener('click', () => setLanguage(root.lang === 'ar' ? 'en' : 'ar'));

function closeMenu() {
  if (!mobileNav || !menuToggle) return;
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  body.classList.remove('menu-open');
}

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  if (mobileNav) mobileNav.hidden = open;
  body.classList.toggle('menu-open', !open);
});

mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && body.classList.contains('menu-open')) closeMenu();
});

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
  header?.classList.toggle('scrolled', window.scrollY > 24);
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
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

function updateJourneyCompass(step) {
  const compass = document.querySelector('.journey-compass');
  if (!step || !compass) return;
  activeJourneyStep = step;
  const number = step.dataset.step;
  const label = root.lang === 'en' ? step.dataset.labelEn : step.dataset.labelAr;
  const numberElement = compass.querySelector('.compass-number');
  if (numberElement) numberElement.textContent = number;
  compass.querySelectorAll('.compass-label').forEach((element) => { element.textContent = label; });
  compass.style.setProperty('--journey-progress', `${(Number(number) / 6) * 100}%`);
  document.querySelectorAll('.journey-step').forEach((item) => item.classList.toggle('active', item === step));
}

const journeyObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) updateJourneyCompass(visible.target);
}, { rootMargin: '-30% 0px -38% 0px', threshold: [0, .25, .5, .75] });

document.querySelectorAll('.journey-step').forEach((step) => journeyObserver.observe(step));

const careerImage = document.querySelector('#career-image');
const careerMedia = document.querySelector('.career-media');
if (careerImage && careerMedia) {
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
        const focus = item.dataset.image.includes('basem-office')
          ? 'center 39%'
          : item.dataset.image.includes('basem-executive')
            ? 'center 34%'
            : item.dataset.image.includes('basem-studio')
              ? 'center 36%'
              : 'center 18%';
        careerImage.style.objectPosition = focus;
        careerMedia.classList.remove('is-changing');
      };
      nextImage.src = item.dataset.image;
    }
  }, { rootMargin: '-35% 0px -45% 0px', threshold: [0, .35, .7] });
  document.querySelectorAll('.career-item').forEach((item) => careerObserver.observe(item));
}

const featuredVideo = document.querySelector('.featured-video');
const featuredImage = featuredVideo?.querySelector('img');
document.querySelectorAll('.episode').forEach((episode) => {
  episode.addEventListener('click', () => {
    document.querySelectorAll('.episode').forEach((item) => item.classList.toggle('active', item === episode));
    if (!featuredVideo || !featuredImage) return;
    featuredVideo.dataset.video = episode.dataset.video;
    featuredImage.src = episode.dataset.image;
    featuredImage.alt = root.lang === 'en' ? episode.dataset.titleEn : episode.dataset.titleAr;
    const arTitle = featuredVideo.querySelector('.featured-copy .lang-ar');
    const enTitle = featuredVideo.querySelector('.featured-copy .lang-en');
    if (arTitle) arTitle.textContent = episode.dataset.titleAr;
    if (enTitle) enTitle.textContent = episode.dataset.titleEn;
  });
});

function openVideo(videoId, title = 'Dr 3llam video') {
  if (!dialog || !iframe || !videoId) return;
  const directLink = dialog.querySelector('.video-direct-link');
  const dialogTitle = dialog.querySelector('.video-dialog-title');
  iframe.title = title;
  iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&playsinline=1&controls=1`;
  if (directLink) directLink.href = `https://www.youtube.com/watch?v=${videoId}`;
  if (dialogTitle) dialogTitle.textContent = title;
  dialog.showModal();
  body.classList.add('dialog-open');
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('.video-trigger');
  if (!trigger) return;
  event.preventDefault();
  const titleElement = trigger.querySelector('.lang-ar, .video-card-title');
  openVideo(trigger.dataset.video, titleElement?.textContent?.trim() || 'Dr 3llam video');
});

function closeVideo() {
  if (!dialog || !iframe) return;
  dialog.close();
  iframe.src = 'about:blank';
  body.classList.remove('dialog-open');
}

dialog?.querySelector('.dialog-close')?.addEventListener('click', closeVideo);
dialog?.addEventListener('click', (event) => { if (event.target === dialog) closeVideo(); });
dialog?.addEventListener('cancel', (event) => { event.preventDefault(); closeVideo(); });

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

const hero = document.querySelector('.hero');
const orbit = document.querySelector('.hero-orbit');
if (hero && orbit && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  hero.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - .5) * 18;
    const y = (event.clientY / window.innerHeight - .5) * 18;
    orbit.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

document.querySelectorAll('[data-page]').forEach((link) => {
  if (link.dataset.page === body.dataset.page) link.setAttribute('aria-current', 'page');
});

document.querySelectorAll('.expertise-switch button').forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    document.querySelectorAll('.expertise-switch button').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('.expertise-panel').forEach((panel) => panel.classList.toggle('active', panel.id === target));
  });
});

const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const subject = encodeURIComponent(`Website inquiry — ${data.get('topic') || 'Healthcare RCM'}`);
  const message = encodeURIComponent(`Name: ${data.get('name')}\nOrganization: ${data.get('organization')}\n\n${data.get('message')}`);
  window.location.href = `mailto:dr.3llam2020@gmail.com?subject=${subject}&body=${message}`;
});

document.querySelectorAll('[data-icon]').forEach((element) => {
  if (!element.querySelector('svg')) element.insertAdjacentHTML('afterbegin', icon(element.dataset.icon));
});

document.querySelectorAll('#year').forEach((year) => { year.textContent = new Date().getFullYear(); });
