function findLongestWordLength(str) {
  const arr = []
  str.split(" ").forEach((ele) => arr.push(ele.length))
  return Math.max(...arr)
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
)

let arr = ["ab", "b", "c", "d"]

// console.log(
//   arr.forEach((ele) => {
//     return ele
//   })
// )
// map((element) => {
//   return element.split("").length
// })
