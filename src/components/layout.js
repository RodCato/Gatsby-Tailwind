/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import About from "./about"
import Projects from "./projects"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>
        <About />
        <Projects />
        </main>
        <footer class="footer">
          <a href="https://github.com/RodCato" class="link footer__link">
            Created By CRod with 🫶🏽 || &copy; 2023 || 🎟️ Thanks for Visiting!
            🎬
          </a>
        </footer>
      
    </>
  )
}

export default Layout
