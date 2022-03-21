import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./splashtile.module.scss";

class SplashTile extends React.Component {
    state = { scale: 1, backgroundColor: "rgba(72, 199, 116, .7)" };

    onMouseOver = () => this.setState({ backgroundColor: "#48C774" });
    onMouseOut = () => this.setState({ backgroundColor: "rgba(72, 199, 116, .5)" });

    render() {
        var { title, image, to } = this.props;

        return (
            <Link
                to={to ? to : "/"}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onFocus={this.onMouseOver}
                onBlur={this.onMouseOut}
            >
                <div
                    className="card"
                    style={{
                        height: "100%",
                        overflow: "hidden"
                    }}
                >
                    <div className="card-image" style={{ position: "relative", height: "100%" }}>
                        <GatsbyImage image={getImage(image)} alt="Splash" style={{ height: "100%" }} />
                        <h2 className={"title is-5 has-text-light " + styles.PostTitle}>{title}</h2>
                    </div>
                </div>
            </Link>
        );
    }
}

export default SplashTile;
