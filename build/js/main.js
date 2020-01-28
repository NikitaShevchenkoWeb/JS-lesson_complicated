"use strict";

var myStr = 0;

var myF = function myF(str) {
  if (typeof str == 'string') {
    str.trim();
    str.slice(0, 30);
    var newStr = str.slice(0, 30);

    if (newStr.length >= 30) {
      newStr += " ...";
    }

    return newStr;
  } else return "Не строка";
};

console.log(myF(myStr));