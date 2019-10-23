const toggleViewCatalog = () => {
  const options = {
    selectors: {
      switcher: 'js-catalog-view-switcher',
      catalog: 'js-catalog-list',
      catalogIsList: 'catalog-list--view-h',
      targetControl: 'view-switcher',
    },
    controlNames: {
      list: 'list',
      modules: 'modules',
    },
  };

  const switcher = document.querySelector(`.${options.selectors.switcher}`);
  const catalog = document.querySelector(`.${options.selectors.catalog}`);

  if (!switcher || !catalog) return;

  // Обработчик переключает css-class каталога
  // для его отображения плиткой или списком
  const clickHandler = (e) => {
    const { target } = e;

    // Если промахнулись мимо кнопок, ничего не делаем
    const targetName = target.getAttribute('name');
    if (targetName !== options.selectors.targetControl) return;

    // Получим value нажатой кнопки и состояние отображения каталога
    const targetValue = target.getAttribute('value');
    const catalogViewIsList = catalog.classList.contains(options.selectors.catalogIsList);

    // Если текущий вид каталога совпадает со значением нажатой кнопки,
    // ничего не делаем
    if (targetValue === options.controlNames.list && catalogViewIsList) return;
    if (targetValue === options.controlNames.modules && !catalogViewIsList) return;

    // Переключаем класс
    if (targetValue === options.controlNames.list && !catalogViewIsList) {
      catalog.classList.add(options.selectors.catalogIsList);
    } else {
      catalog.classList.remove(options.selectors.catalogIsList);
    }
  };

  switcher.addEventListener('click', clickHandler);
};

export default toggleViewCatalog;
