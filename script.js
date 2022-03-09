// const draggables = document.querySelectorAll(".draggable")
// const containers = document.querySelectorAll(".container")

// draggables.forEach((draggable) => {
//   draggable.addEventListener("dragstart", () => {
//     draggable.classList.add("dragging")
//   })
//   draggable.addEventListener("dragend", () => {
//     draggable.classList.remove("dragging")
//   })
// })

// containers.forEach((container) => {
//   container.addEventListener("dragover", (e) => {
//     e.preventDefault()
//     const afterElement = getDragAfterElement(container, e.clientY)

//     const draggable = document.querySelector(".dragging")
//     if (afterElement == null) {
//       container.appendChild(draggable)
//     } else {
//       container.insertBefore(draggable, afterElement)
//     }
//   })
// })

// function getDragAfterElement(container, y) {
//   const draggableElement = [
//     ...container.querySelectorAll(".draggable:not(.dragging)"),
//   ]

//   return draggableElement.reduce(
//     (closest, child) => {
//       const box = child.getBoundingClientRect()
//       const offset = y - box.top - box.height / 2
//       if (offset < 0 && offset > closest.offset) {
//         return { offset: offset, element: child }
//       } else {
//         return closest
//       }
//     },
//     { offset: Number.NEGATIVE_INFINITY }
//   ).element
// }

// let isPalindrom = "madam%$"

// let filterInput = isPalindrom.replace(/[^A-Z0-9]/gi, "")

// console.log(filterInput)

// let reverseWord = filterInput.split("").reverse().join("")

// console.log(reverseWord)

// if (filterInput === reverseWord) {
//   console.log(`${isPalindrom} is a palindrom`)
// } else {
//   console.log(`${isPalindrom} is not a palindrom`)
// }

const number = "0 9876543210"

function validateMobile(number) {
  // write your solution here
  let regex = /[ ]/g
  let trimNumber = number.replaceAll(regex, "")
  if (trimNumber.startsWith("+91") && trimNumber.length == 13) {
    return true
  } else if (trimNumber.startsWith("0") && trimNumber.length == 11) {
    return true
  } else if (trimNumber.length == 10) {
    return true
  } else {
    return false
  }
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)

console.log(number.length)

if (number.startsWith("+91")) {
  console.log("true")
}
