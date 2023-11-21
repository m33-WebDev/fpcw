import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import styled from "styled-components";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="tw-font-nunito tw-text-lg">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_, children) => (
      <h2 className="tw-font-nunito tw-text-3xl tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744]">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h3 className="tw-font-nunito tw-text-2xl tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744]">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h4 className="tw-font-nunito tw-text-xl tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744]">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h5 className="tw-font-nunito tw-text-lg tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744]">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_5]: (_, children) => (
      <h6 className="tw-font-nunito tw-text-lg tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744]">
        {children}
      </h6>
    ),
    [INLINES.HYPERLINK]: (node) => {
      if (node.data.uri.includes("player.vimeo.com/video")) {
        return (
          <span>
            <iframe
              title="Unique Title 001"
              src={node.data.uri}
              frameBorder="0"
              allowFullScreen
            ></iframe>
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
    },
  },
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
