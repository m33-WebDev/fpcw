import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './splashtile.module.scss';

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
						<Img
							fluid={image ? image.childImageSharp.fluid : {}}
							alt='Splash'
							style={{height: '100%'}}
						/>
						<div className={'title is-4 has-text-light ' + styles.PostTitle}>
							{title}
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default SplashTile;
