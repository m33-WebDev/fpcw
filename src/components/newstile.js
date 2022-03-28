import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Truncate from "react-truncate";
import { Block, Card, Content, Heading } from "react-bulma-components";
import styled from "styled-components";
import { RichText } from "./richtext";

export function NewsTile({ post }) {
    const { title, feature, body, slug } = post;

    return (
        <Link to={`/library/${slug}`}>
            <Card>
                <FancyImage fluid={feature.fluid} key={feature.fluid.src} alt={feature.title} />
                <Card.Content>
                    <Heading size={5}>{title}</Heading>
                    <Block mobile={{ display: "hidden" }}>
                        <Content>
                            <Truncate lines={1} width={1000} ellipsis={<span> ...</span>}>
                                <RichText src={body} />
                            </Truncate>
                        </Content>
                    </Block>
                </Card.Content>
            </Card>
        </Link>
    );
}

const FancyImage = styled(Img)`
    object-fit: cover;
    height: 30vmin;
`;
