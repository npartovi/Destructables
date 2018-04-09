import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchArticles } from './actions/article_actions';
import { fetchComments } from './actions/comment_action';


document.addEventListener("DOMContentLoaded", ()=>{


	let store;
	
		if (window.currentUser) {
		  const preloadedState = { sessions: { currentUser: window.currentUser } };
		  store = configureStore(preloadedState);
		  delete window.currentUser;
		} else {
		  store = configureStore();
		}

	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.fetchArticles = fetchArticles;
	window.fetchComments = fetchComments;

	
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root );

}) 