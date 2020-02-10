'use strict';

var barHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + window.const.CLOUD_WIDTH / 2, y + 15);
  ctx.lineTo(x + window.const.CLOUD_WIDTH, y);
  ctx.lineTo(x + window.const.CLOUD_WIDTH - 15, y + window.const.CLOUD_HEIGHT / 2);
  ctx.lineTo(x + window.const.CLOUD_WIDTH, y + window.const.CLOUD_HEIGHT);
  ctx.lineTo(x + window.const.CLOUD_WIDTH / 2, y + window.const.CLOUD_HEIGHT - 15);
  ctx.lineTo(x, y + window.const.CLOUD_HEIGHT);
  ctx.lineTo(x + 15, y + window.const.CLOUD_HEIGHT / 2);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, window.const.CLOUD_X + 10, window.const.CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, window.const.CLOUD_X, window.const.CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', window.const.CLOUD_X + window.const.GAP, window.const.CLOUD_Y + 1.5 * window.const.FONT_GAP);
  ctx.fillText('Список результатов:', window.const.CLOUD_X + window.const.GAP, window.const.CLOUD_Y + 2.7 * window.const.FONT_GAP);

  var maxTime = window.util.getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var chartHeight = (barHeight * times[i]) / maxTime;
    var chartStep = window.const.CLOUD_X + (window.const.GAP + window.const.BAR_WIDTH) * i;

    var randBlue = function () {
      return 'hsl(240, ' + window.util.selfRandom(1, 99) + '%, 50%)';
    };
    ctx.fillText(Math.round(times[i]), 3 * window.const.GAP + chartStep, window.const.TEXT_WIDTH + barHeight - chartHeight);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randBlue();
    }
    ctx.fillRect(3 * window.const.GAP + window.const.CLOUD_X + (window.const.GAP + window.const.BAR_WIDTH) * i, window.const.CLOUD_Y + barHeight - chartHeight + 5 * window.const.FONT_GAP, window.const.BAR_WIDTH, chartHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], 3 * window.const.GAP + chartStep, barHeight + window.const.CLOUD_Y + 2.8 * window.const.GAP);
  }
};

