import React from 'react';
import { Link } from 'react-router-dom';

class SessionButtons extends React.Component {
	constructor(props){
		super(props)
		this.logout = this.props.action;
	}

	render(){
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
					<Link to="/signup">signup</Link>
					<br/>
					<Link to="/login">login</Link>
				</div>
				)
		}
	}
}


export default SessionButtons
