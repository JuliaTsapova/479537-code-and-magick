'use strict';

(function () {
  var COUNT = 4;
  var similarListElement = document.querySelector('.setup-similar-list');

  var getWizardsArray = function (arrLength) {
    var wizards = [];
    for (var i = 0; i < arrLength; i++) {
      wizards.push(window.wizard.get());
    }
    return wizards;
  };

  var createFragment = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(window.wizard.render(arr[i]));
    }
    return fragment;
  };

  similarListElement.appendChild(createFragment(getWizardsArray(COUNT)));

  document.querySelector('.setup-similar').classList.remove('hidden');

})();
