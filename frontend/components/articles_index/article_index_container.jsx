import { connect } from 'react-redux';
import ArticleIndex from './article_index';
import { fetchArticles } from '../../actions/article_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';


const mapStateToProps = (state) => ({
	articles: Object.keys(state.entities.articles).map(id => state.entities.articles[id]),
	favorites: state.entities.favorites,
	currentUser: state.sessions.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticles: () => dispatch(fetchArticles()),
	createFavorite: (articleId) => dispatch(createFavorite(articleId)),
	deleteFavorite: (favoriteId) => dispatch(deleteFavorite(favorite))

});

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(ArticleIndex);
