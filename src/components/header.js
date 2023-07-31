import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
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

      <button type="button" aria-label="toggle theme" class="btn btn--icon">
        <FontAwesomeIcon icon={faMoon} aria-hidden="true" id="btn-theme" />
      </button>

      <button
        type="button"
        aria-label="toggle navigation"
        class="btn btn--icon nav__hamburger"
      >
        <FontAwesomeIcon icon={faBars} aria-hidden="true" />{" "}
      </button>
    </nav>
  </header>
)

export default Header
