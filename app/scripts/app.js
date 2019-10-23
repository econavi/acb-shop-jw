import svg4everybody from 'svg4everybody';
import mainMenu from '../blocks/main-menu/main-menu';
import Accordion from '../blocks/accordion/accordion';
import toggleViewCatalog from '../blocks/catalog/catalog';
import reviewedSlider from '../blocks/reviewed-slider/reviewed-slider';
import burger from '../blocks/burger/burger';
import mainNav from '../blocks/main-nav/main-nav';

class Viewer {
  constructor() {
    this.svg4everybody = svg4everybody;
    this.mainNav = mainNav;
    this.mainMenu = mainMenu;
    this.burger = burger;
    this.toggleViewCatalog = toggleViewCatalog;
    this.reviewedSlider = reviewedSlider;
    this.init();
  }

  init() {
    this.initClasses();
  }

  initClasses() {
    this.svg4everybody();
    this.mainNav();
    this.mainMenu();
    this.burger();
    this.toggleViewCatalog();
    this.reviewedSlider();

    const accordionList = document.querySelectorAll('.accordion');
    [].map.call(accordionList, (e) => new Accordion(e));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-new
  new Viewer();
});
