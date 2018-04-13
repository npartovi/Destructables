import { RECEIVE_ALL_ARTICLES, RECEIVE_ARTICLE, DELETE_ARTICLE } from '../actions/article_actions';
import merge from 'lodash/merge';


const ArticlesReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type){
		case RECEIVE_ALL_ARTICLES:
			return action.articles;
		case RECEIVE_ARTICLE:
			return Object.assign({}, state, {[action.payload.article.id]: action.payload.article});
		case DELETE_ARTICLE:
			let newState = merge({}, state);
			delete newState[action.article];
			return newState;
		default:
			return state;
	}
};


export default ArticlesReducer;


