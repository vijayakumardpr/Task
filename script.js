function greetings(name) {
  let date = new Date()
  let hours = date.getHours() % 12
  let format = date.getHours()
  format = format > 13 ? "PM" : "AM"
  let minutes = date.getMinutes()

  let timeOfDay

  if (hours >= 4 && hours <= 11 && format === "AM") {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 5 && format === "PM") {
    timeOfDay = "afternoon"
  } else if (hours >= 5 && hours < 8 && format === "PM") {
    timeOfDay = "evening"
  } else if (hours >= 8 && hours < 4 && format === "PM") {
    timeOfDay = "night"
  }

  return `Good ${timeOfDay}, ${name}!`
}
