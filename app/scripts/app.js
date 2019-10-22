import svg4everybody from 'svg4everybody';
import mainMenu from '../blocks/main-menu/main-menu';
import Accordion from '../blocks/accordion/accordion';
import toggleViewCatalog from '../blocks/catalog/catalog';

class Viewer {
  constructor() {
    this.mainMenu = mainMenu;
    this.svg4everybody = svg4everybody;
    this.toggleViewCatalog = toggleViewCatalog;
    this.init();
  }

  init() {
    this.initClasses();
  }

  initClasses() {
    this.svg4everybody();
    this.mainMenu();
    this.toggleViewCatalog();

    const accordionList = document.querySelectorAll('.accordion');
    [].map.call(accordionList, (e) => new Accordion(e));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-new
  new Viewer();
});
