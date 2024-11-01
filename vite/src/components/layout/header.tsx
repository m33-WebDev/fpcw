import { useState } from "react";
import { Container, Level, Navbar } from "react-bulma-components";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "../style";

const telehealthCallout =
    "Now Offering Telehealth Services all across California.";

const primaryLinks = [
    ["Home", "/"],
    ["Appointments", "/appointments"],
    ["Contact", "/contact"],
    [
        "Patient Portal",
        "https://www.valant.io/portal/FamilyPsychiatryCounseling",
    ],
];

const secondaryLinks = [
    ["Services", "/services"],
    ["Providers", "/providers"],
    ["Careers", "/careers"],
    ["Library", "/library"],
    ["Gallery", "/gallery"],
];

export function Header() {
    const [active, setActive] = useState(false);

    return (
        <FancyNavbar fixed="top" color="success" active={active}>
            <Container>
                <Navbar.Brand>
                    <Navbar.Item href="/">
                        <img
                            width={80}
                            src="../../images/logo-fitted.png"
                            alt="Logo"
                        />
                    </Navbar.Item>
                    <Navbar.Burger onClick={() => setActive((prev) => !prev)} />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container
                        align="left"
                        mobile={{ display: "hidden" }}
                    >
                        <Navbar.Item>
                            <a href="/appointments">
                                <Level>
                                    <Level.Item textColor="warning">
                                        <FontAwesomeIcon
                                            icon={faExclamationCircle}
                                        />
                                    </Level.Item>
                                    <Level.Item mx={3}>
                                        <Typography as="span">
                                            {telehealthCallout}
                                        </Typography>
                                    </Level.Item>
                                    <Level.Item textColor="warning">
                                        <FontAwesomeIcon
                                            icon={faExclamationCircle}
                                        />
                                    </Level.Item>
                                </Level>
                            </a>
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container align="right">
                        {primaryLinks.map(([name, value]) =>
                            value.startsWith("/") ? (
                                <Navbar.Item href={value}>
                                    <Typography as="span">{name}</Typography>
                                </Navbar.Item>
                            ) : (
                                <Navbar.Item href={value}>
                                    <Typography as="span">{name}</Typography>
                                </Navbar.Item>
                            ),
                        )}
                        <Navbar.Item href="#" hoverable={true}>
                            <Navbar.Link>
                                <Typography>About</Typography>
                            </Navbar.Link>
                            <Navbar.Dropdown>
                                {secondaryLinks.map(([name, value]) =>
                                    value.startsWith("/") ? (
                                        <Navbar.Item href={value}>
                                            <Typography as="span">
                                                {name}
                                            </Typography>
                                        </Navbar.Item>
                                    ) : (
                                        <Navbar.Item
                                            href={value}
                                            textColor="dark"
                                        >
                                            <Typography as="span">
                                                {name}
                                            </Typography>
                                        </Navbar.Item>
                                    ),
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
