const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector(".list")
const count = document.querySelector(".count")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const inputValue = input.value

  if (inputValue.trim() === "") return
  const item = document.createElement("span")
  const delBtn = document.createElement("button")
  const element = document.createElement("div")
  element.classList.add("sub-container")
  item.classList.add("item")
  item.innerText = inputValue
  delBtn.innerText = "Delete"
  delBtn.classList.add("delete")

  element.appendChild(item)
  element.appendChild(delBtn)
  list.appendChild(element)

  input.value = ""

  delBtn.addEventListener("click", () => {
    element.removeChild(item)
    element.removeChild(delBtn)
    list.removeChild(element)
  })
})

// let array = []

// array.push(...array, "vijay")
// array.push("vijay")

// console.log(array.length)
