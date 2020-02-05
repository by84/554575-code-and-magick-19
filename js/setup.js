'use strict';

var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALLCOLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupWizard = document.querySelector('.setup-wizard-appearance');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');

var setupFireball = document.querySelector('.setup-fireball-wrap');

var getMaxArrayLength = function (array1, array2, array3) {
  var arrayLength = array1.length;
  if (array1.length <= array2.length) {
    arrayLength = array2.length;
  } else if (array1.length <= array3.length) {
    arrayLength = array3.length;
  }

  return arrayLength;
};

var T_LENGHT = getMaxArrayLength(WIZARD_COATCOLORS, WIZARD_EYESCOLOR, WIZARD_FIREBALLCOLOR);

// функция для рандома
var selfRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// добиваем массивы до одной длины
var eqLength = function (arrColors) {
  for (var i = 0; i < T_LENGHT; i++) {
    if (!arrColors[i]) {
      arrColors[i] = arrColors[selfRandom(0, i - 1)];
    }
  }
  return arrColors;
};
eqLength(WIZARD_COATCOLORS);
eqLength(WIZARD_EYESCOLOR);
eqLength(WIZARD_FIREBALLCOLOR);

var getRandArrayElem = function (array) {
  var randArrayElem = array[selfRandom(0, T_LENGHT - 1)];

  return randArrayElem;
};

var changeWizardCoatColor = function () {
  var coatColor = getRandArrayElem(WIZARD_COATCOLORS);
  setupWizardCoat.style.fill = coatColor;
  setupWizard.querySelectorAll('input')[0].value = coatColor;
};
var changeWizardEyesColor = function () {
  var eyeColor = getRandArrayElem(WIZARD_EYESCOLOR);
  setupWizardEyes.style.fill = eyeColor;
  setupWizard.querySelectorAll('input')[1].value = eyeColor;
};
var changeWizardFireballColor = function () {
  var fireballColor = getRandArrayElem(WIZARD_FIREBALLCOLOR);
  setupFireball.style.cssText = 'background: ' + fireballColor + ';';
  setupFireball.querySelector('input').value = fireballColor;
};

var focusWizardName = document.querySelector('.setup-user-name');

setupWizardCoat.addEventListener('click', function () {
  changeWizardCoatColor();
});

setupWizardEyes.addEventListener('click', function () {
  changeWizardEyesColor();
});

setupFireball.addEventListener('click', function () {
  changeWizardFireballColor();
});

var onPopupEscPress = function (evt) {
  if (evt.target !== focusWizardName) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
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
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});
