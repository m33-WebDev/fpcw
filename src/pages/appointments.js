import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout';
import SEO from '../components/seo';
import FormAppointment from '../components/formappointment';

import styles from './appointments.module.scss';

const disclaimer1 =
	'This appointment request form requires you to provide personal information for the purposes of scheduling your appointment. By completing and transmitting this form, you consent to disclose such information to a Family Psychiatry Counseling and Wellness affiliated representative. Also, general data (excluding patient identifiable information) may be used for internal analysis purposes.';
const disclaimer2 =
	'\nIf you prefer to request an appointment by telephone, please contact our office directly at (805) 341-3416 during normal business hours.';

export default ({data}) => {

	var pageDescription = data.contentfulPage.metaDescription.metaDescription;
	
	return (
		<Layout>
			<SEO title='Now Conducting Telehealth Appointments for Mental Health Needs' description={pageDescription} />

			<div className='hero is-fullheight-with-navbar'>
				<div className='hero-body'>
					<div className='container'>
						<h1 className='title is-size-1 is-size-3-mobile'>
							Request an Appointment
						</h1>
						<FormAppointment />
						<div className={styles.disclaimer}>
							<p>{disclaimer1}</p>
							<br />
							<p>{disclaimer2}</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query {
		contentfulPage(title: {eq: "Appointments"}) {
			metaDescription {
				metaDescription
			}
		}
	}
`
