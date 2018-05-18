import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			email: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this)
		this.demoState = { username: "demo_user", password: "password" }
	}

	demoLogin(){
		this.setState(this.demoState);
		this.props.processForm(this.state);
	}

	handleSubmit(e){
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user).then(() => this.props.history.push("/"));
	}


	update(field){
		return (e) => {
			e.preventDefault();
			this.setState({[field]: e.target.value});
		};
	}

	render(){

		let email = undefined;
		if(this.props.formType === 'Sign Up'){
			email = 
				
				<input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
		}

		let demoButton = undefined
		

		return(
			<div className="form-container">
				<div id="blur"></div>
				<div id="session_form_container">
					<form id="session_inputs" onSubmit={this.handleSubmit}>
						<input type="text" placeholder="Username" value={this.state.username} onChange={this.update('username')}  />
						<input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
						{ email }
						<button type="submit" >{this.props.formType}</button>
						<button id="demo_button" onClick={this.demoLogin}  type="submit">Demo Login</button>
						<p>New to Destructables? {this.props.navLink}</p>
					</form>
				</div>
			</div>
		)

	}
}

export default withRouter(SessionForm);