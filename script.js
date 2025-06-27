const track = document.querySelector('.carousel__track');
const slides = document.querySelectorAll('.carousel__item');
const btnLeft = document.querySelector('.carousel__btn--left');
const btnRight = document.querySelector('.carousel__btn--right');
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('header__nav--open');
});


let currentSlide = 0;

function updateCarousel() {
  const itemWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
}

btnRight.addEventListener('click', () => {
  const visibleSlides = 3;
  if (currentSlide < slides.length - visibleSlides) {
    currentSlide++;
    updateCarousel();
  }
});

btnLeft.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);
updateCarousel();