import './modules/slider-promo.js';
import './modules/slider-programs.js';
import './modules/slider-reviews.js';
import './modules/slider-news.js';
import {openMainMenu, clickMenuLinks, clickSubMenuLinks} from './modules/menu.js';
import {setPromoBackground, setProgramsBackground, setNewsBackground} from './modules/set-backgrounds.js';
import {initTabs} from './modules/news-tab.js';
import {initAccordion} from './modules/faq-accordion.js';
import {activateSelectContact} from './modules/form-select.js';
import {initValidationContact} from './modules/form-validation.js';
import {initPhoneMask} from './modules/phone-mask.js';
import {initModal} from './modules/modal.js';

openMainMenu();
clickMenuLinks();
clickSubMenuLinks();
setPromoBackground();
setProgramsBackground();
setNewsBackground();
initTabs();
initAccordion();
activateSelectContact();
initValidationContact();
initPhoneMask();
initModal();
