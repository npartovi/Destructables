import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user);
	}


	update(field){
		return (e) => {
			this.setState({[field]: e.target.value});
		};
	}

	render(){

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

				<input type="submit" value={this.props.formType} />

				</form>
			</div>
		)

	}
}

export default withRouter(SessionForm);