const form = document.querySelector("#form")
const inputs = document.querySelectorAll("input")
const items = document.querySelector(".items")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  inputs.forEach((input) => {
    const inputValue = input.value
    input.value = ""
    const list = document.createElement("div")
    list.innerText = inputValue
    items.appendChild(list)
  })
})
