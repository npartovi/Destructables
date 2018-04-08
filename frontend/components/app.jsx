import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import SessionButtonsContainer from './session/session_buttons_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ArticleFormContainer from './articles/article_form_container';
import ArticleShowContainer from './article_show/article_show_container';

import Footer from './footer/footer';
import Splash from './session/splash';



const App =() => (
		<div>
			<header>
				<SessionButtonsContainer />
			</header>

			<Switch>
				<AuthRoute path="/login" component={LoginFormContainer} />
				<AuthRoute path="/signup" component={SignupFormContainer} />
				<ProtectedRoute path="/articles/new" component={ArticleFormContainer} />
				<Route path="/articles/:articleId" component={ArticleShowContainer} />
				<Route path= "/" component={Splash} />
			</Switch>


			<Footer />

		</div>
)

export default App