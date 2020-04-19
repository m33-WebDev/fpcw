import React from "react"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <b>{text}</b>,
    [MARKS.ITALIC]: text => <i>{text}</i>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
    [MARKS.CODE]: text => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
  },
}

class RichText extends React.Component {
  render() {
    return documentToReactComponents(this.props.document, options)
  }
}

export default RichText;
