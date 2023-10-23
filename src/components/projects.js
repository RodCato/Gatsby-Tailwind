import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import { StaticImage } from "gatsby-plugin-image"
import Video from "./video"
// import GvLessons from "../pages/gvlessons"
import { Link } from "gatsby"

const projects = () => {
  return (
    <div id="projects" className="section projects">
      <h2 className="section__title">🛠️ Projects</h2>

      <div className="projects__grid">
        {/* Project 2 */}
        <div className="project text-center">
          <h3 className="text-xl font-bold mb-4">Gamer Vault 🎮</h3>

          <Video />

          {/* ...Other components and HTML below... */}

          <div className="project__description text-left mt-4">
            <h2 className="text-2xl font-bold mb-4 text-center underline">
              <a
                href="https://crod.co/gvs"
                target="_blank"
                rel="noreferrer"
                aria-label="Gamer Vault Demo"
                title="Gamer Vault Demo"
                className="inline-block font-bold underline"
              >
                🕹️ Welcome to GamerVault{" "}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </h2>

            <p>
              As the enthusiastic Tech Lead of <strong>Gamer Vault</strong>, I’m
              excited to present an application that is not only robust and
              functional but also a joy for all gamers to use! 🌟
            </p>
            <br />
            <h3 class="text-center underline">Why You’ll Love Gamer Vault?</h3>
            <p>
              🕹️Effortless CRUD Operations: Gamer Vault allows users to smoothly
              create, read, update, and delete data with no hassle, providing a
              seamless experience for all.
            </p>
            <p>
              🕹️Secure Access: With the integration of JWT and Devise, Gamer
              Vault ensures that user authentication and authorization are
              secure, reliable, and user-friendly!
            </p>
            <p>
              🕹️Instant Game Searches: Just type(or use{" "}
              <strong class="underline">Voice Search</strong>, which is even
              faster!!) and go! Our efficient API integration allows for instant
              access to a wide array of games with just a simple search term.
            </p>
            <p>
              🕹️Your Personal Game Vault: Discover a game that brings back fond
              memories? With Gamer Vault, you can select and save any game to
              your personal "vault", allowing you to revisit and relive those
              cherished gaming moments at any time!
            </p>
            <br />
            <h3 class="text-center underline">Demo Ready & Fully Functional</h3>
            <p>
              Dive in and experience the magic with our 100% functional demo!
              Gamer Vault isn’t just a tech demonstration; it’s a living example
              of a project built with passion, precision, and a keen
              understanding of both user needs and the latest tech trends.
              Immerse yourself in the Gamer Vault demo and explore a project
              that is a true reflection of my technical skills, creativity,
              dedication, and user-focused approach to development!
            </p>
            <br />
            <h3 class="text-center underline">Why Recruit Me?</h3>
            <p>
              🕹️Tech-Savvy Leader: As the guiding tech force behind Gamer Vault,
              I’ve not only led but also learned, adapted, and innovated at
              every step.
            </p>
            <p>
              🕹️User-Centric Developer: Gamer Vault is designed with users at
              its core, ensuring an interface and experience that are intuitive,
              enjoyable, and gamer-friendly.
            </p>
            <p>
              🕹️Detail-Oriented Professional: From the initial concept to the
              final product, my commitment to detail and excellence have been
              unwavering and evident in every aspect of Gamer Vault.
            </p>
            <br />
            <Link
              to="https://catalinorodriguez.com/2023/10/22/gamer-vault-lessons-learned/"
              className="underline"
            >
              Read more about my lessons learned on my blog 📖
            </Link>
          </div>
          <ul className="project__stack">
            <li className="project__stack-item">Rails</li>
            <li className="project__stack-item">JWT</li>
            <li className="project__stack-item">Devise</li>
            <li className="project__stack-item">React</li>
          </ul>

          <a
            href="https://crod.co/github"
            aria-label="source code"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://crod.co/gvs"
            aria-label="live preview"
            className="link link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>

        {/* Project 3 */}
        {/* ... placeholder for Project 2 code... */}
      </div>
    </div>
  )
}

export default projects
