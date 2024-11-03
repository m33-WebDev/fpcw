import { Content } from "react-bulma-components";
import { RichText } from "../richtext";
import { Typography } from "../style";
import { Document } from "@contentful/rich-text-types";

export interface BodyProps {
    /**
     * The biographical description for the provider.
     */
    bio: Document;
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
                <Typography>
                    No information available at this time. Please check back again later.
                </Typography>
            )}
        </Content>
    );
}
