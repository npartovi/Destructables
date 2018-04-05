import * as ArticleApiUtl from '../util/article_api_util';
export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";


export const createArticle = (article) => (dispatch) => (
	ArticleApiUtl.createArticle(article)
		.then(article => dispatch(receiveArticle(dispatch)))
);

export const fetchArticles = () => (dispatch) => (
	ArticleApiUtl.fetchArticles()
		.then(article => dispatch(receiveAllArticles()))
);

export const fetchArticle = (id) => (dispatch) => (
	ArticleApiUtl.fetchArticle(id)
		.then(article => dispatch(receiveArticle(article)))
);



const receiveAllArticles = () => ({
	type: RECEIVE_ALL_ARTICLES,
	articles
});

const receiveArticle = () => ({
	type: RECEIVE_ARTICLE,
	article
});