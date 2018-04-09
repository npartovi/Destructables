import { RECEIVE_ALL_COMMENTS } from '../actions/comment_action';
import { RECEIVE_ARTICLE } from '../actions/article_actions';


const CommentReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type){
		case RECEIVE_ALL_COMMENTS:
			return Object.assign({}, state, action.comments.comments);
		case RECEIVE_ARTICLE:
			return Object.assign({}, state, action.payload.comments);
		default:
			return state;
	}
};

export default CommentReducer;