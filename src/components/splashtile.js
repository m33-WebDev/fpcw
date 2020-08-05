import React from 'react';
import { Link } from 'gatsby';

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
						<figure className='image is-4by3' style={{ height: '100%' }}>
							<img src={image} alt='Splash' style={{objectFit: 'cover'}} />
						</figure>
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
