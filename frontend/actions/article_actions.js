import * as ArticleApiUtil from '../util/article_api_util';
import * as SearchApiUtil from '../util/search_api_util';
export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const DELETE_ARTICLE = "DELETE_ARTICLE";


export const createArticle = (article, steps) => (dispatch) => (
	ArticleApiUtil.createArticle(article, steps)
		.then(article => dispatch(receiveArticle(article)))
);

export const fetchArticles = () => (dispatch) => (
	ArticleApiUtil.fetchArticles()
		.then(articles => dispatch(receiveAllArticles(articles)))
);

export const fetchArticle = (id) => (dispatch) => (
	ArticleApiUtil.fetchArticle(id)
		.then(article => dispatch(receiveArticle(article)))
);


export const deleteArticle = (articleId) => (dispatch) => (
	ArticleApiUtil.deleteArticle(articleId)
		.then(article => dispatch(removeArticle(article)))
);

export const searchDatabase = (query) => dispatch => (
  SearchApiUtil.search(query)
    .then( results => dispatch(receiveSearchResults(results)))
);





const receiveAllArticles = (articles) => ({
	type: RECEIVE_ALL_ARTICLES,
	articles
});

const receiveArticle = (payload) => ({
	type: RECEIVE_ARTICLE,
	payload
});

const receiveSearchResults = (searches) => ({
    type: RECEIVE_SEARCH_RESULTS,
    searches
});

const removeArticle = (article) => ({
	type: DELETE_ARTICLE,
	article
});


