import { Columns, Container, Section } from "react-bulma-components";
import { Layout, Seo } from "./components";
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
                                <h1 className="tw-mb-6 tw-font-serif tw-text-5xl tw-leading-tight">
                                    The Health Library
                                </h1>
                                <p className="tw-font-sans tw-text-lg">
                                    Read up on the conditions we treat, the treatments we offer, and
                                    developments in the fields of psychiatry, mental health, and
                                    wellness.
                                </p>
                            </div>
                        </Columns.Column>
                        <Columns.Column size={8}>
                            <Columns multiline={true}>
                                {props.posts.map(({ slug, title, feature }, i) => (
                                    <Columns.Column size={4} key={i}>
                                        <a href={`/library/${slug}`}>
                                            <div className="tw-rounded-3xl tw-h-72 tw-w-72 tw-shadow tw-flex tw-flex-col tw-overflow-hidden">
                                                <div className="tw-grow tw-overflow-hidden">
                                                    <img
                                                        key={slug}
                                                        src={feature}
                                                        alt={title}
                                                        className="tw-w-full tw-h-full tw-object-cover"
                                                    />
                                                </div>
                                                <div className="tw-px-4 tw-py-2 tw-text-slate-600 tw-font-sans tw-font-medium">
                                                    {title}
                                                </div>
                                            </div>
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
