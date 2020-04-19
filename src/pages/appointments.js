import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormAppointment from "../components/formappointment"

import styles from "./appointments.module.scss"

const disclaimer1 =
  "This appointment request form requires you to provide personal information for the purposes of scheduling your appointment. By completing and transmitting this form, you consent to disclose such information to a Family Psychiatry Counseling and Wellness affiliated representative. Also, general data (excluding patient identifiable information) may be used for internal analysis purposes."
const disclaimer2 =
  "\nIf you prefer to request an appointment by telephone, please contact our office directly at (805) 341-3416 during normal business hours."

const hipaa =
  "To the extent information in this Secure Form (a Vital Element, Inc. labeled service) is protected health information under the Health Insurance Portability and Accountability Act, as amended, and its regulations (“HIPAA”), I authorize the use and disclosure of such information in accordance with this HIPAA AUTHORIZATION. I authorize the use and disclosure of all of the information that I have entered into this Secure Form (“Information”). I am the individual whose Information is included in this Secure Form or I am the personal representative of that individual. The purpose of this disclosure is to allow communication of the Information to a the medical practice from whose website I obtained this Secure Form. The Information will be disclosed to Vital Element, Inc. and/or its information technology contractors (“Recipients”) in order to facilitate communication between me and the medical practice. I understand that I have the right to revoke this Authorization at any time prior to my submission of this Secure Form by simply not signing this Authorization, but once I sign this Authorization and submit the Secure Form, the Information will be disclosed to Recipients in reliance upon my Authorization. I understand that I am not required to sign this Authorization and that any medical practice making this Secure Form available on its website may not condition my treatment on whether I use this Secure Form to communicate with the medical practice. This Authorization has no expiration date.  I understand that the Information used or disclosed pursuant to this Authorization may be subject to re-disclosure by the Recipients and will no longer be protected by HIPAA. I hereby acknowledge that I may print a copy of this Authorization for my records"

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
                    src="https://sgl-assets.imgix.net/files/article_hero/bixby-bridge-big-sur-california-nature-spots-outdoor-fun-views-via-magazine-shutterstock_401354710.jpg?w=1440&h=720&crop=faces,edges"
                  />
                </figure>
              </div>
              <div className="column is-3">
                <FormAppointment />
              </div>
              <div className="column is-3" style={{ height: 'auto' }}>
                <div className="content" className={styles.disclaimer} style={{height: 'auto'}}>
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
