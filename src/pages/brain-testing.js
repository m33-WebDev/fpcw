import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FormBrainTesting from '../components/formbraintesting';

export default () => {
	return (
		<Layout>
			<SEO title='Schedule a brain testing appointment' />
			<section className='section'>
				<div className='container'>
                    <div class="columns">
                        <div class="column is-6">
                            <h1 className='title is-size-1-desktop'>Schedule a Brain Testing Appointment Today!</h1>
        					<FormBrainTesting />
                        </div>
                    </div>
				</div>
			</section>
		</Layout>
	);
};
