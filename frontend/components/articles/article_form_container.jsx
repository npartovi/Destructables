import { connect } from 'react-redux';
import ArticleForm from './article_form';


const mapStateToProps = (state, ownProps) => ({
	articles: state.entities.articles
});

const mapDispatchToProps = (dispatch) => ({


});

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(ArticleForm);




