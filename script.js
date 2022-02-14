const form = document.querySelector("#form")
const inputs = document.querySelectorAll("input")
const items = document.querySelector(".items")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  inputs.forEach((input) => {
    const inputValue = input.value
    input.value = ""
    const list = document.createElement("div")
    const edit = document.createElement("button")
    const del = document.createElement("button")

    edit.innerText = "Edit"
    del.innerText = "Delete"

    list.innerText = inputValue
    items.appendChild(list)
    items.appendChild(edit)
    items.appendChild(del)
  })
})

let firstName = "vijay"
const person = {
  firstName: "kyle",
  fullName() {
    return this.firstName
  },
}

console.log(person.fullName())
