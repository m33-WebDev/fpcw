import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { setConfig } from 'react-hot-loader';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RichText from '../components/richtext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import pageStyle from './post.module.scss';

setConfig({ logLevel: 'no-errors-please' });

export default ({ data, pageContext }) => {
	const { title, metaTitle, feature, body, metaDescription } = data.contentfulPost;

	return (
		<Layout>
			<SEO title={metaTitle || title} description={metaDescription ? metaDescription.metaDescription : ''}/>
			<div className='hero is-fullheight-with-navbar'>
				<div className='hero-body'>
					<div className='container'>
						<div className='columns is-centered is-desktop is-variable is-8'>
							<div className='column is-6'>
								<div className={pageStyle.Frontmatter}>
									<div className='content'>
										<h1 className='title' style={{ textAlign: 'left' }}>
											{title}
										</h1>
									</div>
									<Img
										fluid={feature.fluid}
										alt='Post feature'
										style={{ objectFit: 'cover', marginBottom: '5vmin' }}
									/>
									<Link
										to='/library'
										className='has-text-success is-hidden-mobile'
									>
										<FontAwesomeIcon icon={faChevronLeft} />
										{' Back to library'}
									</Link>
								</div>
							</div>
							<div className='column is-6'>
								<div className={pageStyle.body}>
									<RichText document={body.json} />
									<p>---</p>
									<p style={{ fontStyle: 'italic' }}>
										If you are experiencing symptoms of mental or physical
										distress and would like to discuss your treatment options,
										schedule an appointment with one of our providers today by
										using our <Link to='/appointments/'>online form</Link> or by
										calling (805) 341-3416 during normal business hours.
									</p>
								</div>
								<div />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const postQuery = graphql`
	query($pagePath: String!) {
		contentfulPost(slug: { eq: $pagePath }) {
			slug
			title
			metaTitle
			feature {
				fluid(maxWidth: 800) {
					...GatsbyContentfulFluid
				}
			}
			body {
				json
			}
			metaDescription {
				metaDescription
			}
		}
	}
`;
