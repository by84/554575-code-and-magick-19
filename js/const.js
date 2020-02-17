'use strict';
(function () {
  var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLCOLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var T_LENGHT = 8;
  var TIMEOUT_IN_MS = 10000;
  // var ESC_KEY = 'Escape';
  // var ENTER_KEY = 'Enter';
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 29;
  var FONT_GAP = 15;
  var TEXT_WIDTH = 70;
  var BAR_WIDTH = 40;
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SEND = 'https://js.dump.academy/code-and-magick/';
  window.const = {
    WIZARD_COATCOLORS: WIZARD_COATCOLORS,
    WIZARD_EYESCOLOR: WIZARD_EYESCOLOR,
    WIZARD_FIREBALLCOLOR: WIZARD_FIREBALLCOLOR,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    T_LENGHT: T_LENGHT,
    TIMEOUT_IN_MS: TIMEOUT_IN_MS,
    // ESC_KEY: ESC_KEY,
    // ENTER_KEY: ENTER_KEY,
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
    CLOUD_X: CLOUD_X,
    CLOUD_Y: CLOUD_Y,
    GAP: GAP,
    FONT_GAP: FONT_GAP,
    TEXT_WIDTH: TEXT_WIDTH,
    BAR_WIDTH: BAR_WIDTH,
    URL_LOAD: URL_LOAD,
    URL_SEND: URL_SEND
  };
})();
