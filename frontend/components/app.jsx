import React from 'react';
import { Route } from 'react-router-dom';
import SessionButtonsContainer from './session/session_buttons_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


const App =() => (

	<div>
		<nav>
			<h1>Log In Form </h1>
			<SessionButtonsContainer />
		</nav>

		<Route path="/login" component={LoginFormContainer} />
		<Route path="/signup" component={SignupFormContainer} />
	</div>


)

export default App