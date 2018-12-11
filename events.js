var todos = [
    { label: "Bring Milk", done: false},
    { label: "Pay mobile bill", done: false},
    { label: "Clean house", done: true},
    { label: "Call home", done: false}
];


function displayTodos() {
    var todoListEl = document.getElementById("todo-list");
    todoListEl.innerHTML = '';
    todos.forEach(todo => {
        todoListEl.innerHTML += '<div>' + 
        todo.label + 
        ' ' + 
        (todo.done ? '&#x2713;' : '&#x2717;') + 
        '</div>';
    });
}

window.addEventListener("load", function() {    
    displayTodos();
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
        setTimeout(function() {
            var inputEl = document.getElementById('input');
            todos.push({label: inputEl.value, done: false });
            displayTodos();
            inputEl.value = '';    
        }, 2000);
    });
});


