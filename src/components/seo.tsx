import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type NameMetaObj = {
    name: string;
    content: string;
};

type PropertyMetaObject = {
    property: string;
    content: string;
};

type Meta = (NameMetaObj | PropertyMetaObject)[];

export interface SeoProps {
    title: string;
    description: string;
    meta?: Meta;
    noIndex?: boolean;
    noFollow?: boolean;
}

function Seo(props: SeoProps) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaTitle = "".concat(props.title, " | Family Psychiatry, Counseling and Wellness");
    const metaDescription = props.description || site.siteMetadata.description;
    const metaRobots = "".concat(props.noIndex ? "noindex" : "index", ", ", props.noFollow ? "nofollow" : "follow");

    return (
        <Helmet
            htmlAttributes={{ lang: "en" }}
            title={metaTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: props.title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: metaTitle
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    name: `robots`,
                    content: metaRobots
                }
            ].concat(props.meta)}
        />
    );
}

Seo.defaultProps = {
    meta: []
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
};

export default Seo;
