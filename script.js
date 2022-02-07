const buttons = document.querySelectorAll("button")

document.addEventListener(
  "click",
  () => {
    console.log("Clicked Document")
  },
  { capture: false }
)

document.body.addEventListener(
  "click",
  () => {
    console.log("Clicked Body")
  },
  { capture: false }
)
buttons.forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      console.log("Clicked Button")
    },
    { capture: false }
  )
})
