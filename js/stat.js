'use strict';
 window.renderStatistics = function (ctx, names, times) {
   var max = Math.max.apply(null, times);
   var histogramHeight = 150;
   var step = histogramHeight / (max - 0);
   var barWidth = 40;
   var indent = barWidth + 50;
   var initialX = 140;
   var initialY = 260;
   var indentAfterColumn = 20;
   var indentBeforeColumn = 10;

   var getRandom = function (min, max) {
     max = 0.9;
     min = 0.1;
     return (Math.random() * max + min).toFixed(1);
   };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  for (var i = 0; i < times.length; i++) {
    var barHeight = initialY - Math.floor(times[i]) * step - indentAfterColumn;

    ctx.fillStyle = names[i] == 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + getRandom() + ')';
    ctx.fillRect(initialX + indent * i, barHeight, barWidth, Math.floor(times[i]) * step);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + indent * i, initialY);
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, barHeight - indentBeforeColumn);
  }
};
