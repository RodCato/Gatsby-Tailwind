import * as React from "react"
// import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import ThemeToggle from "./themetoggle" // Import the ThemeToggle component

const Header = () => {
  const [showNav, setShowNav] = React.useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <>
      <nav className="sticky-nav shadow-5-strong">
        <header className="header center relative">
          <div className="flex items-center">
            <h2>
              <a href="https://github.com/RodCato" className="link">
                CR.
                <span
                  className="absolute top--3 left-1 -ml-2 -mt-2 text-lg transform -rotate-12"
                  style={{ lineHeight: ".5" }}
                >
                  👑
                </span>
              </a>
            </h2>
          </div>

          <div className="nav-container">
            <nav className={`nav center ${showNav ? "display-nav-list" : ""}`}>
              <ul
                className={`nav__list center ${
                  showNav ? "display-nav-list" : ""
                }`}
              >
                <li className="nav__list-item">
                  <a className="link link--nav" href="#experience">
                    💼 Experience
                  </a>
                </li>
                <li className="nav__list-item">
                  <a className="link link--nav" href="#education">
                    🎓 Education
                  </a>
                </li>
                <li className="nav__list-item">
                  <a className="link link--nav" href="#projects">
                    🛠️ Projects
                  </a>
                </li>
                <li className="nav__list-item">
                  <a className="link link--nav" href="#skills">
                    🧰 Skills
                  </a>
                </li>
                <li className="nav__list-item">
                  <a className="link link--nav" href="#contact">
                    📧 Contact
                  </a>
                </li>

                {/* <li className="nav__list-item">
                  <a
                    className="link link--nav"
                    href="https://www.catalinorodriguez.com"
                  >
                    📝 Blog
                  </a>
                </li> */}
              </ul>
              <ThemeToggle />
            </nav>

            <button
              type="button"
              aria-label="toggle navigation"
              className={`btn btn--icon nav__hamburger ${
                showNav ? "open" : ""
              }`}
              onClick={toggleNav}
            >
              <FontAwesomeIcon
                icon={faBars}
                aria-hidden="true"
                className="font-extrabold"
              />
            </button>
          </div>
        </header>
      </nav>
    </>
  )
}

export default Header
