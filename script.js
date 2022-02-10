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
