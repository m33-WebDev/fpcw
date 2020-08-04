import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import pageStyle from './splashtile.module.scss';

class SplashTile extends React.Component {
	state = { scale: 1, backgroundColor: 'rgba(72, 199, 116, .7)' };

	onMouseOver = () => this.setState({ backgroundColor: '#48C774' });
	onMouseOut = () =>
		this.setState({ backgroundColor: 'rgba(72, 199, 116, .5)' });

	render() {
		var { title, image, to } = this.props;

		return (
			<Link
				to={to ? to : '/'}
				onMouseOver={this.onMouseOver}
				onMouseOut={this.onMouseOut}
				onFocus={this.onMouseOver}
				onBlur={this.onMouseOut}
			>
				<div
					className='card'
					style={{
						height: '100%',
						overflow: 'hidden',
					}}
				>
					<div
						className='card-image'
						style={{ position: 'relative', height: '100%' }}
					>
						<figure className='image is-4by3' style={{ height: '100%' }}>
							{/* <img
                id="image"
                src={
                  image
                    ? image
                    : "https://bulma.io/images/placeholders/1280x960.png"
                }
                alt="Thumbnail"
                style={{ objectFit: "cover", scale: this.state.scale }}
              /> */}
							{/* <Img fluid={image.fluid} key={image.fluid.src} alt='Splash' /> */}
						</figure>
						<div className={'title is-4 has-text-light ' + pageStyle.PostTitle}>
							{title}
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default SplashTile;
