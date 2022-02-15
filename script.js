function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <img src="./react-logo.png" width="60px" />
        <ul className="menu">
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
    <div>
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
    <footer>
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
