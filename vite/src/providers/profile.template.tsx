import { Columns, Container, Section } from "react-bulma-components";
import { Layout, Seo } from "../components";
import { Body, Frontmatter } from "../components/provider-profile";
import { ContentfulClient, Profile } from "../data";
import { InstanceInfo } from "../../engine";

interface InstanceParams {
    profileId: string;
}

export async function instances(): Promise<InstanceInfo<InstanceParams>[]> {
    const client = new ContentfulClient();
    const profiles = await client.getProfiles();
    return profiles.map((post) => ({
        name: post.slug!,
        params: {
            profileId: post.id,
        },
    }));
}

interface ProviderProfileProps {
    profile: Profile;
}

export async function query(params: InstanceParams): Promise<ProviderProfileProps> {
    const client = new ContentfulClient();
    const profile = await client.getProfile(params.profileId);
    return { profile };
}

export function Head(props: ProviderProfileProps) {
    const { name, jobTitle, description } = props.profile;
    const title = `${name}, ${jobTitle} | Providers`;
    return <Seo title={title} description={description ?? ""} />;
}

export default function ProviderProfile(props: ProviderProfileProps) {
    const { name, credential, jobTitle, headshot, bio } = props.profile;

    return (
        <Layout>
            <Section>
                <Container>
                    {/* @ts-ignore: @todo: not sure why gap is not found on Columns component */}
                    <Columns gap={8}>
                        <Columns.Column>
                            <img src={headshot} alt="Headshot" />
                        </Columns.Column>
                        <Columns.Column>
                            <Frontmatter
                                name={name!}
                                credential={credential}
                                jobTitle={jobTitle!}
                            />
                            <Body bio={bio} />
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}
