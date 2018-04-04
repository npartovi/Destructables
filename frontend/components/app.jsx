import React from 'react';
import { Route, Link } from 'react-router-dom';
import SessionButtonsContainer from './session/session_buttons_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SimpleSlider from './slideshow/slide_show';



const App =() => (

		<div>
			<nav className="nav-bar-main">
				<div className="container nav">
					<Link to="/"><i className="fas fa-bomb fa-4x"></i></Link>
					<SessionButtonsContainer />
					<Route path="/login" component={LoginFormContainer} />
					<Route path="/signup" component={SignupFormContainer} />
				</div>
			</nav>

			<div className="Main">
				<SimpleSlider />
			</div>
		
		</div>

)

export default App