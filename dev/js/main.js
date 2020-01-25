"use strict";

let num = 266219;


let str = num + '';
console.log(str.split(''));

let multiplication = 1;

for(let i = 0; i < str.length; i++) {
    multiplication *= +str[i];
}
console.log(multiplication);


let pow = multiplication ** 3;
console.log(pow);


pow += '';
console.log(+pow.substring(0, 2));

