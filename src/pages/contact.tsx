import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Block, Box, Columns, Container, Content, Hero, Table } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendar, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Layout, Seo, Typography } from "../components";

export function Head({ data }) {
    const title = data.contentfulPage.metaTitle;
    const description = data.contentfulPage.metaDescription.metaDescription;
    return <Seo title={title} description={description} />;
}

export default function Contact() {
    return (
        <Layout>
            <Hero size="fullheight" hasNavbar={true}>
                <Hero.Body>
                    <Container>
                        {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                        <Columns centered={true} gap={8}>
                            <Columns.Column size={6}>
                                <Content>
                                    <Typography as="h1" family="secondary" size="xxl">
                                    FPCW is serving patients all across California via Hippa Compliant 
                                    Telehealth Platform.  Our TMS & Ketamine Therapy Services Provided 
                                    at our main office in Westlake Village California.

                                    </Typography>
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
                                                    <Typography>
                                                        31194 La Baya Drive <br />
                                                        Suite 202 <br /> Westlake Village, CA 91362
                                                    </Typography>
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
                                                    <Typography>
                                                        30851 Agoura Road <br />
                                                        Suite 304 <br />
                                                        Agoura Hills, CA 91301
                                                    </Typography>
                                                </Block>
                                            </Box>
                                        </a>
                                    </Columns.Column>
                                </Columns>
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
                                                    <Typography>
                                                        31194 La Baya Drive <br />
                                                        Suite 202 <br /> Westlake Village, CA 91362
                                                    </Typography>
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
                                                            src="../../images/location1.png"
                                                            alt="Agoura Road location exterior"
                                                            height={200}
                                                        />
                                                    </figure>
                                                </Block>
                                                <Block>
                                                    <Typography>
                                                        30851 Agoura Road <br />
                                                        Suite 304 <br />
                                                        Agoura Hills, CA 91301
                                                    </Typography>
                                                </Block>
                                            </Box>
                                        </a>
                                    </Columns.Column>
                                </Columns>
                                <Content textAlign="center">
                                    <FontAwesomeIcon icon={faAngleUp} />
                                    <Typography>Click for directions</Typography>
                                </Content>
                            </Columns.Column>
                            <Columns.Column size={4}>
                                <Content>
                                    <Typography as="h2" family="secondary" size="xl">
                                        FPCW Contact Information
                                    </Typography>
                                    <Table>
                                        <Typography as="tbody">
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
                                                <td>Monday - Thursday - 9:00am - 5:00pm PST</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <FontAwesomeIcon icon={faCalendar} />
                                                </td>
                                                <td>Friday - 8:00am - 3:00pm PST</td>
                                            </tr>

                                        </Typography>
                                    </Table>

                                    <Typography>
                                    Offices Closed on Weekends and Holidays.
                                    </Typography>
                                </Content>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
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
