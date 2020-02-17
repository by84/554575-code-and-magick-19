'use strict';

(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupDialogElement.querySelector('.setup-close');
  var focusWizardName = document.querySelector('.setup-user-name');

  /* ==================== Open-Close ==================== */

  var onPopupEscPress = function (evt) {
    if (evt.target !== focusWizardName) {
      window.util.isEscEvent(evt, closePopup);
    }
  };
  var openPopup = function () {

    setupDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    // window.flagD = true;
    window.memoryCoords = {
      x: setupDialogElement.offsetLeft,
      y: setupDialogElement.offsetTop
    };
  };

  var closePopup = function () {
    setupDialogElement.classList.add('hidden');
    // window.flagD = false;
    document.removeEventListener('keydown', onPopupEscPress);
    setupDialogElement.style.top = window.memoryCoords.y + 'px';
    setupDialogElement.style.left = window.memoryCoords.x + 'px';

  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);

  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  /* ==================== Drag'n'Drop ==================== */

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


})();
