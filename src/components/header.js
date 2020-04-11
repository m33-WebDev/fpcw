/* eslint-disable */
import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import logo from "../images/logo-new.png"
import "./header.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          shortTitle
        }
      }
    }
  `)

  return (
    <nav
      className="navbar is-fixed-top is-transparent is-light is-success"
      role="navigation"
      aria-label="main navigation"
      style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)" }}
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <figure class="image 4by3">
              <img src={logo} alt="logo" height="256" width="256px" />
            </figure>
          </a>

          <label
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            htmlFor="nav-toggle-state"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </label>
        </div>
        <input type="checkbox" id="nav-toggle-state" />

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/education/">
              Education
            </Link>
            <Link className="navbar-item" to="/providers/">
              Providers
            </Link>
            <Link className='navbar-item' to='/appointments/'>
              <button className='button is-success is-outlined is-inverted'>
                Appointments
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
