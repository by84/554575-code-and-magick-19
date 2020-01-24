'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 36;
var barWidth = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
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

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  //ctx.fillText('Ура вы победили! \nСписок результатов: ');

  var maxTime = getMaxElement(times);
  //ctx.rotate(90 * Math.PI / 180);
  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);

  }

};

