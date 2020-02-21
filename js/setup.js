'use strict';
(function () {

  var userDialog = document.querySelector('.setup');
  // userDialog.classList.remove('hidden');

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
