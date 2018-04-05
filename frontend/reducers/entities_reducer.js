import { combineReducers } from 'redux';
import ArticlesReducer from './articles_reducer';


export default combineReducers ({
	articles: ArticlesReducer
});