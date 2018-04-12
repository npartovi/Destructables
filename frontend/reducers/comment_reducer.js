import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action';
import { RECEIVE_ARTICLE } from '../actions/article_actions';
import merge from 'lodash/merge';


const CommentReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState; 
	switch(action.type){
		case RECEIVE_ALL_COMMENTS:
			return Object.assign({}, state, action.comments);
		case RECEIVE_COMMENT:
			return merge({}, state, action.comment);
		case RECEIVE_ARTICLE:
			newState = action.payload.comments;
			return Object.assign({}, newState);
		case REMOVE_COMMENT:
			newState = merge({}, state);
			delete newState[action.commentId.id];
			return newState;
		default:
			return state;
	}
};


export default CommentReducer;