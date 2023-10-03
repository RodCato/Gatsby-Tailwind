import * as React from "react"
// Import the Seo component if you need it
// import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    {/* If Seo component is needed, make sure to import and use it */}
    {/* <Seo title="404: Not Found" /> */}
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
