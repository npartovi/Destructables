import { combineReducers } from 'redux';
import ArticlesReducer from './articles_reducer';
import CommentsReducer from './comment_reducer';
import StepsReducer from './step_reducer';


export default combineReducers ({
	articles: ArticlesReducer,
	comments: CommentsReducer,
	steps: StepsReducer
});