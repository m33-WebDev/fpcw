import { Document } from "@contentful/rich-text-types";
import { Gallery, Page, Post, Profile, Review } from "./types";
import * as contentful from "contentful";

export class ContentfulClient {
    readonly client: contentful.ContentfulClientApi<undefined>;

    constructor() {
        const token = process.env.CONTENTFUl_API_TOKEN;

        if (token === undefined) {
            throw new Error("CONTENTFUL_API_TOKEN is undefined");
        }

        this.client = contentful.createClient({
            space: "85wb86zbaewe",
            accessToken: token,
        });
    }

    /** Get a page by entry id. */
    async getPage(id: string): Promise<Page> {
        const entry = await this.client.getEntry(id);
        return entry.fields as Page;
    }

    /** Get a gallery by entry id. */
    async getGallery(id: string): Promise<Gallery> {
        const entry = await this.client.getEntry(id);
        const fields = entry.fields;
        const title = fields.title as string | undefined;
        const photos = ((fields.photos as any[]) ?? [])
            .filter((photo) => photo.sys?.type === "Asset")
            .map((photo) => ({
                title: photo.fields.title,
                description: photo.fields.description,
                url: photo.fields.file.url.replace("//", "https://"),
            }));
        return { title, photos };
    }

    /** Get a post by entry id. */
    async getPost(id: string): Promise<Post> {
        const entry = await this.client.getEntry(id);
        const fields = entry.fields;
        const feature = (fields.feature as any)?.fields?.file?.url?.replace("//", "https://");
        return {
            title: fields.title as string,
            metaTitle: fields.metaTitle as string | undefined,
            metaDescription: fields.metaDescription as string | undefined,
            slug: fields.slug as string | undefined,
            feature,
            body: fields.body as Document | undefined,
        };
    }

    /** Get all posts. */
    async getPosts(): Promise<Post[]> {
        const entries = await this.client.getEntries({
            content_type: "newsPost",
        });
        let posts: Post[] = [];
        for (const entry of entries.items) {
            const fields = entry.fields;
            const feature = (fields.feature as any)?.fields?.file?.url?.replace("//", "https://");
            const post = {
                title: fields.title as string,
                metaTitle: fields.metaTitle as string | undefined,
                metaDescription: fields.metaDescription as string | undefined,
                slug: fields.slug as string | undefined,
                feature,
                body: fields.body as Document | undefined,
            };
            posts.push(post);
        }
        return posts;
    }

    /** Get a profile by entry id. */
    async getProfile(id: string): Promise<Profile> {
        const entry = await this.client.getEntry(id);
        const fields = entry.fields;
        const headshot = (fields.headshot as any)?.fields?.file?.url?.replace("//", "https://");
        return {
            name: fields.name as string,
            slug: fields.slug as string,
            headshot,
            bio: fields.bio as Document,
            description: fields.description as string | undefined,
            jobTitle: fields.jobTitle as string,
            credential: fields.credential as string | undefined,
        };
    }

    /** Get all profiles. */
    async getProfiles(): Promise<Profile[]> {
        const entries = await this.client.getEntries({
            content_type: "providerProfile",
        });
        let profiles: Profile[] = [];
        for (const entry of entries.items) {
            const fields = entry.fields;
            const headshot = (fields.headshot as any)?.fields?.file?.url?.replace("//", "https://");
            const profile = {
                name: fields.name as string,
                slug: fields.slug as string,
                headshot,
                bio: fields.bio as Document,
                description: fields.description as string | undefined,
                jobTitle: fields.jobTitle as string,
                credential: fields.credential as string | undefined,
            };
            profiles.push(profile);
        }
        return profiles;
    }

    /** Get all reviews. */
    async getReviews(): Promise<Review[]> {
        const entries = await this.client.getEntries({
            content_type: "review",
        });
        let reviews: Review[] = [];
        for (const entry of entries.items) {
            const fields = entry.fields;
            reviews.push(fields as Review);
        }
        return reviews;
    }
}
