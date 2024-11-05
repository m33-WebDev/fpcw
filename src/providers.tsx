import { Block, Card, Columns, Container, Content, Section } from "react-bulma-components";
import { styled } from "styled-components";
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
                            <FancyBlurb>
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
                            </FancyBlurb>
                        </Columns.Column>
                        <Columns.Column size={8}>
                            <Columns multiline={true}>
                                {profiles.map(({ slug, name, credential, headshot }, i) => (
                                    <Columns.Column size={4} key={i}>
                                        <a href={`/providers/${slug}`}>
                                            <FancyCard style={{ overflow: "hidden" }}>
                                                <img
                                                    src={headshot}
                                                    key={slug}
                                                    style={{
                                                        objectFit: "cover",
                                                        minHeight: "100%",
                                                    }}
                                                />
                                                <FancyPostTitle>
                                                    <Typography>
                                                        {name}
                                                        {credential ? `, ${credential}` : ""}
                                                    </Typography>
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

function sortProfiles(profiles: Profile[]): Profile[] {
    const sabira = profiles.filter((p) => p.name.includes("Sabira"));
    const psych = profiles.filter((p) => p.credential === "MD" && !p.name.includes("Sabira"));
    const np = profiles.filter((p) => p.credential === "PMHNP");
    const lmft = profiles.filter((p) => p.credential === "LMFT");
    const admin = profiles.filter((p) => !["MD", "PMHNP", "LMFT"].includes(p.credential ?? ""));

    return ([] as Profile[]).concat(sabira, psych, np, lmft, admin);
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
