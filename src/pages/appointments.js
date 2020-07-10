import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormAppointment from "../components/formappointment"

import styles from "./appointments.module.scss"

const disclaimer1 =
  "This appointment request form requires you to provide personal information for the purposes of scheduling your appointment. By completing and transmitting this form, you consent to disclose such information to a Family Psychiatry Counseling and Wellness affiliated representative. Also, general data (excluding patient identifiable information) may be used for internal analysis purposes."
const disclaimer2 =
  "\nIf you prefer to request an appointment by telephone, please contact our office directly at (805) 341-3416 during normal business hours."

export default () => {
  return (
    <Layout>
      <SEO title="FPCW - Appointments" />
      <div className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-desktop is-vcentered">
              <div className="column is-6">
                <figure className="image is-4by3">
                  <img
                    style={{ objectFit: "cover"}}
                    alt="West Coast landscape"
                    src="https://sgl-assets.imgix.net/files/article_hero/bixby-bridge-big-sur-california-nature-spots-outdoor-fun-views-via-magazine-shutterstock_401354710.jpg?w=1440&h=720&crop=faces,edges"
                  />
                </figure>
              </div>
              <div className="column is-3">
                <FormAppointment />
              </div>
              <div className="column is-3" style={{ height: 'auto' }}>
                <div className={styles.disclaimer} style={{height: 'auto'}}>
                  <p style={{marginBottom: '3vmin'}}>{disclaimer1}</p>
                  <p>{disclaimer2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
