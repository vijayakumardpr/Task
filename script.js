const form = document.querySelector("#new-todo-form")
const list = document.querySelector("#list")
const input = document.querySelector("#todo-input")
const template = document.querySelector("#list-item-template")

let todos = load() // []
todos.forEach(renderTodos)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const todoName = input.value
  if (todoName === "") return
  todos.push(todoName)
  input.value = ""
  renderTodos(todoName)
  save()
})

function renderTodos(todoName) {
  const templateClone = template.content.cloneNode(true)
  const textElement = templateClone.querySelector("[data-list-item-text]")
  textElement.textContent = todoName
  list.appendChild(templateClone)
}

function save() {
  localStorage.setItem("AdvanceTodo", JSON.stringify(todos))
  console.log(todos)
}

function load() {
  const savedItems = localStorage.getItem("AdvanceTodo")
  return JSON.parse(savedItems) || []
}
