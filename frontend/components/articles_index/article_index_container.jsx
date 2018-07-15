import { connect } from 'react-redux';
import ArticleIndex from './article_index';
import { fetchArticles } from '../../actions/article_actions';


const mapStateToProps = (state) => ({
	articles: Object.keys(state.entities.articles).map(id => state.entities.articles[id]),
	currentUser: state.sessions.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticles: () => dispatch(fetchArticles()),
	createFavorite: (articleId) => dispatch(createFavorite(articleId)),

});

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(ArticleIndex);
