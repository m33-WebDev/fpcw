import { Block, Card, Columns, Container, Content, Section } from "react-bulma-components";
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
                            <div className="min-[1024px]:sticky min-[1024px]:top-[15vh]">
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
                            </div>
                        </Columns.Column>
                        <Columns.Column size={8}>
                            <Columns multiline={true}>
                                {props.posts.map(({ slug, title, feature }, i) => (
                                    <Columns.Column size={4} key={i}>
                                        <a href={`/library/${slug}`}>
                                            <Card className="overflow-hidden h-[30vmin]">
                                                <img
                                                    key={slug}
                                                    src={feature}
                                                    alt={title}
                                                    style={{
                                                        objectFit: "cover",
                                                        minHeight: "100%",
                                                    }}
                                                />
                                                <div className="border-3 border-green-500 border-r-0 absolute bottom-0 right-0 p-1 text-left bg-green-500/70 max-w-[70%]">
                                                    <Typography>{title}</Typography>
                                                </div>
                                            </Card>
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
