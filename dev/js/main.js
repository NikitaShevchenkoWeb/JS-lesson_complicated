"use strict";

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

document.write(week.join(', '));


document.write("<br>");
for (let item of week) {
    document.write("<br>" + item)
}


document.write("<br><br>");
document.write(week.slice(0, -2) + "<i>," + week.slice(-2) + "</i>");


document.write("<br><br>");
let data = new Date();
document.write("<b>" + week[data.getDay()-1] + "</b>");