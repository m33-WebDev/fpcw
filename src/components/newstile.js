import React from "react"
import { Link } from "gatsby"
import Truncate from "react-truncate"

import RichText from "../components/richtext"

function NewsTile({ post, style }) {
  const { title, date, feature, body, slug } = post

  return (
    <Link to={"/" + slug} style={style}>
      <div className="card" style={{ minHeight: "60vmin" }}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={
                feature
                  ? feature.file.url
                  : "https://bulma.io/images/placeholders/1280x960.png"
              }
              alt="News title"
              style={{ objectFit: "cover" }}
            />
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title has-text-black is-5">{title}</h1>
          <h2 className="subtitle" style={{ marginBottom: "4vmin" }}>
            {date}
          </h2>
          <Truncate
            lines={1}
            width={1000}
            ellipsis={<span style={{ color: "#48C774" }}> ...</span>}
          >
            <RichText document={body.json} />
          </Truncate>
        </div>
      </div>
    </Link>
  )
}

export default NewsTile
