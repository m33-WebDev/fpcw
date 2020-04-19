import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone,
  faCalendar,
  faExternalLinkAlt,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons"

import "bulma-helpers/css/bulma-helpers.min.css"

export default () => {
  return (
    <Layout>
      <SEO title="FPCW - Locations" />
      <section className="hero is-fullheight-with-navbar is-light">
        <div className="hero-body">
          <div class="container">
            <div
              class="columns is-centered is-variable is-8 is-desktop"
              style={{ width: "100%" }}
            >
              <div className="column is-6">
                <div class="content">
                  <h1 className="title is-1 is-size-3-mobile has-text-centered">
                    Locations
                  </h1>
                </div>
                <div className="columns is-centered">
                  <div className="column">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=family+psychiatry-counseling-wellness"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        class="box has-background-light"
                        style={{ position: "relative" }}
                      >
                        <figure
                          className="image is-square"
                          style={{ marginBottom: "3vmin" }}
                        >
                          <img
                            src="https://www.askideas.com/media/39/Colosseum-Looks-Beautiful-In-Sunset-Light.jpg"
                            style={{ objectFit: "cover" }}
                          />
                        </figure>
                        <p>
                          31194 La Baya Drive <br />
                          Suite 202 <br /> Westlake Village, CA 91362
                        </p>
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="has-text-grey-light"
                          style={{
                            position: "absolute",
                            bottom: ".5em",
                            right: ".5em",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="column">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=30851+agoura+rd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        class="box has-background-light"
                        style={{ position: "relative" }}
                      >
                        <figure
                          className="image is-square"
                          style={{ marginBottom: "3vmin" }}
                        >
                          <img
                            src="https://i.pinimg.com/originals/ce/7f/55/ce7f55d0ce9ec88c238f4f0f5731d809.jpg"
                            style={{ objectFit: "cover" }}
                          />
                        </figure>
                        <p>
                          30851 Agoura Road <br />
                          Suite 304 <br />
                          Agoura Hills, CA 91301
                        </p>
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="has-text-grey-light"
                          style={{
                            position: "absolute",
                            bottom: ".5em",
                            right: ".5em",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="has-text-centered">
                  <FontAwesomeIcon icon={faAngleUp} />
                  <p>Click for directions</p>
                </div>
              </div>
              <div
                class="column is-4"
                //   style={{
                //     border: "2px solid #48C774",
                //     borderRadius: "5px",
                //     padding: "4em 1em",
                //   }}
              >
                <div class="content">
                  <h1 className="title is-1 is-size-3-mobile ">Contact Info</h1>
                  <table className="table is-completely-borderless has-background-light">
                    <tbody>
                      <tr>
                        <td>
                          <FontAwesomeIcon icon={faPhone} />
                        </td>
                        <td>(805) 341-3416</td>
                      </tr>
                      <tr>
                        <td>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </td>

                        <td>familypsychiatry101@gmail.com</td>
                      </tr>
                      <tr>
                        <td>
                          <FontAwesomeIcon icon={faCalendar} />
                        </td>
                        <td>Monday - Friday, 9:00am - 6:00pm</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    If you would like to request an appointment outside of
                    business hours, please use this{" "}
                    <Link to="/appointments/">form</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="hero is-medium is-light">
        <div className="hero-body">
          <div
            class="content has-text-centered"
            style={{ marginBottom: "8vmin" }}
          >
            <h1 className="title is-1">Contact Information</h1>
          </div>

          <div class="container">
            <div
              className="columns is-centered is-vcentered is-desktop is-variable is-6"
              style={{ width: "100%" }}
            >
              <div className="column is-4">
                <figure className="image is-square">
                  <img
                    src="https://c5j2d3d6.stackpathcdn.com/wp-content/uploads/2019/01/louvre.jpg"
                    alt="Meh"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div class="column is-2">
                <div class="content">
                  <p className="">
                    311 La Baya Drive
                    <br />
                    Suite 202
                    <br />
                    Westlake Village, CA 91362
                  </p>
                </div>
              </div>

              <div className="column is-4">
                <figure className="image is-square">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"
                    alt="Meh"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div class="column is-2">
                <div class="content">
                  <p className="">
                    30851 Agoura Road
                    <br />
                    Suite 304
                    <br />
                    Agoura Hills, CA 91301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-medium is-light">
        <div className="hero-body">
          <div class="container">
            <div
              class="content has-text-centered"
              style={{ marginBottom: "8vmin" }}
            >
              <h1 className="title is-1">Locations</h1>
            </div>
            <div
              className="columns is-centered is-vcentered is-desktop is-variable is-6"
              style={{ width: "100%" }}
            >
              <div className="column is-4">
                <figure className="image is-square">
                  <img
                    src="https://c5j2d3d6.stackpathcdn.com/wp-content/uploads/2019/01/louvre.jpg"
                    alt="Meh"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div class="column is-2">
                <div class="content">
                  <p className="">
                    311 La Baya Drive
                    <br />
                    Suite 202
                    <br />
                    Westlake Village, CA 91362
                  </p>
                </div>
              </div>

              <div className="column is-4">
                <figure className="image is-square">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"
                    alt="Meh"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              </div>
              <div class="column is-2">
                <div class="content">
                  <p className="">
                    30851 Agoura Road
                    <br />
                    Suite 304
                    <br />
                    Agoura Hills, CA 91301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  )
}
