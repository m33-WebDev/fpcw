import { Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Block, Card, Content } from "react-bulma-components";
import styled from "styled-components";
import { Typography } from "./style";

export function NewsTile({ post }) {
  const { title, feature, body, slug } = post;

  return (
    <Link to={`/library/${slug}`}>
      <Card>
        <FancyImage
          fluid={feature.fluid}
          key={feature.fluid.src}
          alt={feature.title}
        />
        <Card.Content>
          <Block>
            <Typography family="secondary" as="h5" size="s">
              {title}
            </Typography>
          </Block>
          <Block mobile={{ display: "hidden" }}>
            <Content>{extractExcerptFromRichText(body.raw, 20)}</Content>
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

function extractExcerptFromRichText(raw: string, length: number): string {
  const document = JSON.parse(raw);
  const firstParagraph = document?.content.find(
    ({ nodeType }) => nodeType === "paragraph",
  );
  const firstText = firstParagraph?.content.find(
    ({ nodeType }) => nodeType === "text",
  );
  const excerpt = firstText?.value.split(" ").slice(0, length).join(" ");
  return excerpt
    ? `${excerpt}...`
    : "Excerpt could not be generated for this content.";
}
