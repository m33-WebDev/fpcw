import React from "react"
import { Link } from "gatsby"

class SplashTile extends React.Component {
  state = { scale: 1, backgroundColor: "rgba(72, 199, 116, .7)" }

  onMouseOver = () => this.setState({ backgroundColor: "#48C774" })
  onMouseOut = () =>
    this.setState({ backgroundColor: "rgba(72, 199, 116, .5)" })

  render() {
    var { title, image, to } = this.props

    return (
      <Link
        to={to ? to : "/"}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <div
          className="card"
          style={{
            height: "100%",
            overflow: "hidden",
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
                top: "80%",
                left: "0",
                width: "auto",
                padding: "5px .8em",
                textAlign: "center",
                // // borderBottom: "2px solid #48C774",
                // background: this.state.backgroundColor,
                background: "linear-gradient(to top, rgb(64, 64, 64, .8), rgb(0,0,0, 0))",
                borderBottom: "3px solid #48C774",
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
