import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
	errors: state.errors,
	formType: "Sign Up",
	navLink: <Link to="/login">Login Instead </Link>
	
});

const mapDispatchToProps = dispatch => ({
	processForm: (formUser) => dispatch(signup(formUser)) 

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm);
