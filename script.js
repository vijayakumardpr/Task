const form = document.querySelector("#form")
const inputs = document.querySelectorAll("input")
const items = document.querySelector(".items")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  inputs.forEach((input) => {
    console.log(input.value)
    input.value = ""
  })
})
outer()
function outer() {
  let a = 45
  function inner() {
    console.log(a)
  }
  inner()
}

document.addEventListener("submit", function () {
  console.log("clicked")
})
