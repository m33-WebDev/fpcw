import {
  IconDefinition,
  faCalendar,
  faEnvelope,
  faExclamationCircle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "gatsby-link";
import React from "react";
import {
  Block,
  Footer as BulmaFooter,
  Columns,
  Container,
  Content,
  Icon,
  Level,
} from "react-bulma-components";
import { Typography } from "../style";

const telehealthCallout =
  "Now Offering Telehealth Services all across California.";

const contactDetails: [IconDefinition, string][] = [
  [faPhone, "(805) 341-3416"],
  [faEnvelope, "fpcw@familypsychiatry101.com"],
  [faCalendar, "Monday - Thursday - 9:00am - 5:00pm"],
  [faCalendar, "Friday - 8:00am - 3:00pm"],
  [
    ,
    "Same day appointments available . We are closed on Weekends and Holidays. ",
  ],
];

export function Footer() {
  return (
    <BulmaFooter backgroundColor="white">
      <Container>
        <Columns.Column offset={3} size={6}>
          <Container px={4}>
            <Block alignItems="center" alignContent="center" textAlign="center">
              <Link to="/appointments">
                <Level>
                  <Level.Item textColor="warning">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </Level.Item>
                  <Level.Item mx={1}>
                    <Typography family="secondary" weight="heavy" as="h1">
                      {telehealthCallout}
                    </Typography>
                  </Level.Item>
                  <Level.Item textColor="warning">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </Level.Item>
                </Level>
              </Link>
            </Block>
          </Container>
        </Columns.Column>
        <Columns vCentered={true}>
          <Columns.Column size={3}>
            {contactDetails.map(([icon, text]) => (
              <Icon.Text mb={2}>
                <Icon>
                  <FontAwesomeIcon icon={icon} />
                </Icon>
                <Typography family="secondary">{text}</Typography>
              </Icon.Text>
            ))}
          </Columns.Column>
          <Divider />
          <Columns.Column size={2}>
            <Content>
              <Typography family="secondary">
                31194 La Baya Drive
                <br />
                Suite 202
                <br />
                Westlake Village, CA 91362
              </Typography>
            </Content>
          </Columns.Column>
          <Divider />
          <Columns.Column size={3}>
            <Content>
              <Typography family="secondary">
                © 2023 Family Psychiatry Counseling and Wellness.
              </Typography>
            </Content>
          </Columns.Column>
        </Columns>
      </Container>
    </BulmaFooter>
  );
}

function Divider() {
  return (
    <Columns.Column size={1} textAlign="center" mobile={{ display: "hidden" }}>
      ·
    </Columns.Column>
  );
}
