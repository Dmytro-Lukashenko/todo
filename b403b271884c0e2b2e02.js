import "./styles/index.css";
import "./index.html";
var todoInput = document.querySelector(".todo-input"),
  todoButton = document.querySelector(".todo-button"),
  todoList = document.querySelector(".todo-list");
function addTodo(t) {
  t.preventDefault();
  var e = document.createElement("li");
  e.classList.add("todo-container");
  var o = document.createElement("span");
  (o.innerText = todoInput.value),
    o.classList.add("todo-text"),
    e.appendChild(o);
  var d = document.createElement("button");
  (d.innerHTML = '<i class="fa-solid fa-check"></i>'),
    d.classList.add("todo-check-button"),
    e.appendChild(d);
  var n = document.createElement("button");
  (n.innerHTML = '<i class="fa-solid fa-trash"></i>'),
    n.classList.add("todo-remove-button"),
    e.appendChild(n),
    todoList.appendChild(e);
}
todoButton.addEventListener("click", addTodo);
