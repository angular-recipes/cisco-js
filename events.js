var todos = [
    { label: "Bring Milk", done: false},
    { label: "Pay mobile bill", done: false},
    { label: "Clean house", done: true},
    { label: "Call home", done: false}
];


function displayTodos() {
    var todoListEl = document.getElementById("todo-list");
    todoListEl.innerHTML = '';
    todos.forEach((todo, index) => {
        todoListEl.innerHTML += '<div>' + 
        todo.label + 
        ' ' + 
        (todo.done ? '&#x2713;' : '&#x2717;') + 
        '<button onclick="deleteTodo('+index+')">delete</button>' +
        '<button onclick="toggleStatus('+index+')">toggle</button>' +
        '</div>';
    });
}

function addTodo() {
    var inputEl = document.getElementById('input');
    todos.push({label: inputEl.value, done: false });
    displayTodos();
    inputEl.value = '';    
}

function deleteTodo(i) {
    todos = todos.filter((t, index) => index != i);
    displayTodos();
}

function toggleStatus(i) {
    todos[i].done = !todos[i].done;
    displayTodos();
}

window.addEventListener("load", function() {    
    displayTodos();
});


