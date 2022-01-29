const form = document.querySelector("#new-item-form")
const input = document.querySelector("#item-input")
const list = document.querySelector("#list")
const completedTask = document.querySelector("#remove-list")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const item = document.createElement("div")
  item.innerText = input.value
  item.classList.add("list-item")
  list.appendChild(item)

  input.value = ""

  item.addEventListener("click", () => {
    list.removeChild(item)
    completedTask.append(item)
  })
})
