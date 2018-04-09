import { combineReducers } from 'redux';
import ArticlesReducer from './articles_reducer';
import CommentsReducer from './comment_reducer';


export default combineReducers ({
	articles: ArticlesReducer,
	comments: CommentsReducer
});