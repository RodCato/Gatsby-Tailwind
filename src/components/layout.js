import * as React from "react"
import { Helmet } from "react-helmet-async"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

import Header from "./header"
import "./layout.css"
import About from "./about"
import Projects from "./projects"
import Skills from "./skills"
import Connect from "./connect"
import Footer from "./footer"
import Contact from "./contact"
import previewImage from "../images/preview.png"
import Experience from "./experience"

const Layout = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Helmet
        title="👑CRod's Portfolio"
        meta={[
          {
            property: `og:title`,
            content: "👑CRodDev's Portfolio",
          },
          {
            property: `og:description`,
            content:
              "I'm a Software Engineer with a passion for learning new things, creativity and innovation. I love to build things that make a difference. I hope you enjoy my work!",
          },
          {
            property: `og:image`,
            content: previewImage,
          },
        ]}
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin%20Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Connect />
        <div className="scroll-container fixed bottom-10 right-10 z-50 opacity-30 transition-opacity duration-300 ease-in-out hover:opacity-100">
          <div className="scroll-top bounce">
            <a
              aria-label="Scroll up"
              href="#top"
              onClick={scrollToTop}
              className="text-white bg-blue-500 rounded-full p-3"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
      </main> d fghfg
      <Footer />
    </>
  )
}

export default Layout
