import { RECEIVE_ALL_COMMENTS } from '../actions/comment_action';
import { RECEIVE_ARTICLE } from '../actions/article_actions';
import merge from 'lodash/merge';


const CommentReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type){
		case RECEIVE_ALL_COMMENTS:
			return Object.assign({}, state, action.comments);
		case RECEIVE_ARTICLE:
			const newState = action.payload.comments;
			return Object.assign({}, newState);
		default:
			return state;
	}
};


export default CommentReducer;