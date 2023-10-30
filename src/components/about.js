import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div className="about center">
      <h1 className="text-3xl sm:text-6xl font-bold mb-6">
        🪄 Hi, I am <span className="about__name">Catalino.</span>
      </h1>

      <StaticImage
        src="../images/crodcartoon.png"
        alt="profile pic"
        className="w-36 h-36 sm:w-60 sm:h-60 profilepic"
      />

      <h2 className="about__role text-2xl sm:text-5xl font-bold">
        ✨ Full Stack Software Engineer 💻
      </h2>
      <p class="about__desc">
        👋🏽 Hey there, I am Catalino (aka C Rod), a US Army Combat Veteran🪖.
        I've carried forward the resilience, adaptability, and team spirit from
        my military days into the tech world.
        <br /> <br />
        As a Software Engineer intern, I've amassed experience in crafting
        impactful web solutions that cater to both clients and end-users.
        <br /> <br />
        Known for my creative problem-solving, I excel under pressure and
        seamlessly collaborate across diverse teams. Driven by a desire to
        innovate and help others, I'm dedicated to harnessing technology to
        create meaningful change.
      </p>
<br />
      <p>
        <a
          href="https://crod.co/recommendations"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my resume"
        >
          <div className="underline">
            📝&nbsp;View Recommendations from my LinkedIn Connects🔗
          </div>
        </a>
      </p>

      <div className="about__contact center">
        <a
          href="https://crod.co/resume"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my resume"
        >
          <span className="btn btn--outline">Resume</span>
        </a>

        {/* Make sure to include Font Awesome stylesheet to display the icons */}
        <a
          href="https://crod.co/github"
          aria-label="github"
          className="link link--icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://crod.co/LI"
          aria-label="linkedin"
          className="link link--icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  )
}

export default About
