function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="nav-logo" src="./react-logo.png" />
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Body() {
  return (
    <div className="main">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2022 Bob development. All rights reserved</p>
    </footer>
  )
}

function ChallageTwo() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

ReactDOM.render(<ChallageTwo />, document.getElementById("root"))

let string = "  Bob    Loves  Alice   "

function reverseWords(s) {
  const removeSpace = s.trim()
  const reverseTheWords = removeSpace.split(" ").filter((k) => {
    if (k) {
      return k
    }
  })
  const a = reverseTheWords.reverse().toString()
  const removeComma = a.replace(/,/g, " ")
  return removeComma
}

console.log(reverseWords(string))

const a = string.split(" ").filter((k) => {
  if (k) {
    return k
  }
})

console.log(a)
