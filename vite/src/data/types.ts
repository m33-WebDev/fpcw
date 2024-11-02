import { Document } from "@contentful/rich-text-types";

export interface Page {
    title?: string;
    metaTitle?: string;
    metaDescription?: string;
}

export interface Gallery {
    title?: string;
    photos?: {
        title: string;
        description: string;
        url: string;
    }[];
}

export interface Post {
    title: string;
    metaTitle?: string;
    metaDescription?: string;
    slug?: string;
    feature?: string;
    body?: Document;
}

export interface Profile {
    name: string;
    slug: string;
    headshot: string;
    bio: Document;
    description?: string;
    jobTitle: string;
    credential?: string;
}

export interface Review {
    author?: string;
    link?: string;
    content?: Document;
}
