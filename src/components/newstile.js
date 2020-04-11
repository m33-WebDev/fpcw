import React from "react"
import { Link } from "gatsby"

function NewsTile({ post }) {

  const { title, date, feature, excerpt, slug } = post

  return (
    <Link to={slug}>
      <div className="card" style={{ height: "70vmin", overflow: 'hidden' }}>
        <div className="card-image">
          <figure class="image is-4by3">
            <img src={feature ? feature.file.url : "https://bulma.io/images/placeholders/1280x960.png"} style={{objectFit: 'cover'}}/>
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title has-text-black is-5">{title}</h1>
          <h2 className="subtitle">{date}</h2>
          <div class="content">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsTile
