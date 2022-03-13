const grid = document.querySelector(".grid")
const template = document.getElementById("card-template")

for (let i = 0; i < 25; i++) {
  grid.append(template.content.cloneNode(true))
}

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((posts) => {
//     grid.innerHTML = ""
//     posts.forEach((post) => {
//       const div = template.content.cloneNode(true)
//       div.querySelector("[data-title]").textContent = post.title
//       div.querySelector("[data-body]").textContent = post.body
//       grid.append(div)
//     })
//   })

console.log(users)
// const grid = document.querySelector(".grid")
// const cardTemplate = document.getElementById("card-template")
// for (let i = 0; i < 10; i++) {
//   grid.append(cardTemplate.content.cloneNode(true))
// }

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((posts) => {

//     posts.forEach((post) => {

//       const div = cardTemplate.content.cloneNode(true)
//       div.querySelector("[data-title]").textContent = post.title
//       div.querySelector("[data-body]").textContent = post.body
//       grid.append(div)
//     })
//   })
