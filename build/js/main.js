"use strict";

var num = 266219;
var str = num + '';
console.log(str.split(''));
var multiplication = 1;

for (var i = 0; i < str.length; i++) {
  multiplication *= +str[i];
}

console.log(multiplication);
var pow = Math.pow(multiplication, 3);
console.log(pow);
pow += '';
console.log(+pow.substring(0, 2));