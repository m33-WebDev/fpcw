import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Card } from "react-bulma-components";
import styled from "styled-components";
import { Typography } from "./style";

export function SplashTile(props) {
    return (
        <Link to={props.to ?? "/"}>
            <FancyCard>
                <FancyImage image={getImage(props.image)} alt="Splash" />
                <FancyTitle>
                    <Typography>{props.title}</Typography>
                </FancyTitle>
            </FancyCard>
        </Link>
    );
}

const FancyCard = styled(Card)`
    height: 100%;
    position: relative;
`;

const FancyImage = styled(GatsbyImage)`
    height: 100%;
`;

const FancyTitle = styled.h2`
    border: 3px solid #48c774;
    border-left: 0px;

    position: absolute;
    bottom: 10%;
    left: 0;
    padding: 0.3em;
    text-align: left;
    background: rgb(72, 199, 116);
    max-width: 70%;
`;
