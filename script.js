function findLongestWordLength(str) {
  return str.split(" ").map((element) => {
    return element.split("").length
  })
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
)

let arr = [1, 2, 3, 4]
console.log(arr)

console.log(Math.max(...arr))
