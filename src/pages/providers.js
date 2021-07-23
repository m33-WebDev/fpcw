import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import * as styles from './providers.module.scss';

export default ({ data }) => {

	function createProfileCard(profile, i) {
		var { slug, name, headshot } = profile;
		return (
			<div className='column is-4' key={i}>
				<Link to={slug ? '/providers/' + slug : '/'}>
					<div className={'card ' + styles.Card}>
						<Img
							fluid={
								headshot
									? headshot.fluid
									: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
							}
							alt='Post Feature'
							style={{ objectFit: 'cover', height: '100%' }}
						/>

						<div className={'title is-4 has-text-light ' + styles.PostTitle}>
							{name}
						</div>
					</div>
				</Link>
			</div>
		);
	}

	const metaTitle = data.contentfulPage.metaTitle;
	const metaDescription = data.contentfulPage.metaDescription.metaDescription;

	return (
		<Layout>
			<SEO title={metaTitle} pageDescription={metaDescription} />
			<div className='hero is-fullheight-with-navbar'>
				<div className='hero-body'>
					<div className='container'>
						<div className='columns is-desktop is-variable is-4'>
							<div className='column is-4'>
								<div
									className={
										'content has-text-centered ' + styles.PageDescription
									}
								>
									<h1
										className='title'
										style={{
											borderBottom: '4px solid #48C774',
											textAlign: 'left',
											paddingBottom: '.3em',
										}}
									>
										Find the Right Expert for Your Mental Health Needs
									</h1>
									<p className='is-size-5' style={{ textAlign: 'left' }}>
										Our professional staff consists of board-certified,
										experienced psychiatrists, therapists, nurse practitioners,
										and others. We are, individually and collectively, committed
										to providing the highest quality care to our patients and to
										advancing wellness of the mind, body, and spirit.
									</p>
								</div>
							</div>
							<div className='column is-8'>
								<div className={'columns is-multiline '}>
									{createProfileCard(data.profSabira, 0)}
									{data.profPsych.nodes.map((profile, i) => {
										return createProfileCard(profile, i);
									})}
									{data.profNP.nodes.map((profile, i) => {
										return createProfileCard(profile, i);
									})}
									{data.profLMFT.nodes.map((profile, i) => {
										return createProfileCard(profile, i);
									})}
									{data.profAdmin.nodes.map((profile, i) => {
										return createProfileCard(profile, i);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query {
		contentfulPage(title: {eq: "Providers"}) {
			metaTitle
			metaDescription {
				metaDescription
			}
		}
		profSabira: contentfulProviderProfile(name: { eq: "Sabira Saifuddin" }) {
			slug
			name
			jobTitle
			headshot {
				fluid(maxWidth: 600) {
					...GatsbyContentfulFluid
				}
			}
		}
		profPsych: allContentfulProviderProfile(
			filter: { credential: { eq: "MD" }, name: { nin: "Sabira Saifuddin" } }
		) {
			nodes {
				slug
				name
				jobTitle
				headshot {
					fluid(maxWidth: 600) {
						...GatsbyContentfulFluid
					}
				}
			}
		}
		profNP: allContentfulProviderProfile(
			filter: { credential: { eq: "PMHNP" }, name: { nin: "Sabira Saifuddin" } }
		) {
			nodes {
				slug
				name
				jobTitle
				headshot {
					fluid(maxWidth: 600) {
						...GatsbyContentfulFluid
					}
				}
			}
		}
		profLMFT: allContentfulProviderProfile(
			filter: { credential: { eq: "LMFT" }, name: { nin: "Sabira Saifuddin" } }
		) {
			nodes {
				slug
				name
				jobTitle
				headshot {
					fluid(maxWidth: 600) {
						...GatsbyContentfulFluid
					}
				}
			}
		}
		profAdmin: allContentfulProviderProfile(
			filter: { credential: { nin: ["MD", "PMHNP", "LMFT"] } }
		) {
			nodes {
				slug
				name
				jobTitle
				headshot {
					fluid(maxWidth: 600) {
						...GatsbyContentfulFluid
					}
				}
			}
		}
	}
`;
