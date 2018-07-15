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

	// window.getState = store.getState;
	// window.dispatch = store.dispatch;
<<<<<<< HEAD
	// window.fetchArticles = fetchArticles;
	// window.fetchComments = fetchComments;
=======
	window.fetchArticles = fetchArticles;
	window.fetchComments = fetchComments;
>>>>>>> 854e63d06f1d442a0aeb3ef37f0fe259bfea51fb

	
	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store} />, root );

}) 