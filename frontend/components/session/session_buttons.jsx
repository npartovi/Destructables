import React from 'react';
import { Link } from 'react-router-dom';
import SimpleSlider from '../slideshow/slide_show';


class SessionButtons extends React.Component {
	constructor(props){
		super(props)
		this.logout = this.props.action;
	}


	sessionLinks(){

		if(this.props.currentUser){
			return(
				<div className="greeting_container">
					<h1>Hello {this.props.currentUser.username} </h1>
					<button onClick={this.logout}>Logout</button>
				</div>
				)
		}else {
			return(

				<div className="session_buttons">
					<Link to="/login">Login</Link>
					<span className="pipe">|</span>
					<Link to="/signup">Sign up</Link>
				</div>
				)
		}
	}


	render(){
		

		return(
			<div>
				<nav className="nav-bar-main">
					<div className="container nav">
						<Link to="/"><i className="fas fa-bomb fa-4x"></i></Link>
						<Link to="/articles/new">Create a new Article</Link>
						{this.sessionLinks()}

					</div>
				</nav>
			</div>
		)
		

	}
}


export default SessionButtons
