/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const form = document.querySelector("#quiz-form")
const answers = document.querySelectorAll(".answer")
const questions = document.querySelectorAll(".question-item")
const alert = document.querySelector("#alert")

// TODO: 3. Create a submit event listener for the form that does the following.
form.addEventListener("submit", (e) => {
  //    1. Prevent the default behaviour
  e.preventDefault()
  //   questions.forEach((crt) => {
  //     crt.classList.add("incorrect")
  //     crt.classList.remove("correct")
  //   })
  answers.forEach((answer) => {
    //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
    if (answer.checked) {
      const selectedAnswer = answer.value
      //   const questionItem = answer.closest(".question-item")
      //   console.log(questionItem)

      //    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
      //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
      //    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
      if (selectedAnswer === "true") {
        questions.forEach((crt) => {
          crt.classList.add("correct")
          crt.classList.remove("incorrect")
        })

        // questionItem.classList.add("correct")
        // questionItem.classList.remove("incorrect")
      } else {
        questions.forEach((crt) => {
          crt.classList.add("incorrect")
          crt.classList.remove("correct")
        })

        // questionItem.classList.add("incorrect")
        // questionItem.classList.remove("correct")
      }
    }

    //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
    //    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
  })
})

// const ele = document.createElement("div")

// setTimeout(() => {
//   ele.innerText = "Hello World"
//   document.body.appendChild(ele)
// }, 1000)
