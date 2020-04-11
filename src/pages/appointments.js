import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormAppointment from "../components/formappointment"

const hipaa =
  "To the extent information in this Secure Form (a Vital Element, Inc. labeled service) is protected health information under the Health Insurance Portability and Accountability Act, as amended, and its regulations (“HIPAA”), I authorize the use and disclosure of such information in accordance with this HIPAA AUTHORIZATION. I authorize the use and disclosure of all of the information that I have entered into this Secure Form (“Information”). I am the individual whose Information is included in this Secure Form or I am the personal representative of that individual. The purpose of this disclosure is to allow communication of the Information to a the medical practice from whose website I obtained this Secure Form. The Information will be disclosed to Vital Element, Inc. and/or its information technology contractors (“Recipients”) in order to facilitate communication between me and the medical practice. I understand that I have the right to revoke this Authorization at any time prior to my submission of this Secure Form by simply not signing this Authorization, but once I sign this Authorization and submit the Secure Form, the Information will be disclosed to Recipients in reliance upon my Authorization. I understand that I am not required to sign this Authorization and that any medical practice making this Secure Form available on its website may not condition my treatment on whether I use this Secure Form to communicate with the medical practice. This Authorization has no expiration date.  I understand that the Information used or disclosed pursuant to this Authorization may be subject to re-disclosure by the Recipients and will no longer be protected by HIPAA. I hereby acknowledge that I may print a copy of this Authorization for my records"

export default () => {
  return (
    <Layout>
      <SEO title="FPCW - Appointments" />
      <section class="section">
        <div class="container">
          <div class="columns is-desktop is-vcentered">
            <div className="column is-6">
              <figure class="image is-4by3">
                <img style={{objectFit: 'cover'}} src='https://sgl-assets.imgix.net/files/article_hero/bixby-bridge-big-sur-california-nature-spots-outdoor-fun-views-via-magazine-shutterstock_401354710.jpg?w=1440&h=720&crop=faces,edges'/>
              </figure>
            </div>
            <div className="column is-6">
              <FormAppointment />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
