import { Block, Columns, Container, Content, Section } from "react-bulma-components";
import { Layout, Seo, RichText, NewsletterSignup, Typography } from "../components";
import { ContentfulClient, Post as PostInfo } from "../data";
import { InstanceInfo } from "../../engine";

interface InstanceParams {
    postId: string;
}

export async function instances(): Promise<InstanceInfo<InstanceParams>[]> {
    const client = new ContentfulClient();
    const posts = await client.getPosts();
    return posts.map((post) => ({
        name: post.slug!,
        params: {
            postId: post.id,
        },
    }));
}

interface PostProps {
    post: PostInfo;
}

export async function query(params: InstanceParams): Promise<PostProps> {
    const client = new ContentfulClient();
    const post = await client.getPost(params.postId);
    return { post };
}

export function Head(props: PostProps) {
    const { title, metaTitle, metaDescription } = props.post;
    return <Seo title={metaTitle ?? title} description={metaDescription ?? ""} />;
}

export default function Post(props: PostProps) {
    const { title, feature, body } = props.post;

    return (
        <Layout>
            <Section>
                <Container>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns multiline={true}>
                        <Columns.Column size="half" offset={2}>
                            <Typography as="h1" family="secondary" size="xxl">
                                {title}
                            </Typography>
                        </Columns.Column>
                        <Columns.Column size="two-thirds" offset={2}>
                            {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                            <Columns gap={4}>
                                <Columns.Column size="three-quarters">
                                    <Block>
                                        <img src={feature} alt="Post feature" />
                                    </Block>
                                    <Content size="medium">
                                        {body && <RichText src={body} />}
                                    </Content>
                                </Columns.Column>
                                <Columns.Column size="one-quarter">
                                    <Content>
                                        <NewsletterSignup />
                                    </Content>
                                </Columns.Column>
                            </Columns>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}
