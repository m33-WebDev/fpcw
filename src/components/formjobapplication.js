import React, { createRef } from "react"

/* eslint-disable no-useless-concat */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faUpload,
} from "@fortawesome/free-solid-svg-icons"

function BulmaControl({ children, name, hasLeftIcons, hasRightIcons }) {
  function getControlClass() {
    var className = "control"
    className = className.concat(hasLeftIcons ? " " + "has-icons-left" : "")
    className = className.concat(hasRightIcons ? " " + "has-icons-right" : "")
    return className
  }

  return (
    <div className="field">
      <label className="label">{name}</label>
      <div className={getControlClass()}>{children}</div>
    </div>
  )
}

var positions = [
  "Psychiatrist",
  "Psychiatric Nurse Practitioner",
  "Licensed Marriage and Family Therapist",
  "Psychologist",
  "Licensed Clinical Social Worker",
]

class FormJobApplication extends React.Component {
  constructor(props) {
    super(props)
    this.onUpload = this.onUpload.bind(this)
    this.state = {
      resume: {},
    }
  }
  onUpload(event) {
    var files = event.target.files;
    this.setState({resume: files[0]})
    console.log("Uploading file: %s", files[0].name);
  }

  render() {
    return (
      <form
        name="jobapplication"
        method="POST"
        netlify="true"
        action="/success/"
        encType='multipart/form-data'
      >
        <input type="hidden" name="form-name" value="jobapplication" />
        <h1 className="title">Application</h1>

        <BulmaControl name="Position" hasLeftIcons>
          <div className="select is-success is-fullwidth">
            <select name="position">
              {positions.map(pos => {
                return <option>{pos}</option>
              })}
            </select>
          </div>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </BulmaControl>

        <div className="columns">
          <div className="column">
            <BulmaControl name="First Name">
              <input
                className="input"
                type="text"
                placeholder="John"
                name="firstname"
              />
            </BulmaControl>
          </div>
          <div className="column">
            <BulmaControl name="Last Name">
              <input
                className="input"
                type="text"
                placeholder="Smith"
                name="lastname"
              />
            </BulmaControl>
          </div>
        </div>
        <BulmaControl name="Email" hasLeftIcons>
          <input
            className="input"
            type="email"
            placeholder="johnsmith@gmail.com"
            name="email"
          />{" "}
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </BulmaControl>
        <BulmaControl name="Phone" hasLeftIcons>
          <input
            className="input"
            type="phone"
            placeholder="(123) 456-7890"
            name="phone"
          />{" "}
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faPhone} />
          </span>
        </BulmaControl>
        <BulmaControl name="Resume" hasLeftIcons>
          <div
            class="file is-success is-right is-fullwidth"
            style={{ width: "100%" }}
          >
            <label class="file-label">
              <input class="file-input" type="file" name="resume"  />
              <span class="file-cta">
                <span class="file-icon">
                  <FontAwesomeIcon icon={faUpload} />
                </span>
                <span class="file-label">Upload</span>
              </span>
              <span class="file-name">{this.state.resume ? this.state.resume.name : ""}</span>
            </label>
          </div>
        </BulmaControl>
        <BulmaControl>
          <button
            className="button is-success is-outlined"
            type="submit"
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </BulmaControl>
      </form>
    )
  }
}

export default FormJobApplication
