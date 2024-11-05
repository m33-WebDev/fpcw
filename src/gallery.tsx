import { Block, Box, Columns, Container, Section } from "react-bulma-components";
import { Layout, Typography } from "./components";
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
                        <Typography as="h1" $family="secondary" $size="xxl">
                            Photo Gallery
                        </Typography>
                    </Block>
                    <Columns multiline={true} centered={true}>
                        {props.photos.map((photo) => (
                            <Columns.Column key={photo.title} size={6}>
                                <Box>
                                    <img src={photo.url} alt="Image" />
                                    <Typography>{photo.description}</Typography>
                                </Box>
                            </Columns.Column>
                        ))}
                    </Columns>
                </Container>
            </Section>
        </Layout>
    );
}
