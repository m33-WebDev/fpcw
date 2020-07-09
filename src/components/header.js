/* eslint-disable */
import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import logo from "../images/logo-new.png"
import "./header.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExclamation,
  faExclamationTriangle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons"

export default () => {
  const [active, setActive] = useState(false)

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
      className="navbar is-fixed-top is-success"
      role="navigation"
      aria-label="main navigation"
      style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)" }}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item image" href="/">
            <img src={logo} alt="logo" width="128" height="128" />
          </Link>

          <a
            role="button"
            className={"navbar-burger burger " + (active ? "is-active" : "")}
            aria-label="menu"
            aria-expanded="false"
            onClick={e => {
              setActive(!active)
            }}
            onBlur={e => {
              setActive(false)
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={"navbar-menu " + (active ? "is-active" : "")}
        >
          <div
            className="navbar-start"
            style={{ flexGrow: 1, flexShrink: 1, display: "flex" }}
          >
            <Link
              className="navbar-item has-text-centered"
              to="/appointments"
              style={{ marginLeft: "5vmin", marginRight: "5vmin" }}
            >
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="has-text-warning"
              />
              <div
                style={{
                  // borderBottom: "1px solid #FFDD57",
                  marginLeft: "1vmin",
                  marginRight: "1vmin",
                }}
                className='has-text-white'
              >
                Telehealth appointments now available
              </div>
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="has-text-warning"
              />
            </Link>
          </div>
          <div className="navbar-end">
            <Link
              className="navbar-item"
              activeClassName="navbar-item is-active"
              to="/"
            >
              Home
            </Link>
            <Link
              className="navbar-item"
              activeClassName="navbar-item is-active"
              to="/services/"
            >
              Services
            </Link>

            <Link
              className="navbar-item"
              activeClassName="navbar-item is-active"
              to="/providers/"
            >
              Providers
            </Link>
            <Link
              className="navbar-item"
              activeClassName="navbar-item is-active"
              to="/appointments/"
            >
              Appointments
            </Link>
            <Link
              className="navbar-item"
              activeClassName="navbar-item is-active"
              to="/library/"
            >
              Library
            </Link>
            <Link
              className="navbar-item"
              activeClassName="navbar-item is-active"
              to="/locations/"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
