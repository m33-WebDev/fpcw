import React from "react"
import { Link } from "gatsby"

class SplashTile extends React.Component {
  state = { scale: 1 }

  onMouseOver = () => this.setState({scale: '1.2'})
  onMouseOut = () => this.setState({ scale: '1' })

  render() {
    var { title, image } = this.props

    return (
      <Link to="/" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <div
          className="card"
          style={{
            height: "100%",
            overflow: "hidden",
            border: "4px solid #48C774",
          }}
        >
          <div
            className="card-image"
            style={{ position: "relative", height: "100%" }}
          >
            <figure className="image is-4by3" style={{ height: "100%" }}>
              <img
                id="image"
                src={
                  image
                    ? image
                    : "https://bulma.io/images/placeholders/1280x960.png"
                }
                style={{ objectFit: "cover", scale: this.state.scale }}
              />
            </figure>
            <div
              className="title is-4 has-text-light"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                padding: "5px",
                // borderBottom: "2px solid #48C774",
                background: "#48C774",
              }}
            >
              {title}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default SplashTile
