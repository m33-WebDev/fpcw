import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FormAppointment from '../components/formappointment';

import styles from './appointments.module.scss';

const disclaimer1 =
	'This appointment request form requires you to provide personal information for the purposes of scheduling your appointment. By completing and transmitting this form, you consent to disclose such information to a Family Psychiatry Counseling and Wellness affiliated representative. Also, general data (excluding patient identifiable information) may be used for internal analysis purposes.';
const disclaimer2 =
	'\nIf you prefer to request an appointment by telephone, please contact our office directly at (805) 341-3416 during normal business hours.';

export default () => {
	return (
		<Layout>
			<SEO title='FPCW - Appointments' />

			<div class='hero is-fullheight-with-navbar'>
				<div class='hero-body'>
					<div className='container'>
						{/* <div className='column is-9'>
        							<figure className='image is-4by3'>
        								<img
        									style={{ objectFit: 'cover' }}
        									alt='West Coast landscape'
        									src='https://www.totalvoicetech.com/wp-content/uploads/medical-receptionists-productivity.jpg'
        								/>
        							</figure>
        						</div> */}

						<h1 className='title is-size-1 is-size-3-mobile'>
							Request an Appointment
						</h1>

						<FormAppointment />
            <div className={styles.disclaimer}>
							<p>{disclaimer1}</p><br/>
							<p>{disclaimer2}</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
