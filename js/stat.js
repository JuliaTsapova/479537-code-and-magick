var renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 90;
  var initialX = 140;
  var initialY = 260;
  var indentAfterColumn = 20;
  var indentBeforeColumn = 10;

  for (var i = 0; i < times.length; i++) {
    var barHeight = initialY - times[i] * step - indentAfterColumn;

    ctx.fillRect(initialX + indent * i, barHeight, barWidth, times[i] * step);
    ctx.fillText(names[i], initialX + indent * i, initialY);
    ctx.fillText(times[i], initialX + indent * i, barHeight - indentBeforeColumn);

  }
};
