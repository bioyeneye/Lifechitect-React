import React from 'react';
import PrivacyPolicyPage from './view/privacy.page';
import IndexPage from './view/index.page';
import TermsPage from './view/terms.page';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Page404 from './components/page404.component';

const Route = require("react-router-dom").Route;


function App() {

	return (
		//<IndexPage />
		// <TermsPage />
		<Router>
			<Switch>
				<Route path="/" exact strict component={IndexPage} />
				<Route path="/terms" exact strict component={TermsPage} />
				<Route path="/privacy" exact strict component={PrivacyPolicyPage} />
				<Route path='*' exact={true} component={Page404} />
			</Switch>
		</Router>
	);
}

export default App;

