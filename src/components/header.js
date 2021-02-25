/* eslint-disable */
import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import './header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default () => {
	const [active, setActive] = useState(false);

	const data = useStaticQuery(graphql`
		query MyQuery {
			file(relativePath: { eq: "images/logo-fitted.png" }) {
				name
				childImageSharp {
					fluid(maxWidth: 256) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
		}
	`);

	return (
		<nav
			className='navbar is-fixed-top is-success'
			role='navigation'
			aria-label='main navigation'
			style={{ boxShadow: '0 2px 2px -2px rgba(0,0,0,.2)' }}
		>
			<div className='container'>
				<div className='navbar-brand'>
					<a className='navbar-item' href='/'>
						<div style={{ width: '80px' }}>
							<Img fluid={data.file.childImageSharp.fluid} alt='Logo' />
						</div>
					</a>

					<a
						role='button'
						className={
							'navbar-burger burger has-text-dark ' +
							(active ? 'is-active' : '')
						}
						aria-label='menu'
						aria-expanded='false'
						onClick={(e) => {
							setActive(!active);
						}}
						onBlur={(e) => {
							setActive(false);
						}}
					>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</a>
				</div>
				<div
					id='navbarBasicExample'
					className={'navbar-menu ' + (active ? 'is-active' : '')}
				>
					<div
						className='navbar-start'
						style={{ flexGrow: 1, flexShrink: 1, display: 'flex' }}
					>
						<Link
							className='navbar-item has-text-centered is-hidden-mobile'
							to='/appointments'
							style={{ marginLeft: '5vmin', marginRight: '5vmin' }}
						>
							<FontAwesomeIcon
								icon={faExclamationCircle}
								className='has-text-warning'
							/>
							<div
								style={{
									marginLeft: '1vmin',
									marginRight: '1vmin',
								}}
								className='has-text-dark'
							>
								Telehealth appointments now available
							</div>
							<FontAwesomeIcon
								icon={faExclamationCircle}
								className='has-text-warning'
							/>
						</Link>
					</div>
					<div className='navbar-end'>
						<Link
							className='navbar-item has-text-dark'
							activeClassName='navbar-item is-active'
							to='/'
						>
							Home
						</Link>
						<Link
							className='navbar-item has-text-dark'
							activeClassName='navbar-item is-active'
							to='/appointments'
						>
							Appointments
						</Link>
						<Link
							className='navbar-item has-text-dark'
							activeClassName='navbar-item is-active'
							to='/library'
						>
							Library
						</Link>
						<Link
							className='navbar-item'
							to='https://www.valant.io/portal/FamilyPsychiatryCounseling'
						>
							<p className='has-text-dark patient-portal'>Patient Portal</p>
						</Link>
						<div className='navbar-item has-dropdown is-hoverable' href='/'>
							<a href='#' className='navbar-link has-text-dark'>
								About
							</a>
							<div className='navbar-dropdown'>
								<a href='/services' className='navbar-item'>
									Services
								</a>
								<a href='/providers' className='navbar-item'>
									Providers
								</a>
								<a href='/careers' className='navbar-item'>
									Careers
								</a>
								<a href='/contact' className='navbar-item'>
									Contact
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
