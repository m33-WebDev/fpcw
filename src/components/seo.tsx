import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { useSiteMetadata } from "../hooks";

export interface SeoProps {
    title: string;
    description: string;
    noIndex?: boolean;
    noFollow?: boolean;
    children?: ReactNode;
}

function Seo(props: SeoProps) {
    const siteMetadata = useSiteMetadata();

    const title = `${props.title} | Family Psychiatry, Counseling and Wellness`;
    const description = props.description || siteMetadata.description;
    const author = siteMetadata.author;
    const robots = `${props.noIndex ? "noindex" : "index"}, ${props.noFollow ? "nofollow" : "follow"}`;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={author} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="robots" content={robots} />
            {props.children}
        </>
    );
}

Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default Seo;
