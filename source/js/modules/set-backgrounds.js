const promoSlides = document.querySelectorAll('.promo__item');
const programsSlides = document.querySelectorAll('.programs__item');
const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)');
const highResolution = window.matchMedia('(resolution >= 2dppx)');

const setSlideBackground = (slide, block) => {
  const slideBackground = slide.dataset.background;
  if (highResolution.matches && mediaQueryDesktop.matches) {
    slide.style.backgroundImage = `url(img/${block}/${block}-desktop-${slideBackground}@2x.jpg)`;
  } else if (mediaQueryDesktop.matches) {
    slide.style.backgroundImage = `url(img/${block}/${block}-desktop-${slideBackground}.jpg)`;
  } else if (highResolution.matches && mediaQueryTablet.matches) {
    slide.style.backgroundImage = `url(img/${block}/${block}-tablet-${slideBackground}@2x.jpg)`;
  } else if (mediaQueryTablet.matches) {
    slide.style.backgroundImage = `url(img/${block}/${block}-tablet-${slideBackground}.jpg)`;
  } else if (highResolution.matches) {
    slide.style.backgroundImage = `url(img/${block}/${block}-mobile-${slideBackground}@2x.jpg)`;
  } else {
    slide.style.backgroundImage = `url(img/${block}/${block}-mobile-${slideBackground}.jpg)`;
  }
};

const setPromoBackground = () => promoSlides.forEach((promoSlide) => setSlideBackground(promoSlide, 'hero'));
const setProgramsBackground = () => programsSlides.forEach((programsSlide) => setSlideBackground(programsSlide, 'programs'));

export {setPromoBackground, setProgramsBackground};
