import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title='FPCW - Success' noIndex/>
      <section className='section'>
        <div className='container'>
          <div className='content has-text-centered'>
              <p>
                  Thanks for your submission!<br/>We'll be in touch.<br/>Return to <Link to='/'>Home</Link>.
              </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
