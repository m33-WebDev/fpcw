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
            <div className="tw-mb-6">
                <h1 className="tw-font-serif tw-text-6xl">
                    {" "}
                    {props.name}
                    {props.credential && `, ${props.credential}`}
                </h1>
            </div>
            <div className="tw-mb-6">
                <p className="tw-font-sans tw-p-2 tw-text-lg tw-bg-gradient-to-r tw-from-[#48C744] tw-to-white">
                    {props.jobTitle}
                </p>
            </div>
        </>
    );
}
