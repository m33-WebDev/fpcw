import { RichText } from "../richtext";
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
        <>
            {props.bio ? (
                <RichText src={props.bio} />
            ) : (
                <p className="tw-font-sans tw-text-lg">
                    No information available at this time. Please check back again later.
                </p>
            )}
        </>
    );
}
