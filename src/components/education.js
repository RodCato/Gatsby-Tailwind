import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Education = () => {
  return (
    <>
      <div id="education" className="section education mt-8">
        <h2 className="section__title">🎓 Education</h2>

        <div className="mb-6 flex justify-center items-center">
          {/* <a
            href="https://your-link-to-learn-academy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LEARN Academy"
            title="learn-academy.org"
            className="inline-block"
          >
            <StaticImage
              src="../images/Learn.jpeg"
              alt="LEARN Academy logo"
              className="projectpic w-full max-w-md mb-4"
            />
          </a> */}
          <a
            href="https://crod.co/LA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LEARN Academy"
            title="learn-academy.org"
            className="thumbnail"
          >
            <StaticImage
              src="../images/RodBigCert.png"
              alt="LEARN Academy Certificate"
              className="projectpic w-full max-w-md mb-2"
            />
          </a>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Full Stack Developer at LEARN Academy - JS, React, Ruby on Rails,
            PostgreSQL
          </h3>
          <p className="mb-2 text-gray-600">LEARN Academy · Full-time</p>
          <p className="mb-4 text-gray-600">
            Apr 2023 - Aug 2023 · 5 mos · Remote
          </p>
          <p className="mb-4">
            Completed a rigorous 640 hour Full Stack Web Developer Bootcamp at
            LEARN Academy. The program encompassed:
            <ul className="list-disc pl-5 mt-2">
              <li>
                Mastered core JavaScript concepts, data structures, and
                functionalities.
              </li>
              <li>
                Crafted intricate user interfaces and managed state with React.
              </li>
              <li>
                Delved into backend development with Rails, exploring MVC
                architecture, Active Record, and Postgresql management.
              </li>
              <li>
                Refined tech resumes, enhanced online presence, and honed
                networking techniques during a dedicated professional
                development week.
              </li>
              <li>
                Developed and implemented secure user authentication and
                authorization in Rails Backend based React Frontend applications using Devise
                gem and JWT, supporting Full CRUD operations.
              </li>
              <li>
                Spearheaded a Capstone Project as <span className="underline"><a href="https://crod.co/TL" alt="tech-lead">Tech Lead</a></span>, developing and deploying a
                Full-Stack application on Render with Full CRUD functionality
                and JWT authentication, following agile and scrum methodologies.
              </li>
            </ul>
            <strong>
              ✨ Recognized as MVP by peers for outstanding performance and
              contributions.👏🏽
            </strong>
          </p>
          <p className="font-semibold">Skills:</p>
          <p className="mb-4">
            Interpersonal Communication · Unit Testing · Team Building ·
            Leadership · Problem Solving · Back-End Web Development · Software
            Development · API · GitHub · CSS · Git · JavaScript · Programming
          </p>
        </div>
      </div>
    </>
  )
}

export default Education
