import { Block, Card, Content } from "react-bulma-components";
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
                <img
                    src={feature}
                    alt="post thumbnail"
                    style={{ height: "30vmin" }}
                    className="object-cover w-full"
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

function extractExcerptFromRichText(document: Document, length: number): string {
    const firstParagraph = document.content.find(({ nodeType }) => nodeType === "paragraph");
    const firstText = firstParagraph?.content.find(({ nodeType }) => nodeType === "text") as Text;
    const excerpt = firstText?.value.split(" ").slice(0, length).join(" ");
    return excerpt ? `${excerpt}...` : "Excerpt could not be generated for this content.";
}
