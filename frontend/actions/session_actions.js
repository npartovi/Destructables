import * as UserApitUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';



export const signup = (user) => dispatch => (
	UserApitUtil.signup(user)
		.then(user => dispatch(receiveCurrentUser(user)))
);

export const login = (user) => dispatch => (
	UserApitUtil.login(user)
		.then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
	UserApitUtil.logout()
		.then(() => dispatch(receiveCurrentUser(null)))
);


const receiveCurrentUser = (currentUser) => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

const receiveSessionErrors = (errors) => ({
	type: RECEIVE_SESSION_ERRORS,
	errors
});