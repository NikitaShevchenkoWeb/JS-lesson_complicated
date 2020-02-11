let addNewWork = document.querySelector('#add');

function add() {
    let todoUl = document.querySelectorAll('.todo'),
        todoLi = document.querySelectorAll('.todo-item'),
        headerInput = document.querySelector('.header-input'),
        todoButtons = document.querySelector('.todo-buttons');

    let addTodo = todoLi[0].cloneNode(true);
    addTodo.textContent = headerInput.value;
    addTodo.style.display = 'block';

    let addTodoBtn  = todoButtons.cloneNode(true);
    addTodo.appendChild(addTodoBtn);

    todoUl[0].appendChild(addTodo);
}

function addCheck(target) {
    let todoUl = document.querySelectorAll('.todo');

    let a = target.parentNode;
    let b = a.parentNode;

    todoUl[1].appendChild(b);
}

function addUnCheck(target) {
    let todoUl = document.querySelectorAll('.todo');

    let a = target.parentNode;
    let b = a.parentNode;

    todoUl[0].appendChild(b);
}


function remove(click) {
    click.remove();
}

function convert(target) {
    let a = target.parentNode;
    let b = a.parentNode;

    remove(b);
}

function convertCompleted(target) {
    if (target.getAttribute('class') === 'todo-complete') {
        let a = target.parentNode;
        let b = a.parentNode;
        let c = b.parentNode;

        let attribute = c.getAttribute('class');
        return attribute;
    } else return false;
}


addNewWork.addEventListener('click', function (e) {
    e.preventDefault();
    add();
});

document.addEventListener('click', function (e) {
    if ((e.keyCode == 13) || true) {
        let active = document.activeElement;

        let attributeLi = convertCompleted(active);

        let attribute = active.getAttribute('class');

        if (attribute === 'todo-remove') {
            convert(active);
        } else if ((attribute === 'todo-complete') && (attributeLi === 'todo todo-completed')) {
            addUnCheck(active);
        } else if (attribute === 'todo-complete') {
            addCheck(active);
        }
    }
});


window.onload = function() {
    if ((localStorage.getItem('todoList') === null) || (localStorage.getItem('todoList') === "")){
        let todoUl = document.querySelectorAll('.todo');

        localStorage.clear();
        localStorage.setItem('todoList', JSON.stringify(todoUl[0].innerHTML));
        localStorage.setItem('todoList2', JSON.stringify(todoUl[1].innerHTML));

    } else if ((localStorage.getItem('todoList') !== null) || (localStorage.getItem('todoList') !== "")) {
        let todoListComplete =  JSON.parse(localStorage.getItem("todoList"));
        let todoListCompleted =  JSON.parse(localStorage.getItem("todoList2"));

        let todoUl = document.querySelectorAll('.todo');
        todoUl[0].innerHTML = todoListComplete;
        todoUl[1].innerHTML = todoListCompleted;
    } else {
        localStorage.clear();
    }
};


window.onunload = function () {
    let todoUl = document.querySelectorAll('.todo');

    localStorage.clear();
    localStorage.setItem('todoList', JSON.stringify(todoUl[0].innerHTML));
    localStorage.setItem('todoList2', JSON.stringify(todoUl[1].innerHTML));
};