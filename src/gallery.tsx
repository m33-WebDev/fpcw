import { Block, Columns, Container, Section } from "react-bulma-components";
import { Layout } from "./components";
import { ContentfulClient } from "./data";

export interface GalleryProps {
    photos: {
        title: string;
        description: string;
        url: string;
    }[];
}

export async function query(): Promise<GalleryProps> {
    const galleryId = "5W94mx2xufR79XiYdNxD2B";
    const client = new ContentfulClient();
    const gallery = await client.getGallery(galleryId);
    return { photos: gallery.photos! };
}

export default function Gallery(props: GalleryProps) {
    return (
        <Layout>
            <Section>
                <Container>
                    <Block>
                        <h1 className="tw-font-serif tw-text-6xl">Photo Gallery</h1>
                    </Block>
                    <Columns multiline={true} centered={true}>
                        {props.photos.map((photo) => (
                            <Columns.Column key={photo.title} size={6}>
                                <div className="tw-lg:bg-white tw-p-6 tw-rounded-lg tw-space-y-6">
                                    <img className="tw-mb-4" src={photo.url} alt="Image" />
                                    <p className="tw-font-sans">{photo.description}</p>
                                </div>
                            </Columns.Column>
                        ))}
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}
