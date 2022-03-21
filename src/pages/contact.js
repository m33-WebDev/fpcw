import React from "react";
import { Link, graphql } from "gatsby";

import { Layout, Seo } from "../components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendar, faExternalLinkAlt, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "bulma-helpers/css/bulma-helpers.min.css";
import * as styles from "./contact.module.scss";
import { StaticImage } from "gatsby-plugin-image";

function Contact({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;

    return (
        <Layout>
            <Seo title={metaTitle} description={metaDescription} />
            <section className="hero is-fullheight-with-navbar is-light">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered is-variable is-8 is-desktop">
                            <div className="column is-6">
                                <div className="content">
                                    <h2 className={"title is-1 is-size-3-mobile " + styles.LocationTitle}>Locations</h2>
                                </div>
                                <div className="columns is-centered">
                                    <div className="column">
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=family+psychiatry-counseling-wellness"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="box has-background-light" style={{ position: "relative" }}>
                                                <figure style={{ marginBottom: "3vmin" }}>
                                                    <StaticImage
                                                        src="https://maps.googleapis.com/maps/api/streetview?source=outdoor&size=700x480&location=31194%20LA%20Baya%20Dr%20%23107%2C%20Westlake%20Village%2C%20CA%2091362&sensor=false&key=AIzaSyChs1A5cJJOcGqcdqNj2YBOULaJlZKCktM&channel=propertyshark-standard&signature=qFjUMV_Nmp2YKXRyktRHTZIz5_Q"
                                                        alt="La Baya Drive location exterior"
                                                        height={200}
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
                                                        right: ".5em"
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
                                            <div className="box has-background-light" style={{ position: "relative" }}>
                                                <figure style={{ marginBottom: "3vmin" }}>
                                                    <StaticImage
                                                        src="https://images.squarespace-cdn.com/content/56412ff6e4b09a51a6703186/1563487713368-OFJHMDD4SJZBKFSQXNE4/image-asset.jpeg?content-type=image%2Fjpeg"
                                                        alt="Agoura Road location exterior"
                                                        height={200}
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
                                                        right: ".5em"
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
                            <div className="column is-4">
                                <div className="content">
                                    <h1 className="title is-1 is-size-3-mobile ">FPCW Contact Information</h1>
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

                                                <td>fpcw@familypsychiatry101.com</td>
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
                                        If you would like to request an appointment outside of business hours, please
                                        use this <Link to="/appointments">form</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulPage(title: { eq: "Contact" }) {
            metaTitle
            metaDescription {
                metaDescription
            }
        }
    }
`;

export default Contact;
