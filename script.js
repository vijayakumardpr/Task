document.addEventListener("click", (e) => {
  if (!e.target.matches(".expand-button")) return
  const card = e.target.closest(".card")

  const cardBody = card.querySelector(".card-body")
  if (e.target.innerText === "Expand") {
    cardBody.classList.add("show")
    e.target.innerText = "Collapse"
  } else {
    cardBody.classList.remove("show")
    e.target.innerText = "Expand"
  }
})

const person = [1, 2, 3, 4, 5, 6]

Object.entries(person).forEach(([key, value], index, array) => {
  console.debug([key, value], index, array)
})
