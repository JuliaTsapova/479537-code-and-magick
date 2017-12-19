'use strict';

var wizadrs = [];
var count = 4;
var fame = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var getRandomKey = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var renderWizard = function (data) {
  var wizard = similarWizardTemplate.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = data.fame;
  wizard.querySelector('.wizard-coat').style.fill = data.coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = data.eyesColor;
  return wizard;
};

while (--count >= 0) {
  wizadrs.push({
    fame: fame[getRandomKey(fame)] + surname[getRandomKey(surname)],
    coatColor: coatColor[getRandomKey(coatColor)],
    eyesColor: eyesColor[getRandomKey(eyesColor)]
  });
}

for (var i = 0; i < wizadrs.length; i++) {
  fragment.appendChild(renderWizard(wizadrs[i]));
}

similarListElement.appendChild(fragment);

// document.querySelector('.setup').classList.remove('hidden');
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
  wizardCoat.style.fill = coatColor[getRandomKey(coatColor)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyesColor[getRandomKey(eyesColor)];
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = fireballColor[getRandomKey(fireballColor)];
});
