import React from 'react';
import '../terms.css';
import FooterSection from '../components/footer.component';
import CustomIntroSection from '../components/customintro.component';
import TermsNav from '../components/termsnav.component';
import PrivacyBodySection from '../components/privacybody.component';



function PrivacyPolicyPage() {

	return (
		<div>
			<TermsNav />
			<CustomIntroSection intro="Privacy Policy" />
            <PrivacyBodySection />
			<FooterSection />
		</div>
	);
}

export default PrivacyPolicyPage;