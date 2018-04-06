import * as ArticleApiUtil from '../util/article_api_util';
export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";


export const createArticle = (article) => (dispatch) => (
	ArticleApiUtil.createArticle(article)
		.then(article => dispatch(receiveArticle(dispatch)))
);

export const fetchArticles = () => (dispatch) => (
	ArticleApiUtil.fetchArticles()
		.then(articles => dispatch(receiveAllArticles(articles)))
);

export const fetchArticle = (id) => (dispatch) => (
	ArticleApiUtil.fetchArticle(id)
		.then(article => dispatch(receiveArticle(article)))
);



const receiveAllArticles = (articles) => ({
	type: RECEIVE_ALL_ARTICLES,
	articles
});

const receiveArticle = (article) => ({
	type: RECEIVE_ARTICLE,
	article
});