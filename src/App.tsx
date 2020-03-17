import React from 'react';
import PrivacyPolicyPage from './view/privacy.page';
import IndexPage from './view/index.page';
import TermsPage from './view/terms.page';
import { BrowserRouter as Router } from "react-router-dom";

const Route = require("react-router-dom").Route;


function App() {

	return (
		//<IndexPage />
		// <TermsPage />
		<Router>
			<Route path="/" exact render = {
				() => {
					return <IndexPage />
				}
			}/>
			<Route path="/terms" exact render = {
				() => {
					return <TermsPage />
				}
			}/>
			<Route path="/privacy" exact render = {
				() => {
					return <PrivacyPolicyPage />
				}
			}/>
		</Router>
	);
}

export default App;
