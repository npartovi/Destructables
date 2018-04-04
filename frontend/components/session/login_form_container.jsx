import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
	errors: state.errors,
	formType: "Login",
	navLink: <Link to="/signup">Sign Up Instead?</Link>
});

const mapDispatchToProps = dispatch => ({
	processForm: (formUser) => dispatch(login(formUser))

});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm);
