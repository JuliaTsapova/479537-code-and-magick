'use strict';

var COUNT = 4;
var wizardParams = {
  FIRST_NAME: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAME: [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'],
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL_COLOR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomNumber = function (number) {
  return Math.floor(Math.random() * number);
};

var renderWizard = function (data) {
  var wizard = similarWizardTemplate.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = data.name;
  wizard.querySelector('.wizard-coat').style.fill = data.coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = data.eyesColor;
  return wizard;
};

var getWizard = function () {
  return {
    name: wizardParams.FIRST_NAME[getRandomNumber(wizardParams.FIRST_NAME.length)] + wizardParams.SURNAME[getRandomNumber(wizardParams.SURNAME.length)],
    coatColor: wizardParams.COAT_COLOR[getRandomNumber(wizardParams.COAT_COLOR.length)],
    eyesColor: wizardParams.EYES_COLOR[getRandomNumber(wizardParams.EYES_COLOR.length)]
  };
};

var getWizardsArray = function (arrLength) {
  var wizards = [];
  for (var i = 0; i < arrLength; i++) {
    wizards.push(getWizard());
  }
  return wizards;
};

var createFragment = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }
  return fragment;
};

similarListElement.appendChild(createFragment(getWizardsArray(COUNT)));

document.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !(evt.target.nodeName === 'INPUT' && evt.target.className === 'setup-user-name')) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardParams.COAT_COLOR[getRandomNumber(wizardParams.COAT_COLOR.length)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardParams.EYES_COLOR[getRandomNumber(wizardParams.EYES_COLOR.length)];
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = wizardParams.FIREBALL_COLOR[getRandomNumber(wizardParams.FIREBALL_COLOR.length)];
});
