import { connect } from 'react-redux';
import ArticleIndex from './article_index';
import { fetchArticles } from '../../actions/article_actions';


const mapStateToProps = (state) => ({
	articles: Object.keys(state.entities.articles).map(id => state.entities.articles[id])
});

const mapDispatchToProps = (dispatch) => ({
	fetchArticles: () => dispatch(fetchArticles())
});

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(ArticleIndex);
