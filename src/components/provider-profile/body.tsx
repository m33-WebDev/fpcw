import React from "react";
import { Content } from "react-bulma-components";
import { ContentfulRichText, Nullable } from "../../types";
import { RichText } from "../richtext";
import { Typography } from "../style";

export interface BodyProps {
  /**
   * The biographical description for the provider.
   */
  bio: Nullable<ContentfulRichText>;
}

/**
 * Body of the provider profile. Contains a long-form description of the
 * provider's education and professional background.
 */
export function Body(props: BodyProps) {
  return (
    <Content size="medium">
      {props.bio ? (
        <RichText src={props.bio} />
      ) : (
        <Typography family="secondary">
          No information available at this time. Please check back again later.
        </Typography>
      )}
    </Content>
  );
}
