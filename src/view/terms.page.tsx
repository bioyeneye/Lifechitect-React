import React from 'react';
import '../terms.css';
import FooterSection from '../components/footer.component';
import TermsBodySection from '../components/termsbody.component';
import CustomIntroSection from '../components/customintro.component';
import TermsNav from '../components/termsnav.component';



function TermsPage() {

	return (
		<div>
			<TermsNav />
			<CustomIntroSection intro="Terms of Use" />
            <TermsBodySection />
			<FooterSection />
		</div>
	);
}

export default TermsPage;