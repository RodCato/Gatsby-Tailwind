/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from "react"
import Layout from "./src/components/layout"
import { HelmetProvider } from "react-helmet-async"

export const wrapRootElement = ({ element }) => {
  return (
    <HelmetProvider>
      <Layout>{element}</Layout>
    </HelmetProvider>
  )
}

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
