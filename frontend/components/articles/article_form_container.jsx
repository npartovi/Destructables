import { connect } from 'react-redux';
import ArticleForm from './article_form';
import { createArticle } from '../../actions/article_actions';
import { withRouter } from 'react-router-dom';
import { createStep } from '../../actions/step_actions';



const mapStateToProps = (state, ownProps) => ({
	currentUser: state.sessions.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	createArticle: (article) => dispatch(createArticle(article)),
	createStep: (step) => dispatch(createStep(step))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(ArticleForm));




