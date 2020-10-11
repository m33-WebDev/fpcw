import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title='Page Not Found' noIndex/>
      <div className='section'>
        <div className='content has-text-centered'>
            <p>
                It looks like something went wrong :(<br/>Return to <Link to='/'>Home</Link>.
            </p>
        </div>
      </div>
    </Layout>
  )
}
