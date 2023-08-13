import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import previewImage from "../images/preview.png"
// import * as styles from "../components/index.module.css"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>

  
  
</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <>
    <Seo title="👑CRod's Portfolio"/>
    <meta property="og:image" content={previewImage} />
    <meta property="og:title" content="👑CRod's Portfolio" />
    <meta
      property="og:description"
      content="I'm a Software Engineer with a passion for learning new things, creativity and innovation. I love to build things that make a difference. I hope you enjoy my work!"
    />
  </>
)
export default IndexPage
