import React from 'react';
import { Link } from 'react-router-dom';

class SessionButtons extends React.Component {
	constructor(props){
		super(props);
		this.submitHandler = this.submitHandler.bind(this)
	}


	submitHandler(){
		
	}


	sessionLinks(){
		return(
			<div>
				<Link to="/signup">Sign Up</Link>
				<br />
				<Link to="/login">Login</Link>
			</div>
			)
	}

	logged_in() {
		return(
			<div>
				<h1>Hello {this.currentUser.username} </h1>
				<button onClick={this.submitHandler()}>Logout</button>
			</div>
			)
	}

	render(){

		this.currentUser = this.props.currentUser
		this.logout = this.props.action

		return(
			<div>
				{this.currentUser ? this.logged_in() : this.sessionLinks()}
			</div>
			)
	}
}


export default SessionButtons
