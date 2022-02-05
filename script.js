const person = {
  name: "vijayakumar",
  age: 25,
  address: {
    street: "2nd main road",
    city: "India",
  },
}

console.log(person)

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value)
})
