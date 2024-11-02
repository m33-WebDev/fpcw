import { Block, Card, Content } from "react-bulma-components";
import { styled } from "styled-components";
import { Typography } from "./style";
import { Post } from "../data";
import { RichText } from "./richtext";

interface NewsTileProps {
    post: Post;
}

export function NewsTile({ post }: NewsTileProps) {
    const { title, feature, body, slug } = post;

    return (
        <a href={`/library/${slug}`}>
            <Card>
                <FancyImage src={feature} alt="post thumbnail" />
                <Card.Content>
                    <Block>
                        <Typography as="h5" size="s">
                            {title}
                        </Typography>
                    </Block>
                    <Block mobile={{ display: "hidden" }}>
                        <Content>
                            <RichText src={body} />
                        </Content>
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

function extractExcerptFromRichText(raw: string, length: number): string {
    const document = JSON.parse(raw);
    const firstParagraph = document?.content.find(({ nodeType }) => nodeType === "paragraph");
    const firstText = firstParagraph?.content.find(({ nodeType }) => nodeType === "text");
    const excerpt = firstText?.value.split(" ").slice(0, length).join(" ");
    return excerpt ? `${excerpt}...` : "Excerpt could not be generated for this content.";
}
