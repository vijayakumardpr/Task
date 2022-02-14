const form = document.querySelector("#form")
const inputs = document.querySelectorAll("input")
const items = document.querySelector(".items")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const inputValueArray = []
  inputs.forEach((input) => {
    inputValueArray.push(input.value)
    // const inputValue = input.value
    input.value = ""
  })

  const list = document.createElement("div")
  const edit = document.createElement("button")
  const del = document.createElement("button")

  edit.innerText = "Edit"
  del.innerText = "Delete"

  list.innerText = inputValueArray
  items.appendChild(list)
  items.appendChild(edit)
  items.appendChild(del)
})
