let div = document.getElementsByClassName("div-id")
let divTwo = document.querySelectorAll(".div-id")

// div = [...div]

console.log(div)
console.log(divTwo)

div.forEach((e) => (e.style.color = "green"))
