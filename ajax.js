var todos;

function displayTodos() {
    var todoListEl = document.getElementById("todo-list");
    todoListEl.innerHTML = '';
    todos.forEach((todo, index) => {
        todoListEl.innerHTML += '<div>' +
            todo.label +
            ' ' +
            (todo.done ? '&#x2713;' : '&#x2717;') +
            '</div>';
    });
}

function loadTodos() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            todos = JSON.parse(this.responseText);
            displayTodos();
        }
    };
    xhttp.open("GET", "http://abhinav.anikendra.com/todos", true);
    xhttp.send();
}

function addTodo() {
    var inputEl = document.getElementById('input');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            loadTodos();
        }
    };
    xhttp.open("POST", "http://abhinav.anikendra.com/todos", true);
    var newTodo = {label: inputEl.value, status: false};
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(newTodo));
}

loadTodos();