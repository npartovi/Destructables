import React from 'react';
import { connect } from 'react-redux';
import SessionButtons from './session_buttons';
import { logout } from '../../actions/session_actions';

const mapStateToProps =(state) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = (props) => ({
	action: ()=> dispatch(logout())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionButtons);