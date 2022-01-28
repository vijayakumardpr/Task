const grandParent = document.querySelector("#grand-parent")

const children = grandParent.querySelectorAll(".child")

const parentOne = grandParent.querySelector(".parent")

children.forEach((colors) => (colors.style.color = "red"))

parentOne.style.color = "green"
