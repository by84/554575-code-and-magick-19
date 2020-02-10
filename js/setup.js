'use strict';

/* ==================== Change Colors ==================== */

var setupWizard = document.querySelector('.setup-wizard-appearance');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');

var setupFireball = document.querySelector('.setup-fireball-wrap');

var changeWizardCoatColor = function () {
  var coatColor = window.util.getRandArrayElem(window.const.WIZARD_COATCOLORS);
  setupWizardCoat.style.fill = coatColor;
  setupWizard.querySelectorAll('input')[0].value = coatColor;
};
var changeWizardEyesColor = function () {
  var eyeColor = window.util.getRandArrayElem(window.const.WIZARD_EYESCOLOR);
  setupWizardEyes.style.fill = eyeColor;
  setupWizard.querySelectorAll('input')[1].value = eyeColor;
};
var changeWizardFireballColor = function () {
  var fireballColor = window.util.getRandArrayElem(window.const.WIZARD_FIREBALLCOLOR);
  setupFireball.style.cssText = 'background: ' + fireballColor + ';';
  setupFireball.querySelector('input').value = fireballColor;
};

setupWizardCoat.addEventListener('click', function () {
  changeWizardCoatColor();
});

setupWizardEyes.addEventListener('click', function () {
  changeWizardEyesColor();
});

setupFireball.addEventListener('click', function () {
  changeWizardFireballColor();
});

/* ==================== Similar Wizzards ==================== */

window.util.eqLength(window.const.WIZARD_COATCOLORS);
window.util.eqLength(window.const.WIZARD_EYESCOLOR);


var wizardArr = function (names, surnames, cColors, eColors) {
  window.util.eqLength(cColors, eColors);
  var wizards = [];
  for (var j = 0; j < 4; j++) {
    wizards[j] = {
      name: names[window.util.selfRandom(0, window.const.T_LENGHT - 1)] + ' ' + surnames[window.util.selfRandom(0, window.const.T_LENGHT - 1)],
      coatColor: cColors[window.util.selfRandom(0, window.const.T_LENGHT - 1)],
      eyesColor: eColors[window.util.selfRandom(0, window.const.T_LENGHT - 1)]
    };
  }
  return wizards;
};
var wizards = wizardArr(window.const.WIZARD_NAMES, window.const.WIZARD_SURNAMES, window.const.WIZARD_COATCOLORS, window.const.WIZARD_EYESCOLOR);

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

