import { RECEIVE_ALL_COMMENTS } from '../actions/comment_action'


const CommentReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type){
		case RECEIVE_ALL_COMMENTS:
			return Object.assign({}, state, action.comments.comments);
		default:
			return state;
	}
};

export default CommentReducer;