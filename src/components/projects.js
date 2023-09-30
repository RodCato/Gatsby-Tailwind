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
        <div className="project text-center">
          <h3 className="text-xl font-bold mb-4">Gamer Vault 🎮</h3>
          <a
            href="https://crod.co/gvs"
            target="_blank"
            aria-label="Gamer Vault Demo"
            title="Gamer Vault Demo"
            className="inline-block"
          >
            <StaticImage
              src="../images/GamerVaultbrowsepage.png"
              alt="Gamer Vault website"
              className="mx-auto projectpic"
            />
          </a>
          <div className="project__description text-left mt-4">
            <h2 className="text-2xl font-bold mb-4">
              🎮Welcome to Gamer Vault!🎮
            </h2>
            {/* ... other content ... */}
            <p>
              Immerse yourself in the Gamer Vault demo and explore a project
              that is a true reflection of my technical skills, creativity,
              dedication, and user-focused approach to development! I’m eager to
              connect and discuss how my expertise and Gamer Vault’s innovative
              features can meet and exceed your recruitment needs!
            </p>
          </div>
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
        {/* ... Add your Project 3 code here ... */}
      </div>
    </div>
  )
}

export default projects
