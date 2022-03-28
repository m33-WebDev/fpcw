import React from "react";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import styled from "styled-components";

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <b>{text}</b>,
        [MARKS.ITALIC]: text => <i>{text}</i>,
        [MARKS.UNDERLINE]: text => <u>{text}</u>,
        [MARKS.CODE]: text => <code>{text}</code>
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
        [BLOCKS.HEADING_1]: (_, children) => <h2>{children}</h2>,
        [BLOCKS.HEADING_2]: (_, children) => <h3>{children}</h3>,
        [BLOCKS.HEADING_3]: (_, children) => <h4>{children}</h4>,
        [BLOCKS.HEADING_4]: (_, children) => <h5>{children}</h5>,
        [BLOCKS.HEADING_5]: (_, children) => <h6>{children}</h6>,
        [INLINES.HYPERLINK]: node => {
            if (node.data.uri.includes("player.vimeo.com/video")) {
                return (
                    <span>
                        <iframe title="Unique Title 001" src={node.data.uri} frameBorder="0" allowFullScreen></iframe>
                    </span>
                );
            } else if (node.data.uri.includes("youtube.com/embed")) {
                return (
                    <FancyVideoWrapper>
                        <FancyVideo
                            title="Unique Title 002"
                            src={node.data.uri}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder="0"
                            allowFullScreen
                        ></FancyVideo>
                    </FancyVideoWrapper>
                );
            } else {
                return <a href={node.data.uri}>{node.content[0].value}</a>;
            }
        }
    }
};

export function RichText({ src }) {
    return <FancyRichTextWrapper>{renderRichText(src, options)}</FancyRichTextWrapper>;
}

const FancyVideoWrapper = styled.span`
    padding-bottom: 56.25%;
    position: relative;
    display: block;
    width: 100%;
`;

const FancyVideo = styled.iframe`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const FancyRichTextWrapper = styled.div`
    padding-right: 2vmin;

    color: #2e2f3e;
    font-size: calc(#{$font-size-base-desktop} + 1vw);
    font-weight: lighter;

    word-wrap: break-word;

    // Desktop fonts
    @media (min-width: 1024px) {
        h1 {
            font-size: calc(#{$font-size-base-desktop} + 2vw);
        }

        h2 {
            font-size: calc(#{$font-size-base-desktop} + 1.5vw);
        }

        p {
            line-height: calc((#{$font-size-base-desktop} + 1vw) * 1.6);
        }
    }

    // Mobile fonts
    @media (max-width: 1024px) {
        font-weight: normal !important;

        h1 {
            font-size: calc(#{$font-size-base-mobile} + 2vw);
        }

        h2 {
            font-size: calc(#{$font-size-base-mobile} + 1.5vw);
        }

        p {
            font-size: calc(#{$font-size-base-mobile} + 1.2vw);
            line-height: calc((#{$font-size-base-mobile} + 1.2vw) * 1.6);
        }
    }

    h1,
    h2 {
        text-align: left;
        // margin-top: 5vmin;
        margin-bottom: 3vmin;
    }

    h1 {
        color: #20639b;
        display: inline-block;
    }

    h2 {
        color: #3caea3;
        display: inline-block;
    }

    p {
        margin-bottom: 3vmin;
    }

    p,
    ul {
        code {
            background-color: rgb(231, 224, 224);
            color: rgb(53, 142, 184);
            padding: 3px;
            border-radius: 0.3em;
        }
    }

    blockquote {
        color: darken($color-fg-primary, 30%);
        font-style: italic;
        padding-left: 1em;
        border-left: 1px solid rgb(208, 212, 216);

        p {
            font-size: calc(#{$font-size-base-desktop} + 0.8vw);
            line-height: calc((#{$font-size-base-desktop} + 0.8vw) * 1.4);
        }
    }

    ul,
    ol {
        margin-left: 3vmin;
        // margin-top: 3vmin;
        margin-bottom: 3vmin;
    }

    ul {
        list-style-type: square;
    }

    img {
        object-fit: contain;
        max-width: 100%;
        margin-bottom: 0.5em;
    }

    figcaption {
        font-weight: 100;
        font-style: italic;
        color: lighten($color-bg-secondary, 50%);
        text-align: center;
    }
`;
