import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const projects = () => {
  return (
    <div id="projects" className="section projects">
      <h2 className="section__title">
        🛠️ Projects
      </h2>

      <div className="projects__grid">
        {/* Project 1 */}
        <div className="project">
          <h3>Find the Loot (game)🎫</h3>
          <a
            href="https://rodcato.github.io/jumpstart-treasure-hunt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Demo"
            title="Demo"
          >
            <img
              src="screenshot.png"
              alt="Find the Loot screenshot"
              className="projectpic"
            />
          </a>
          <p className="project__description">
            Find the loot is a game developed in Html, CSS and Javascript.
            Although a mostly static game, through the use of JavaScript I was
            able to make it interactive. I added the ability for the game to
            keep track of your score and incorporate modal functionality to let
            the end-users know if they won or lost the game.
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">Html</li>
            <li className="project__stack-item">CSS</li>
            <li className="project__stack-item">Javascript</li>
          </ul>

          <a
            href="https://github.com/RodCato/jumpstart-treasure-hunt"
            aria-label="source code"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
          <a
            href="https://rodcato.github.io/jumpstart-treasure-hunt/"
            aria-label="live preview"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
<FontAwesomeIcon icon={faGithub} />          </a>
        </div>

        {/* Project 2 */}
        <div className="project">
          <h3>Gamer Vault 🎮</h3>
          <a
            href="https://gamer-vault.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gamer Vault Demo"
            title="Gamer Vault Demo"
          >
            <img
              src="GamerVaultbrowsepage.png"
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
        <div className="project">
          <h3>Project 3</h3>
          <img
            src="projects1.jpeg"
            alt="Project 3 Placeholder"
            className="projectpic"
          />
          <p className="project__description">
            This is the placeholder for my 3rd project which is currently a work
            in progress. Once the project is complete I will update as needed to
            provide the links and code to demo.
          </p>
          <ul className="project__stack">
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
            href="https://github.com/RodCato"
            aria-label="live preview"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default projects
