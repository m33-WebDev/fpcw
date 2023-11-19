import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import styled from "styled-components";
import { Typography } from "./style";

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <b>{text}</b>,
        [MARKS.ITALIC]: text => <i>{text}</i>,
        [MARKS.UNDERLINE]: text => <u>{text}</u>,
        [MARKS.CODE]: text => <code>{text}</code>
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_, children) => <Typography family="secondary">{children}</Typography>,
        [BLOCKS.HEADING_1]: (_, children) => (
            <Typography family="secondary" as="h2">
                {children}
            </Typography>
        ),
        [BLOCKS.HEADING_2]: (_, children) => (
            <Typography family="secondary" as="h3">
                {children}
            </Typography>
        ),
        [BLOCKS.HEADING_3]: (_, children) => (
            <Typography family="secondary" as="h4">
                {children}
            </Typography>
        ),
        [BLOCKS.HEADING_4]: (_, children) => (
            <Typography family="secondary" as="h5">
                {children}
            </Typography>
        ),
        [BLOCKS.HEADING_5]: (_, children) => (
            <Typography family="secondary" as="h6">
                {children}
            </Typography>
        ),
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
    return <>{renderRichText(src, options)}</>;
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
