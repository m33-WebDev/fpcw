import {
  faAngleUp,
  faCalendar,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  Block,
  Box,
  Columns,
  Container,
  Content,
  Hero,
  Table,
} from "react-bulma-components";
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
                  <Typography size="l">
                    FPCW is serving patients all across California via Hippa
                    Compliant Telehealth Platform. Our TMS & Ketamine Therapy
                    Services Provided at our main office in Westlake Village
                    California.
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
                              src="../images/location1.png"
                              alt="La Baya Drive location exterior"
                              height={200}
                            />
                          </figure>
                        </Block>
                        <Block>
                          <Typography family="secondary">
                            31194 La Baya Drive <br />
                            Suite 202 <br /> Westlake Village, CA 91362
                          </Typography>
                        </Block>
                      </Box>
                    </a>
                  </Columns.Column>
                  <Columns.Column>
                    {/* <a
                                            href="https://www.google.com/maps/search/?api=1&query=30851+agoura+rd"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        > */}
                    <Box backgroundColor="light">
                      <Block>
                        <figure>
                          <StaticImage
                            src="../images/location2.png"
                            alt="Agoura Road location exterior"
                            height={300}
                          />
                        </figure>
                      </Block>
                      <Block>
                        <Typography>
                          {/* 30851 Agoura Road <br />
                                                        Suite 304 <br />
                                                        Agoura Hills, CA 91301 */}
                        </Typography>
                      </Block>
                    </Box>
                    {/* </a> */}
                  </Columns.Column>
                </Columns>
                <Columns centered={true}>
                  <Columns.Column>
                    {/* <a
                                            href="https://www.google.com/maps/search/?api=1&query=family+psychiatry-counseling-wellness"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        > */}
                    <Box backgroundColor="light">
                      <Block>
                        <figure>
                          <StaticImage
                            src="../images/location3.png"
                            alt="La Baya Drive location exterior"
                            height={200}
                          />
                        </figure>
                      </Block>
                      <Block>
                        {/* <Typography>
                                                        31194 La Baya Drive <br />
                                                        Suite 202 <br /> Westlake Village, CA 91362
                                                    </Typography> */}
                      </Block>
                    </Box>
                    {/* </a> */}
                  </Columns.Column>
                  <Columns.Column>
                    {/* <a
                                            href="https://www.google.com/maps/search/?api=1&query=30851+agoura+rd"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        > */}
                    <Box backgroundColor="light">
                      <Block>
                        <figure>
                          <StaticImage
                            src="../images/location4.png"
                            alt="Agoura Road location exterior test3"
                            height={200}
                          />
                        </figure>
                      </Block>
                      <Block>
                        {/* <Typography>
                                                        30851 Agoura Road <br />
                                                        Suite 304 <br />
                                                        Agoura Hills, CA 91301
                                                    </Typography> */}
                      </Block>
                    </Box>
                    {/* </a> */}
                  </Columns.Column>
                </Columns>
                <Content textAlign="center">
                  <FontAwesomeIcon icon={faAngleUp} />
                  <Typography family="secondary">
                    Click for directions
                  </Typography>
                </Content>
              </Columns.Column>
              <Columns.Column size={4}>
                <Content>
                  <Typography as="h2" size="xl">
                    FPCW Contact Information
                  </Typography>
                  <Table>
                    <Typography family="secondary" as="tbody">
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

                  <Typography family="secondary">
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
