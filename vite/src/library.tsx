import { Block, Card, Columns, Container, Content, Section } from "react-bulma-components";
import { styled } from "styled-components";
import { Layout, Seo, Typography } from "./components";
import { ContentfulClient, Post } from "./data";

interface LibraryProps {
    title: string;
    description: string;
    posts: Post[];
}

export async function query(): Promise<LibraryProps> {
    const pageId = "97AY8rNcknbSg8C5rdshT";
    const client = new ContentfulClient();
    const page = await client.getPost(pageId);
    const posts = await client.getPosts();
    return {
        title: page.metaTitle ?? "",
        description: (page.metaDescription as string) ?? "",
        posts,
    };
}

export function Head(props: LibraryProps) {
    return <Seo title={props.title} description={props.description} />;
}

export default function Library(props: LibraryProps) {
    return (
        <Layout>
            <Section>
                <Container>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns gap={4}>
                        <Columns.Column size={4}>
                            <FancyBlurb>
                                <Block>
                                    <Typography as="h1" $family="secondary" $size="xxl">
                                        The Health Library
                                    </Typography>
                                </Block>
                                <Content size="medium">
                                    <Typography>
                                        Read up on the conditions we treat, the treatments we offer,
                                        and developments in the fields of psychiatry, mental health,
                                        and wellness.
                                    </Typography>
                                </Content>
                            </FancyBlurb>
                        </Columns.Column>
                        <Columns.Column size={8}>
                            <Columns multiline={true}>
                                {props.posts.map(({ slug, title, feature }, i) => (
                                    <Columns.Column size={4} key={i}>
                                        <a href={`/library/${slug}`}>
                                            <FancyCard>
                                                <FancyPostImage
                                                    key={slug}
                                                    src={feature}
                                                    alt={title}
                                                />
                                                <FancyPostTitle>
                                                    <Typography>{title}</Typography>
                                                </FancyPostTitle>
                                            </FancyCard>
                                        </a>
                                    </Columns.Column>
                                ))}
                            </Columns>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}

const FancyBlurb = styled.div`
    @media (min-width: 1024px) {
        position: sticky;
        top: 15vh;
    }
`;

const FancyCard = styled(Card)`
    @media (max-width: 769px) {
        height: 70vmin;
    }
    @media (min-width: 769px) {
        height: 30vmin;
    }
`;

const FancyPostTitle = styled.div`
    border: 3px solid #48c774;
    border-right: 0px;

    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.3em;
    text-align: left;
    background: rgba(72, 199, 116, 0.7);
    max-width: 70%;
`;

const FancyPostImage = styled.img`
    height: 100%;
`;
