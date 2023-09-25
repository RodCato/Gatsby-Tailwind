import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

const projects = () => {
  return (
    <div id="projects" className="section projects">
      <h2 className="section__title">🛠️ Projects</h2>

      <div className="projects__grid">
        {/* Project 2 */}
        <div className="project">
          <h3>Gamer Vault 🎮</h3>
          <a
            href="https://crod.co/gvs"
            target="_blank"
            aria-label="Gamer Vault Demo"
            title="Gamer Vault Demo"
          >
            <StaticImage
              src="../images/GamerVaultbrowsepage.png"
              alt="Gamer Vault website"
              className="projectpic"
            />
          </a>
          <p className="project__description">
            This is the capstone project from my time at LEARN academy on which
            I served as the tech lead for my team. This is a fully functional
            CRUD application with user authentication / authorization using JWT
            and Devise. The site uses an API to fetch games when a user enters a
            search term. The user can then select a game from the search and
            save it to their "vault". Awesome way to find and save games from
            your past to relive the memories! Demo is 100% functional.
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">Rails</li>
            <li className="project__stack-item">JWT</li>
            <li className="project__stack-item">Devise</li>
            <li className="project__stack-item">React</li>
          </ul>

          <a
            href="https://github.com/RodCato"
            aria-label="source code"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://gamer-vault.onrender.com/"
            aria-label="live preview"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>

        {/* Project 3 */}
      </div>
    </div>
  )
}

export default projects
