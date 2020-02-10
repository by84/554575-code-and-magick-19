'use strict';

(function () {

  window.util = {
    getMaxElement: function (arr) { // Get max array Element
      var maxElement = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },
    selfRandom: function (min, max) { // get random number between min and max gap
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandArrayElem: function (array) {
      var randArrayElem = array[this.selfRandom(0, array.length - 1)];

      return randArrayElem;
    },
    eqLength: function (someArray) { // make array length equal
      for (var j = 0; j < window.const.T_LENGHT; j++) {
        if (!someArray[j]) {
          someArray[j] = someArray[this.selfRandom(0, j - 1)];
        }
      }
      return someArray;
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === window.const.ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === window.const.ENTER_KEYCODE) {
        action();
      }
    }
  };
})();


