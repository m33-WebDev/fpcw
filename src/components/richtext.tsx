import { BLOCKS, MARKS, INLINES, Document } from "@contentful/rich-text-types";
import { Typography } from "./style";
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
        [BLOCKS.PARAGRAPH]: (_: any, children: any) => <Typography>{children}</Typography>,
        [BLOCKS.HEADING_1]: (_: any, children: any) => <Typography as="h2">{children}</Typography>,
        [BLOCKS.HEADING_2]: (_: any, children: any) => <Typography as="h3">{children}</Typography>,
        [BLOCKS.HEADING_3]: (_: any, children: any) => <Typography as="h4">{children}</Typography>,
        [BLOCKS.HEADING_4]: (_: any, children: any) => <Typography as="h5">{children}</Typography>,
        [BLOCKS.HEADING_5]: (_: any, children: any) => <Typography as="h6">{children}</Typography>,
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
