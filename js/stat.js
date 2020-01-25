'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 29;
var FONT_GAP = 15;
var TEXT_WIDTH = 70;
var BAR_WIDTH = 40;
var barHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + 15);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH - 15, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - 15);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + 15, y + CLOUD_HEIGHT / 2);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + 1.5 * FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + 2.7 * FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var chartHeight = (barHeight * times[i]) / maxTime;
    var chartStep = CLOUD_X + (GAP + BAR_WIDTH) * i;

    var randBlue = function () {
      var selfRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      return 'hsl(240, ' + selfRandom(1, 99) + '%, 50%)';
    };
    ctx.fillText(Math.round(times[i]), 3 * GAP + chartStep, TEXT_WIDTH + barHeight - chartHeight);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randBlue();
    }
    ctx.fillRect(3 * GAP + CLOUD_X + (GAP + BAR_WIDTH) * i, CLOUD_Y + barHeight - chartHeight + 5 * FONT_GAP, BAR_WIDTH, chartHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], 3 * GAP + chartStep, barHeight + CLOUD_Y + 2.8 * GAP);
  }
};

