import { Block, Card, Content } from "react-bulma-components";
import { styled } from "styled-components";
import { Typography } from "./style";
import { Post } from "../data";
import { Document, Text } from "@contentful/rich-text-types";

interface NewsTileProps {
    post: Post;
}

export function NewsTile({ post }: NewsTileProps) {
    const { title, feature, body, slug } = post;

    return (
        <a href={`/library/${slug}`}>
            <Card style={{ overflow: "hidden" }}>
                <FancyImage
                    src={feature}
                    alt="post thumbnail"
                    style={{ objectFit: "cover", width: "100%" }}
                />
                <Card.Content>
                    <Block>
                        <Typography as="h5" $size="s">
                            {title}
                        </Typography>
                    </Block>
                    <Block mobile={{ display: "hidden" }}>
                        <Content>{extractExcerptFromRichText(body!, 20)}</Content>
                    </Block>
                </Card.Content>
            </Card>
        </a>
    );
}

const FancyImage = styled.img`
    object-fit: cover;
    height: 30vmin;
`;

function extractExcerptFromRichText(document: Document, length: number): string {
    const firstParagraph = document.content.find(({ nodeType }) => nodeType === "paragraph");
    const firstText = firstParagraph?.content.find(({ nodeType }) => nodeType === "text") as Text;
    const excerpt = firstText?.value.split(" ").slice(0, length).join(" ");
    return excerpt ? `${excerpt}...` : "Excerpt could not be generated for this content.";
}
