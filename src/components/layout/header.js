import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Level, Navbar } from "react-bulma-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const telehealthCallout = "Now offering telehealth appointments.";

const primaryLinks = [
    ["Home", "/"],
    ["Appointments", "/appointments"],
    ["Contact", "/contact"],
    ["Patient Portal", "https://www.valant.io/portal/FamilyPsychiatryCounseling"]
];

const secondaryLinks = [
    ["Services", "/services"],
    ["Providers", "/providers"],
    ["Careers", "/careers"],
    ["Library", "/library"],
    ["Gallery", "/gallery"]
];

export function Header() {
    const [active, setActive] = useState(false);

    return (
        <FancyNavbar fixed="top" color="success" active={active}>
            <Container>
                <Navbar.Brand>
                    <Navbar.Item href="/">
                        <StaticImage width="80px" src="../../images/logo-fitted.png" alt="Logo" />
                    </Navbar.Item>
                    <Navbar.Burger onClick={_ => setActive(prev => !prev)} />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container align="left" mobile={{ display: "hidden" }}>
                        <Navbar.Item>
                            <Link to="/appointments">
                                <Level>
                                    <Level.Item textColor="warning">
                                        <FontAwesomeIcon icon={faExclamationCircle} />
                                    </Level.Item>
                                    <Level.Item mx={3} textColor="dark">
                                        {telehealthCallout}
                                    </Level.Item>
                                    <Level.Item textColor="warning">
                                        <FontAwesomeIcon icon={faExclamationCircle} />
                                    </Level.Item>
                                </Level>
                            </Link>
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container align="right">
                        {primaryLinks.map(([name, value]) =>
                            value.startsWith("/") ? (
                                <Navbar.Item renderAs={Link} to={value} textColor="dark">
                                    {name}
                                </Navbar.Item>
                            ) : (
                                <Navbar.Item href={value} textColor="dark">
                                    {name}
                                </Navbar.Item>
                            )
                        )}
                        <Navbar.Item href="#" hoverable={true}>
                            <Navbar.Link textColor="dark">About</Navbar.Link>
                            <Navbar.Dropdown>
                                {secondaryLinks.map(([name, value]) =>
                                    value.startsWith("/") ? (
                                        <Navbar.Item renderAs={Link} to={value} textColor="dark">
                                            {name}
                                        </Navbar.Item>
                                    ) : (
                                        <Navbar.Item href={value} textColor="dark">
                                            {name}
                                        </Navbar.Item>
                                    )
                                )}
                            </Navbar.Dropdown>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Container>
        </FancyNavbar>
    );
}

const FancyNavbar = styled(Navbar)`
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
    a {
        color: inherit;
    }
`;