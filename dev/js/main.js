let dashBoard = document.querySelectorAll('div');
let arrDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


function newChar(elem) {
    return elem < 10 ? "0" + elem : elem;
}

function newNameHours(elem) {
    let hours = [' час', ' часов', ' часа'];
    if (elem == 1 || elem == 21) {
        return newChar(elem) + hours[0];
    } else if((elem >= 5 && elem <= 20) || elem == 0) {
        return newChar(elem) + hours[1];
    } else if(elem >= 0 && elem <= 4) {
        return newChar(elem) + hours[2];
    }
}

function newNameMinutes(elem) {
    let minutes = [' минута', ' минут', ' минуты'],
        newElem = elem.toString().slice(-1);

    if (newElem == 1) {
        return newChar(elem) + minutes[0];
    } else if(((newElem >= 5) && (newElem <= 9)) || (newElem == 0)) {
        return newChar(elem) + minutes[1];
    } else if(newElem >= 2 && newElem <= 4) {
        return newChar(elem) + minutes[2];
    }
}

function newNameSeconds(elem) {
    let seconds = [' секунда', ' секунд', ' секунды'],
        newElem = elem.toString().slice(-1);

    if (newElem == 1) {
        return newChar(elem) + seconds[0];
    } else if(((newElem >= 5) && (newElem <= 9)) || (newElem == 0)) {
        return newChar(elem) + seconds[1];
    } else if(newElem >= 2 && newElem <= 4) {
        return newChar(elem) + seconds[2];
    }
}

let newDate = new Date();
dashBoard[0].textContent =
    `Сегодня ${arrDay[newDate.getDay()]}, 
    ${newChar(newDate.getDate())} ${arrMonth[newDate.getMonth()]} ${newDate.getFullYear()} года, 
    ${newNameHours(newDate.getHours())} ${newNameMinutes(newDate.getMinutes())} ${newNameSeconds(newDate.getSeconds())}`;

dashBoard[1].textContent =
    `${newChar(newDate.getDate())}.${newChar(newDate.getMonth()+1)}.${newDate.getFullYear()} - 
    ${newChar(newDate.getHours())}:${newChar(newDate.getMinutes())}:${newChar(newDate.getSeconds())}`;



function timeUpdate() {
    let newDate = new Date();
    dashBoard[2].textContent = `${newChar(newDate.getDate())}.${newChar(newDate.getMonth()+1)}.${newDate.getFullYear()} - 
                                ${newChar(newDate.getHours())}:${newChar(newDate.getMinutes())}:${newChar(newDate.getSeconds())}`;
}
setInterval(timeUpdate, 1000);