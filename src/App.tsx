import React from 'react';
import './App.css';
import Nav from './components/nav.component';
import IntroSection from './components/intro.component';
import EventSection from './components/event.component';
import HowItWorksSection from './components/howitwork.component';
import ScoreSection from './components/scoresection.component';
import TestimonialSection from './components/testimonial.component';
import ActivtiySection from './components/activity.component';
import StoreSection from './components/store.component';
import FooterSection from './components/footer.component';



function App() {

	return (
		<div>
			<Nav />
			<IntroSection />
			<EventSection />
			<HowItWorksSection />
			<ScoreSection />
			<TestimonialSection />
			<ActivtiySection />
			<StoreSection />
			<FooterSection />
		</div>
	);
}

export default App;
