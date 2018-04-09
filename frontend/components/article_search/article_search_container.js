import { connect } from 'react-redux';
import SearchArticles from './article_search';

const mapStateToProps = (state) => ({
	articles: state.entities.articles

});

const mapDispatchToProps = (dispatch) => ({
	

});


export default connect(mapStateToProps, mapDispatchToProps)(SearchArticles);