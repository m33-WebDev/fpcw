import { Block, Card, Columns, Container, Content, Section } from "react-bulma-components";
import { Layout, Seo, Typography } from "./components";
import { ContentfulClient, Profile } from "./data";

interface ProvidersProps {
    title: string;
    description: string;
    profiles: Profile[];
}

export async function query(): Promise<ProvidersProps> {
    const pageId = "4kKLdxoMQhlViViT23ynAX";
    const client = new ContentfulClient();
    const page = await client.getPage(pageId);
    const profiles = await client.getProfiles();
    return {
        title: page.metaTitle ?? "",
        description: (page.metaDescription as string) ?? "",
        profiles,
    };
}

export function Head(props: ProvidersProps) {
    return <Seo title={props.title} description={props.description} />;
}

export default function Providers(props: ProvidersProps) {
    const profiles = sortProfiles(props.profiles);
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
                                        Find the Right Expert for Your Mental Health Needs
                                    </Typography>
                                </Block>
                                <Content size="medium">
                                    <Typography>
                                        Our professional staff consists of board-certified,
                                        experienced psychiatrists, therapists, nurse practitioners,
                                        and others. We are, individually and collectively, committed
                                        to providing the highest quality care to our patients and to
                                        advancing wellness of the mind, body, and spirit.
                                    </Typography>
                                </Content>
                            </div>
                        </Columns.Column>
                        <Columns.Column size={8}>
                            <Columns multiline={true}>
                                {profiles.map(({ slug, name, credential, headshot }, i) => (
                                    <Columns.Column size={4} key={i}>
                                        <a href={`/providers/${slug}`}>
                                            <Card className="overflow-hidden h-[30vmin]">
                                                <img
                                                    src={headshot}
                                                    key={slug}
                                                    className="object-cover min-h-full min-w-full"
                                                />
                                                <div className="border-3 border-green-500 border-r-0 absolute bottom-0 right-0 p-1 text-left bg-green-500/70 max-w-[70%]">
                                                    <Typography>
                                                        {name}
                                                        {credential ? `, ${credential}` : ""}
                                                    </Typography>
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

function sortProfiles(profiles: Profile[]): Profile[] {
    const sabira = profiles.filter((p) => p.name.includes("Sabira"));
    const psych = profiles.filter((p) => p.credential === "MD" && !p.name.includes("Sabira"));
    const np = profiles.filter((p) => p.credential === "PMHNP");
    const lmft = profiles.filter((p) => p.credential === "LMFT");
    const admin = profiles.filter((p) => !["MD", "PMHNP", "LMFT"].includes(p.credential ?? ""));

    return ([] as Profile[]).concat(sabira, psych, np, lmft, admin);
}
