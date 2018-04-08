import { connect } from 'react-redux';
import ArticleShow from './article_show_page';
import { fetchArticle } from '../../actions/article_actions';


const mapStateToProps = (state,ownProps) => ({
	article: state.entities.articles[ownProps.match.params.articleId],
	currentUser: state.sessions.currentUser
});

const mapDispatchToprops = (dispatch) => ({
	fetchArticle: (id) => dispatch(fetchArticle(id))
});

export default connect (
	mapStateToProps,
	mapDispatchToprops
)(ArticleShow)