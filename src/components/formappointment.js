import React from "react"

/* eslint-disable no-useless-concat */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons"

// import "./hireme.module.scss"
import "react-datepicker/dist/react-datepicker-cssmodules.css"

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

class FormAppointment extends React.Component {
  state = { startDate: new Date() }

  handleChange = date => {
    this.setState({ startDate: date })
  }

  render() {
    return (
      <form name="appointmentrequest" method="POST" netlify="true" action="/success/">
        <input type="hidden" name="form-name" value="appointmentrequest" />
        <h1 className="title">Request an Appointment</h1>

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
        <BulmaControl name="Date" hasLeftIcons>
          <input
            className="input"
            type="date"
            placeholder="12/05/1993"
            name="date"
          />{" "}
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          {/* <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          /> */}
        </BulmaControl>

        {/* <BulmaControl name="Notes">
          <textarea
            className="textarea"
            name="projectdescription"
            placeholder="I want to talk about..."
            style={{ height: "100%" }}
          />
        </BulmaControl> */}

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

export default FormAppointment
