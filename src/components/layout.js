import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
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

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query pageQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Helmet>
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
      </Helmet>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Connect />
        <div className="scroll-container fixed bottom-10 right-10">
          <div className="scroll-top">
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
      </main>
      <Footer />
    </>
  )
}

export default Layout
