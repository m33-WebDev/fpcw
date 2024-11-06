import { BLOCKS, MARKS, INLINES, Document } from "@contentful/rich-text-types";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";

const options: Options = {
    renderMark: {
        [MARKS.BOLD]: (text: ReactNode) => <b>{text}</b>,
        [MARKS.ITALIC]: (text: ReactNode) => <i>{text}</i>,
        [MARKS.UNDERLINE]: (text: ReactNode) => <u>{text}</u>,
        [MARKS.CODE]: (text: ReactNode) => <code>{text}</code>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_: any, children: any) => (
            <p className="tw-font-sans tw-text-lg tw-mb-4">{children}</p>
        ),
        [BLOCKS.HEADING_1]: (_: any, children: any) => (
            <h2 className="tw-font-sans tw-text-3xl tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744] tw-mb-4">
                {children}
            </h2>
        ),
        [BLOCKS.HEADING_2]: (_: any, children: any) => (
            <h3 className="tw-font-sans tw-text-2xl tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744] tw-mb-4">
                {children}
            </h3>
        ),
        [BLOCKS.HEADING_3]: (_: any, children: any) => (
            <h4 className="tw-font-sans tw-text-xl tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744] tw-mb-4">
                {children}
            </h4>
        ),
        [BLOCKS.HEADING_4]: (_: any, children: any) => (
            <h5 className="tw-font-sans tw-text-lg tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744] tw-mb-4">
                {children}
            </h5>
        ),
        [BLOCKS.HEADING_5]: (_: any, children: any) => (
            <h6 className="tw-font-sans tw-text-lg tw-underline tw-underline-offset-8 tw-decoration-2 tw-decoration-[#48C744] tw-mb-4">
                {children}
            </h6>
        ),
        [INLINES.HYPERLINK]: (node: any) => {
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
                    <span className="block w-full pb-10 relative">
                        <iframe
                            title="Unique Title 002"
                            src={node.data.uri}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder="0"
                            allowFullScreen
                            className="h-full w-full absolute top-0 left-0"
                        ></iframe>
                    </span>
                );
            } else {
                return <a href={node.data.uri}>{node.content[0].value}</a>;
            }
        },
    },
};

interface RichTextProps {
    src: Document;
}

export function RichText(props: RichTextProps) {
    return <>{documentToReactComponents(props.src, options)}</>;
}
