import React from 'react';
import { Route } from 'react-router-dom';
import SessionButtonsContainer from './session/session_buttons_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


const App =() => (

		<nav className="nav-bar-main">
			<h1>Log In Form </h1>
			<SessionButtonsContainer />
			<Route path="/login" component={LoginFormContainer} />
			<Route path="/signup" component={SignupFormContainer} />
		</nav>



)

export default App