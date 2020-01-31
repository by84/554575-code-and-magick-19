'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var T_LENGHT = 8;
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


var wizardArr = function (names, surnames, cColors, eColors) {
  eqLength(cColors, eColors);
  var wizards = [];
  for (var j = 0; j < 4; j++) {
    wizards[j] = {
      name: names[selfRandom(0, T_LENGHT - 1)] + ' ' + surnames[selfRandom(0, T_LENGHT - 1)],
      coatColor: cColors[selfRandom(0, T_LENGHT - 1)],
      eyesColor: eColors[selfRandom(0, T_LENGHT - 1)]
    };
  }
  return wizards;
};
var wizards = wizardArr(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COATCOLORS, WIZARD_EYESCOLOR);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
