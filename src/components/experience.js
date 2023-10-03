import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Experience = () => {
  return (
    <>
      <div id="experience" className="section experience mt-8">
        <h2 className="section__title">💼 Experience</h2>

        <div className="mb-6 flex justify-center items-center">
          <a
            href="https://crod.co/glu"
            target="_blank"
            aria-label="LoadUp"
            title="goloadup.com"
            className="inline-block"
          >
            <StaticImage
              src="../images/loadup.png"
              alt="LoadUp logo"
              className="projectpic w-full max-w-md mb-4"
            />
          </a>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Software Engineer - Specializing in Ruby on Rails, Web Development &
            Agile Methodologies
          </h3>
          <p className="mb-2 text-gray-600">LoadUp · Internship</p>
          <p className="mb-4 text-gray-600">Jul 2023 - Present · 3 mos</p>
          <p className="mb-4 text-gray-600">
            Atlanta, Georgia, United States · Remote
          </p>
          <p className="mb-4">
            As a Software Engineer at LoadUp, I contributed to the development
            and enhancement of the Customer, Loader, and Admin applications:
            <ul className="list-disc pl-5 mt-2">
              <li>
                Application Contribution: Assisted in refining LoadUp's primary
                applications, supporting the interaction between loaders and
                customers in the junk removal process.
              </li>
              <li>
                Mobile App Support: Aided in adapting the Loader and Customer
                apps for mobile platforms, ensuring functionality and
                accessibility.
              </li>
              <li>
                Technical Assistance: Supported backend development using Ruby
                on Rails, contributing to application stability and performance.
              </li>
              <li>
                Frontend Collaboration: Worked with the team using Tailwind CSS
                to achieve responsive and intuitive UI/UX designs.
              </li>
              <li>
                Mobile Integration: Collaborated in integrating Turbo Native,
                helping bridge web applications with native mobile
                functionalities.
              </li>
              <li>
                Team Collaboration: Participated in an agile development
                environment, working alongside cross-functional teams to iterate
                and refine based on feedback.
              </li>
            </ul>
          </p>
          <p className="mb-4">
            In my role, I focused on enhancing specific features and
            functionalities, ensuring LoadUp's digital platforms provided a
            smooth experience for both loaders and customers.
          </p>
          <p className="font-semibold">Skills:</p>
          <p className="mb-4">
            Leadership · Problem Solving · Adaptation · Back-End Web Development
            · Software Development · Application Programming Interfaces (API) ·
            GitHub · Mobile Applications · GatsbyJS · Tailwind CSS · GraphQL ·
            Cascading Style Sheets (CSS) · Git · Programming · Ruby on Rails ·
            React.js · Node.js · PostgreSQL · Rails · Ruby
          </p>
        </div>
      </div>
    </>
  )
}

export default Experience
