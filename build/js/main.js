"use strict";

var lang = prompt('Укажите язык (ru/en)');

if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
  console.log('Что то пошло не так');
}

switch (lang) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;

  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;

  default:
    console.log('Что то пошло не так');
    break;
}

var ru = [['Понедельник', 'Вторник', 'Среда'], ['Четверг', 'Пятница', 'Суббота'], ['Воскресенье']];
var en = [['Monday', 'Tuesday', 'Wednesday'], ['Thursday', 'Friday', 'Saturday'], ['Sunday']];
console.log(eval(lang)); // п.2

var namePerson = prompt('Укажите имя:'),
    result;
result = namePerson === 'Артем' ? 'Директор' : namePerson === 'Максим' ? 'Преподаватель' : 'Студент';
console.log(result);