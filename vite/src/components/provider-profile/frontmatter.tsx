import { Block } from "react-bulma-components";
import { Typography } from "../style";

export interface FrontmatterProps {
    /**
     * The full name of the provider.
     */
    name: string;
    /**
     * The credential of the provider, if applicable.
     */
    credential?: string;
    /**
     * The human-friendly job title of the provider.
     */
    jobTitle: string;
}

/**
 * Frontmatter of the provider profile. Contains standard information like name,
 * credentials, and title.
 */
export function Frontmatter(props: FrontmatterProps) {
    return (
        <>
            <Block>
                <Typography as="h1" $family="secondary" $size="xxl">
                    {props.name}
                    {props.credential && `, ${props.credential}`}
                </Typography>
            </Block>
            <Block>
                <Typography as="h2" $size="s">
                    {props.jobTitle}
                </Typography>
            </Block>
        </>
    );
}
