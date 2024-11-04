import { Block, Box, Columns, Container, Content, Hero, Table } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendar, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Layout, Seo, Typography } from "./components";
import { ContentfulClient } from "./data";

interface ContactProps {
    title: string;
    description: string;
}

export async function query(): Promise<ContactProps> {
    const pageId = "2Md8UmvcqjkVCxCOBWCnbt";
    const client = new ContentfulClient();
    const page = await client.getPage(pageId);
    return {
        title: page.metaTitle ?? "",
        description: (page.metaDescription as string) ?? "",
    };
}

export function Head(props: ContactProps) {
    return <Seo title={props.title} description={props.description} />;
}

export default function Contact(_: ContactProps) {
    return (
        <Layout>
            <Hero size="fullheight" hasNavbar={true}>
                <Hero.Body>
                    <Container>
                        {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                        <Columns centered={true} gap={8}>
                            <Columns.Column size={6}>
                                <Content>
                                    <Typography $family="secondary" $size="l">
                                        FPCW is serving patients all across California via a HIPAA-
                                        compliant telehealth platform. Our TMS & ketamine therapy
                                        services are provided at our main office in Westlake
                                        Village, California.
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
                                                        <img
                                                            src="./images/location1.png"
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
                                        <Box backgroundColor="light">
                                            <Block>
                                                <figure>
                                                    <img
                                                        src="./images/location2.png"
                                                        alt="Agoura Road location exterior"
                                                        height={300}
                                                    />
                                                </figure>
                                            </Block>
                                        </Box>
                                    </Columns.Column>
                                </Columns>
                                <Columns centered={true}>
                                    <Columns.Column>
                                        <Box backgroundColor="light">
                                            <Block>
                                                <figure>
                                                    <img
                                                        src="./images/location3.png"
                                                        alt="La Baya Drive location exterior"
                                                        height={200}
                                                    />
                                                </figure>
                                            </Block>
                                        </Box>
                                        {/* </a> */}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Box backgroundColor="light">
                                            <Block>
                                                <figure>
                                                    <img
                                                        src="./images/location4.png"
                                                        alt="Agoura Road location exterior test3"
                                                        height={200}
                                                    />
                                                </figure>
                                            </Block>
                                        </Box>
                                    </Columns.Column>
                                </Columns>
                                <Content textAlign="center">
                                    <FontAwesomeIcon icon={faAngleUp} />
                                    <Typography>Click for directions</Typography>
                                </Content>
                            </Columns.Column>
                            <Columns.Column size={4}>
                                <Content>
                                    <Typography as="h2" $family="secondary" $size="xl">
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
