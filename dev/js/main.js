"use strict";

const btnClick = document.querySelector('.click'),
      btnReset = document.querySelector('.reset'),
      elem = document.querySelector('div');

let animateId,
    count = 0,
    active = true;
let animate = function () {
    animateId = requestAnimationFrame(animate);
    count++;

    if (count <= 300) {
        elem.style.top = count + 'px';
        elem.style.left = count + 'px';
        elem.style.height = 30 + count + "px";
        elem.style.width = 30 + count + "px";
    } else {
        cancelAnimationFrame(animateId);
    }
};


btnClick.addEventListener('click', function () {
    if (active) {
        active = false;
        animateId = requestAnimationFrame(animate);
    } else {
        active = true;
        cancelAnimationFrame(animateId);
    }
});

btnReset.addEventListener('click', function () {
    count = 0;
    elem.style.top = count + 'px';
    elem.style.left = count + 'px';
    elem.style.height = 30 + count + "px";
    elem.style.width = 30 + count + "px";
    active = true;
    cancelAnimationFrame(animateId);
});