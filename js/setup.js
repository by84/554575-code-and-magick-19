'use strict';
(function () {

  var userDialog = document.querySelector('.setup');
  // userDialog.classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.const.T_LENGHT / 2; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 30 auto; padding:30px; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);

    node.addEventListener('click', function () {
      node.classList.add('hidden');
    });

  };
  // if (window.dialog.flagD == true) {
  //   console.log('popup is opened')
  // }
  window.backend.load(successHandler, errorHandler);

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

  /* ============================================== */

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    var submitButton = userDialog.querySelector('.setup-submit');
    submitButton.textContent = 'Данные отправляются...';
    submitButton.disabled = true;

    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
      submitButton.textContent = 'Сохранить';
      submitButton.disabled = false;
    });
    evt.preventDefault();
  });
})();
