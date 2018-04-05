import { connect } from 'react-redux';
import ArticleForm from './article_form';
import { createArticle } from '../../util/article_api_util';



const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	createArticle: (article)=> dispatch(createArticle(article))

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ArticleForm);




