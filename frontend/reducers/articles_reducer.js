import { RECEIVE_ALL_ARTICLES, RECEIVE_ARTICLE } from '../actions/article_actions';


const ArticlesReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type){
		case RECEIVE_ALL_ARTICLES:
			return action.articles;
		case RECEIVE_ARTICLE:
			return Object.assign({}, state, {[action.payload.article.id]: action.payload.article});
		default:
			return state;
	}
};


export default ArticlesReducer;


