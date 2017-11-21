'use strict';
var renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = barWidth + 50;
  var initialX = 140;
  var initialY = 260;
  var indentAfterColumn = 20;
  var indentBeforeColumn = 10;

  var randomOpacity = function () {
    return (Math.random() * 0.9 + 0.1).toFixed(1);
  };

  for (var j = 0; j < times.length; j++) {

    var fillStyle = 'rgba(255, 0, 0, 1)';
    if (names[j] !== 'Вы') {
      fillStyle = 'rgba(0, 0, 255, ' + randomOpacity() + ')';
    }

    var flooredTime = Math.floor(times[j]);
    var barHeight = initialY - flooredTime * step - indentAfterColumn;

    ctx.fillStyle = fillStyle;
    ctx.fillRect(initialX + indent * j, barHeight, barWidth, flooredTime * step);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[j], initialX + indent * j, initialY);
    ctx.fillText(flooredTime, initialX + indent * j, barHeight - indentBeforeColumn);

  }
};
