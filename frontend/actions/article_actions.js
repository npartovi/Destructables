import * as ArticleApiUtil from '../util/article_api_util';
import * as SearchApiUtil from '../util/search_api_util';
export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';


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

export const searchDatabase = (query) => dispatch => (
  SearchAPIUtil.search(query)
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

const receiveSearchResults = (searchResults) => ({
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
)};


// export const searchProject = (query) => dispatch => {
//   return ArticleAPIUtil.searchProject(query).then((projects) => {
//     return dispatch(receiveProjects(projects))}
// )};