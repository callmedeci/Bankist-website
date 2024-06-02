'use strict';

const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const header = document.querySelector('header');
const nav = document.querySelector('.nav');

const btnCloseModal = document.getElementById('btn-close-modal');
const btnsOpenModal = document.querySelectorAll('.open__account_btn');
const btnScrollTo = document.getElementById('btn__Scroll__To');


const section1 = document.getElementById('section--1');
const allSections = document.querySelectorAll('.section');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

if (!nav.classList.contains('stick')) {
  nav.classList.remove('invisible', 'opacity-0');
};

//////////////////////////////////////////////////////////////////////

//Hnadle Open/Close the Modal
const closeModal = function () {
  modal.classList.add('invisible');
  modal.classList.remove('opacity-100');
  overlay.classList.add('invisible');
  overlay.classList.remove('opacity-100');
};

const openModal = function () {
  modal.classList.remove('invisible');
  modal.classList.add('opacity-100');
  overlay.classList.remove('invisible');
  overlay.classList.add('opacity-100');
};

//Event Handlers 
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
document.body.addEventListener('keydown', function (e) {
  e.key === 'Escape' && !modal.classList.contains('invisible') ? closeModal() : undefined;
});

//Handle Page Navigation
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__list__lists').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };
});

//Hnalde Tabbs 
tabsContainer.addEventListener('click', function (e) {
  const click = e.target.closest('.operations__tab');

  if (!click) return;

  //Remove Defualt Classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  click.classList.add('operations__tab--active');

  document.querySelector(`.operations__content--${click.dataset.tab}`).classList.add('operations__content--active');

});

//Handle Menue Fade Animation
const handleOpacity = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleOpacity.bind(0.5));
nav.addEventListener('mouseout', handleOpacity.bind(1));

//Handle Sticky Navigation
function stickyNav() {
  const navHeight = nav.getBoundingClientRect().height;

  const navCallBack = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      nav.classList.add('stick');
      nav.classList.remove('invisible', 'opacity-0');
    }
    else {
      nav.classList.remove('invisible', 'opacity-0');
      nav.classList.remove('stick');
    };
  };

  const observer = new IntersectionObserver(navCallBack, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });
  observer.observe(header);
};

stickyNav();

//Handle Revealing Elemment on scroll
function revealingEl() {
  const revealCallBack = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('hidden_section');
    revealObserver.unobserve(entry.target);
  };

  const revealObserver = new IntersectionObserver(revealCallBack, {
    root: null,
    threshold: 0.1,
  });

  allSections.forEach(section => {
    revealObserver.observe(section)
    section.classList.add('hidden_section');
  });
};

revealingEl();

//Handle Lazy Loading Images
function lazyImages() {
  const allImages = document.querySelectorAll('img[data-src]');

  //Functions 
  const lazyCallBack = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', () => entry.target.classList.remove('lazy_img'))
    lazyObserver.unobserve(entry.target);
  };

  const lazyObserver = new IntersectionObserver(lazyCallBack, {
    root: null,
    threshold: 0,
    rootMargin: '250px',
  });

  allImages.forEach(img => lazyObserver.observe(img));
};

lazyImages();

//Hnadle Sliders
function sliders() {
  const slides = document.querySelectorAll('.slide');
  const dotContainer = document.querySelector('.dots');
  const btnNext = document.querySelector('.slider__btn--right');
  const btnPrev = document.querySelector('.slider__btn--left');

  let curSlider = 0;

  //Functions
  const createDots = function () {
    slides.forEach((_, i) => dotContainer.insertAdjacentHTML('beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`));
  };

  const activatedDot = function (slider) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide = "${slider}"]`)
      .classList.add('dots__dot--active')
  };

  const goToSlide = function (slider) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - slider)}%)`;
    });
  };

  const init = function () {
    createDots();
    goToSlide(0);
    activatedDot(0);
  };

  init();

  const goActiveSlide = function () {
    goToSlide(curSlider);
    activatedDot(curSlider);
  };

  const handleBtnNext = function () {
    if (curSlider === slides.length - 1) {
      curSlider = 0;
    } else {
      curSlider++;
    };
    goActiveSlide()
  };

  const handleBtnPrev = function () {
    if (curSlider <= 0) {
      curSlider = slides.length - 1;
    } else {
      curSlider--;
    };
    goActiveSlide()
  };


  //Add Event Listener
  btnNext.addEventListener('click', handleBtnNext);
  btnPrev.addEventListener('click', handleBtnPrev);
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlider = Number(e.target.dataset.slide);
      goActiveSlide();
    };
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') handleBtnNext();
    e.key === 'ArrowLeft' && handleBtnPrev();
  });
};

sliders();





