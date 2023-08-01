import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons"
import ThemeToggle from "./themetoggle"; // Import the ThemeToggle component


const Header = ({ siteTitle }) => (
  <nav class="sticky-nav shadow-5-strong">
    <header className="header center">
      <h2>
        <a href="https://github.com/RodCato" class="link">
          CR.
        </a>
      </h2>
      <nav class="nav center">
        <ul class="nav__list center">
          <li class="nav__list-item">
            <a class="link link--nav" href="#projects">
              🛠️ Projects
            </a>
          </li>
          <li class="nav__list-item">
            <a class="link link--nav" href="#skills">
              🧰 Skills
            </a>
          </li>
          <li class="nav__list-item">
            <a class="link link--nav" href="#contact">
              💻 Contact
            </a>
          </li>
          <li class="nav__list-item">
            <a class="link link--nav" href="https://www.catalinorodriguez.com">
              📝 Blog
            </a>
          </li>
        </ul>
        <ThemeToggle />
        

        <button
          type="button"
          aria-label="toggle navigation"
          className="btn btn--icon nav__hamburger"
        >
          <FontAwesomeIcon icon={faBars} aria-hidden="true" />{" "}
        </button>
      </nav>
    </header>
  </nav>
)

export default Header
