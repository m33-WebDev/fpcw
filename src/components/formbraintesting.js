import React from 'react';

/* eslint-disable no-useless-concat */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function BulmaControl({ children, name, hasLeftIcons, hasRightIcons }) {
	function getControlClass() {
		var className = 'control';
		className = className.concat(hasLeftIcons ? ' ' + 'has-icons-left' : '');
		className = className.concat(hasRightIcons ? ' ' + 'has-icons-right' : '');
		return className;
	}

	return (
		<div className='field'>
			<label className='label'>{name}</label>
			<div className={getControlClass()}>{children}</div>
		</div>
	);
}

function FormBrainTesting() {
	return (
		<form
			name='braintestingappointment'
			method='POST'
			netlify='true'
			action='/formsuccess/'
		>
			<input type='hidden' name='form-name' value='braintestingappointment' />

			<div className='columns'>
				<div className='column'>
					<BulmaControl name='First Name'>
						<input
							className='input'
							type='text'
							placeholder='John'
							name='first-name'
							required
						/>
					</BulmaControl>
				</div>
				<div className='column'>
					<BulmaControl name='Last Name'>
						<input
							className='input'
							type='text'
							placeholder='Smith'
							name='last-name'
							required
						/>
					</BulmaControl>
				</div>
			</div>
			<BulmaControl name='Email' hasLeftIcons>
				<input
					className='input'
					type='email'
					placeholder='johnsmith@gmail.com'
					name='email'
					required
				/>{' '}
				<span className='icon is-small is-left'>
					<FontAwesomeIcon icon={faEnvelope} />
				</span>
			</BulmaControl>
			<BulmaControl name='Phone' hasLeftIcons>
				<input
					className='input'
					type='phone'
					placeholder='(123) 456-7890'
					name='phone'
					required
				/>{' '}
				<span className='icon is-small is-left'>
					<FontAwesomeIcon icon={faPhone} />
				</span>
			</BulmaControl>
			<BulmaControl name='Existing Patient?'>
				<label class='radio'>
					<input type='radio' name='existing-patient' value='Yes' />
					Yes
				</label>
				<label class='radio'>
					<input type='radio' name='existing-patient' value='No' />
					No
				</label>
			</BulmaControl>

			<BulmaControl>
				<button
					className='button is-success is-outlined'
					type='submit'
					style={{ width: '100%' }}
				>
					Submit
				</button>
			</BulmaControl>
		</form>
	);
}

export default FormBrainTesting;
