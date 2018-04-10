import * as ArticleApiUtil from '../util/article_api_util';
export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";


export const createArticle = (article) => (dispatch) => (
	ArticleApiUtil.createArticle(article)
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



const receiveAllArticles = (articles) => ({
	type: RECEIVE_ALL_ARTICLES,
	articles
});

const receiveArticle = (payload) => ({
	type: RECEIVE_ARTICLE,
	payload
});


// export const searchProject = (query) => dispatch => {
//   return ArticleAPIUtil.searchProject(query).then((projects) => {
//     return dispatch(receiveProjects(projects))}
// )};