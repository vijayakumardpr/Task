const form = document.querySelector("#form")
const button = document.querySelector("button")
const input = document.querySelector("input")
const items = document.querySelector(".items")
const completedTask = document.querySelector(".completed")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputValue = input.value

  const list = document.createElement("div")
  const btn = document.createElement("button")

  list.innerText = inputValue
  btn.innerText = "Delete"

  list.classList.add("list-item")
  items.appendChild(list)
  list.appendChild(btn)

  input.value = " "

  btn.addEventListener("click", () => {
    completedTask.appendChild(list)
  })
})
