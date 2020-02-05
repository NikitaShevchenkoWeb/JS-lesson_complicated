"use strict";

var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
document.write(week.join(', '));
document.write("<br>");

for (var _i = 0, _week = week; _i < _week.length; _i++) {
  var item = _week[_i];
  document.write("<br>" + item);
}

document.write("<br><br>");
document.write(week.slice(0, -2) + "<i>," + week.slice(-2) + "</i>");
document.write("<br><br>");
var data = new Date();
document.write("<b>" + week[data.getDay() - 1] + "</b>");