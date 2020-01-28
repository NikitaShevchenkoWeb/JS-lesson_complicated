"use strict";

let myStr = 0;

const myF = function (str) {
    if ((typeof str) == 'string') {
        str.trim();

        str.slice(0,30);
        let newStr = str.slice(0,30);

        if (newStr.length >= 30) {newStr += " ..."}

        return newStr;
    }
    else return "Не строка";
};

console.log(myF(myStr));

