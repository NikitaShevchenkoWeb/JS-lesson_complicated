"use strict";

console.log('---Пункт №1---');
let arr = [23, 50, 4, 96, 44, 29, 64];
arr.forEach(function (item) {
   let elem = item.toString();

   if ((elem.charAt(0) === '4') || elem.charAt(0) === '2') {
       console.log(item);
   }
});


console.log('---Пункт №2---');
let a = 2;
let b = [];
let newArr = [];
let count = 0;

for (let i = 0; i < 99; i++) {
    b.push(a+i);
}

b.forEach(function (item) {
    for (let i = 1; i <= 100; i++) {

        let num = item / i;

        if (Number.isInteger(num)) {
            count++;
        }

        if (count > 2) {
            count = 0;
            break;
        } else if ((count === 2) && (i === 100)) {
            newArr.push(item);
            count = 0;
            break;
        }

    }

});

newArr.forEach(function (item) {
    console.log(item + ' : Делители этого числа: 1 и ' + item);
});
