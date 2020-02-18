"use strict";

function DomElement(selector, width, height, bg, fontSize, pos) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.pos = pos;
}

DomElement.prototype.create = function () {
    let newElem = document.createElement('div'),
        body = document.querySelector('body'),
        str = this.selector.charAt(0),
        nameClassID = this.selector.substring(1);

    if (str === '.') {
        newElem.className = nameClassID;
        newElem.innerHTML = "Hello!";
        body.appendChild(newElem);

    } else if (str === '#') {
        newElem.id = nameClassID;
        newElem.innerHTML = "Hello!";
        body.appendChild(newElem);
    }
};

DomElement.prototype.newStyle = function () {
  let elem = document.querySelector('div');
  if (elem) {
      elem.style.cssText = 'width: ' + this.width + ';' + 'height: ' + this.height + ';' +
          'background: ' + this.bg + ';' + 'font-size: ' + this.fontSize + ';' + 'position: ' + this.pos + ';'
  }
};


function newElem(selector, width, height, bg, fontSize) {
    DomElement.apply(this, arguments);
}

newElem.prototype = Object.create(DomElement.prototype);



document.addEventListener('DOMContentLoaded', function () {
    let countTop = 0,
        countLeft = 0;

    let test = new newElem('.class', '100px', '100px', 'green', '30px', 'absolute');

    test.create();
    test.newStyle();

    const elem = document.querySelector('div');
    document.addEventListener('keydown',function(event) {

        event = event || window.event;

        if (event.keyCode == '38') {
            // up arrow
            countTop -= 10;
            elem.style.top = countTop + 'px';
        }
        else if (event.keyCode == '40') {
            // down arrow
            countTop += 10;
            elem.style.top = countTop + 'px';
        }
        else if (event.keyCode == '37') {
            // left arrow
            countLeft -= 10;
            elem.style.left = countLeft + 'px';
        }
        else if (event.keyCode == '39') {
            // right arrow
            countLeft += 10;
            elem.style.left = countLeft + 'px';
        }
    });
});