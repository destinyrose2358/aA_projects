let todos = JSON.parse(localStorage.getItem("todos")) || [];
let ul = document.getElementsByClassName("todos")[0];
let form = document.getElementsByClassName("add-todo-form")[0];

function addTodo(event) {
  event.preventDefault();
  let todoInput = document.getElementsByName("add-todo")[0];
  let todo = {"todo": todoInput.value, "done": false};
  todos.push(todo);
  todoInput.value = "";
  populateList(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function populateList(todoList) {
  Array.from(ul.children).forEach(child => ul.removeChild(child));
  todoList.forEach((todo, idx) => {
    let label = document.createElement('label');
    label.textContent = todo.todo;
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = todo.done;
    checkBox.dataset.index = idx;
    let li = document.createElement('li');
    li.appendChild(checkBox);
    li.appendChild(label);
    ul.appendChild(li);
  });
}

function checkDone(event) {
  let checkbox = event.target;
  if (checkbox.tagName === 'INPUT') {
    let todoIndex = checkbox.dataset.index;
    if (checkbox.checked) {
      todos[todoIndex].done = true;
    } else {
      todos[todoIndex].done = false;
    }
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener('submit', addTodo.bind(this));
ul.addEventListener("click", checkDone.bind(this));
populateList(todos);