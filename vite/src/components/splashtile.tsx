import { Card } from "react-bulma-components";
import { styled } from "styled-components";
import { Typography } from "./style";

interface SplashTileProps {
    title: string;
    to: string;
    image: string;
}

export function SplashTile(props: SplashTileProps) {
    return (
        <a href={props.to}>
            <FancyCard style={{ overflow: "hidden" }}>
                <img
                    src={props.image}
                    alt="Splash"
                    style={{ objectFit: "cover", minHeight: "100%" }}
                />
                <FancyTitle>
                    <Typography>{props.title}</Typography>
                </FancyTitle>
            </FancyCard>
        </a>
    );
}

const FancyCard = styled(Card)`
    height: 100%;
    position: relative;
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
