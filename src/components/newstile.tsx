import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Truncate from "react-truncate";
import { Block, Card, Content } from "react-bulma-components";
import styled from "styled-components";
import { RichText } from "./richtext";
import { Typography } from "./style";

export function NewsTile({ post }) {
    const { title, feature, body, slug } = post;

    return (
        <Link to={`/library/${slug}`}>
            <Card>
                <FancyImage fluid={feature.fluid} key={feature.fluid.src} alt={feature.title} />
                <Card.Content>
                    <Block>
                        <Typography as="h5" size="s">
                            {title}
                        </Typography>
                    </Block>
                    <Block mobile={{ display: "hidden" }}>
                        <Content>
                            <Typography>
                                <Truncate lines={1} width={1000} ellipsis={<Typography as="span"> ...</Typography>}>
                                    <RichText src={body} />
                                </Truncate>
                            </Typography>
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
