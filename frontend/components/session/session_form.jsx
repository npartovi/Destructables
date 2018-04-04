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
				<label>Email
					<input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
				</label>
		}

		return(
			<div>
				<h1>{ this.props.formType }</h1>

				<form onSubmit={this.handleSubmit}>
					Please {this.props.formType} or {this.props.navLink}
				<br />
				<label>Username
					<input type="text" value={this.state.username} onChange={this.update('username')}  />
				</label>
				<br />
				<label>Password
					<input type="password" value={this.state.password} onChange={this.update('password')} />
				</label>
				<br />

				{ email }

				<input type="submit" value={this.props.formType} />

				</form>
			</div>
		)

	}
}

export default withRouter(SessionForm);