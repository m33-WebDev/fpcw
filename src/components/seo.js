import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ title, description, meta, lang, noIndex, noFollow }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaTitle = ''.concat(
		title,
		" | Family Psychiatry, Counseling and Wellness"
	);
	const metaDescription = description || site.siteMetadata.description;
	const metaRobots = ''.concat(
		noIndex ? 'noindex' : 'index',
		', ',
		noFollow ? 'nofollow' : 'follow'
	);

	return (
		<Helmet
			htmlAttributes={{ lang }}
			title={metaTitle}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: metaTitle,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					name: `robots`,
					content: metaRobots,
				},
			].concat(meta)}
		/>
	);
}

Seo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default Seo;
