import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div className="about center">
      <h1 className="font-bold">
        🪄 Hi, I am <span className="about__name">Catalino.</span>
      </h1>
      <StaticImage
        src="../images/bluebgprofile.png"
        alt="profile pic"
        className="profilepic"
      />
      <h2 className="about__role">✨ A Software Engineer 💻</h2>
      <p class="about__desc">
        👋🏽 My name is Catalino Rodriguez (aka C Rod), and I am a US Army Combat
        Veteran🪖. Currently, I am expanding my skill set as a Software Engineer
        at
        <a
          href="https://crod.co/glu"
          target="_blank"
          alt="Load Up"
          title="Load Up"
        >
          <span> Load Up </span>
        </a>
        as an intern. I bring a unique blend of problem-solving skills,
        creativity, and real-world experience to the table. With a passion for
        helping others, I thrive on finding innovative solutions that address
        the needs of both clients and end-users. Through my military background
        and growth mindset I have honed my ability to work well under pressure,
        adapt to rapidly changing environments, and collaborate effectively with
        diverse teams. I am excited to apply my technical expertise and
        dedication to creating impactful web solutions that make a difference.
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
