import React from "react"
import "./src/styles/global.css"
import "./src/fontawesome" // Make sure the path to the file is correct
import { HelmetProvider } from "react-helmet-async"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
library.add(faArrowUp)

export const wrapRootElement = ({ element }) => {
  return <HelmetProvider>{element}</HelmetProvider>
}
