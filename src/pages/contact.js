import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Block, Box, Columns, Container, Content, Heading, Hero, Table } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendar, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Layout, Seo } from "../components";

export default function Contact({ data }) {
    const metaTitle = data.contentfulPage.metaTitle;
    const metaDescription = data.contentfulPage.metaDescription.metaDescription;

    return (
        <>
            <Seo title={metaTitle} description={metaDescription} />
            <Layout>
                <Hero size="fullheight" hasNavbar={true}>
                    <Hero.Body>
                        <Container>
                            <Columns centered={true} gap={8}>
                                <Columns.Column size={6}>
                                    <Content>
                                        <Heading size={1}>Locations</Heading>
                                    </Content>
                                    <Columns centered={true}>
                                        <Columns.Column>
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=family+psychiatry-counseling-wellness"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Box backgroundColor="light">
                                                    <Block>
                                                        <figure>
                                                            <StaticImage
                                                                src="https://maps.googleapis.com/maps/api/streetview?source=outdoor&size=700x480&location=31194%20LA%20Baya%20Dr%20%23107%2C%20Westlake%20Village%2C%20CA%2091362&sensor=false&key=AIzaSyChs1A5cJJOcGqcdqNj2YBOULaJlZKCktM&channel=propertyshark-standard&signature=qFjUMV_Nmp2YKXRyktRHTZIz5_Q"
                                                                alt="La Baya Drive location exterior"
                                                                height={200}
                                                            />
                                                        </figure>
                                                    </Block>
                                                    <Block>
                                                        <p>
                                                            31194 La Baya Drive <br />
                                                            Suite 202 <br /> Westlake Village, CA 91362
                                                        </p>
                                                    </Block>
                                                </Box>
                                            </a>
                                        </Columns.Column>
                                        <Columns.Column>
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=30851+agoura+rd"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Box backgroundColor="light">
                                                    <Block>
                                                        <figure>
                                                            <StaticImage
                                                                src="https://images.squarespace-cdn.com/content/56412ff6e4b09a51a6703186/1563487713368-OFJHMDD4SJZBKFSQXNE4/image-asset.jpeg?content-type=image%2Fjpeg"
                                                                alt="Agoura Road location exterior"
                                                                height={200}
                                                            />
                                                        </figure>
                                                    </Block>
                                                    <Block>
                                                        <p>
                                                            30851 Agoura Road <br />
                                                            Suite 304 <br />
                                                            Agoura Hills, CA 91301
                                                        </p>
                                                    </Block>
                                                </Box>
                                            </a>
                                        </Columns.Column>
                                    </Columns>
                                    <Content textAlign="center">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                        <p>Click for directions</p>
                                    </Content>
                                </Columns.Column>
                                <Columns.Column size={4}>
                                    <Content>
                                        <Heading size={1}>FPCW Contact Information</Heading>
                                        <Table>
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
                                        </Table>
                                        <p>
                                            If you would like to request an appointment outside of business hours,
                                            please use this <Link to="/appointments">form</Link>.
                                        </p>
                                    </Content>
                                </Columns.Column>
                            </Columns>
                        </Container>
                    </Hero.Body>
                </Hero>
            </Layout>
        </>
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
