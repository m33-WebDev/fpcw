import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Truncate from 'react-truncate';

import RichText from '../components/richtext';

function NewsTile({ post, style }) {
	const { title, date, feature, body, slug } = post;

	return (
		<Link to={'/library/' + slug} style={style}>
			<div className='card' style={{ minHeight: '60vmin' }}>
				<div className='card-image'>
					<Img fluid={feature.fluid} key={feature.fluid.src} alt={feature.title} />
				</div>
				<div className='card-content'>
					<h1 className='title has-text-black is-5'>{title}</h1>
					<h2 className='subtitle' style={{ marginBottom: '4vmin' }}>
						{date}
					</h2>
					<Truncate
						lines={1}
						width={1000}
						ellipsis={<span style={{ color: '#48C774' }}> ...</span>}
                                                className='is-hidden-mobile'
					>
						<RichText src={body} />
					</Truncate>
				</div>
			</div>
		</Link>
	);
}

export default NewsTile;
