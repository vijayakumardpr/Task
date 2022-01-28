const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
const button = document.querySelector(".count")

increment.addEventListener("click", () => {
  const count = parseInt(button.innerText)
  if (count < 9) {
    button.innerText = `${0}${count + 1}`
  } else {
    button.innerText = count + 1
  }
})

decrement.addEventListener("click", () => {
  const count = parseInt(button.innerText)
  if (count === 0) return alert("reached")
  if (count < 11 && count > 1) {
    button.innerText = `${0}${count - 1}`
  } else {
    button.innerText = count - 1
  }
})
