import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionButtonsContainer from './session/session_buttons_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';



const App =() => (

		<div>
			<SessionButtonsContainer />

			<Switch>
				<AuthRoute path="/login" component={LoginFormContainer} />
				<AuthRoute path="/signup" component={SignupFormContainer} />
			</Switch>

		</div>

)

export default App