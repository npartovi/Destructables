import { connect } from 'react-redux';
import ArticleShow from './article_show_page';
import { fetchArticle } from '../../actions/article_actions';
import { fetchComments, createComment, deleteComment, updateComment } from '../../actions/comment_action';
import { fetchAllSteps } from '../../actions/step_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state,ownProps) => ({
	article: state.entities.articles[ownProps.match.params.articleId],
	currentUser: state.sessions.currentUser,
	comments: state.entities.comments,
	steps: state.entities.steps.steps
});

const mapDispatchToprops = (dispatch) => ({
	fetchArticle: (id) => dispatch(fetchArticle(id)),
	fetchComments: (articleId) => dispatch(fetchComments(articleId)),
	createComment: (comment) => dispatch(createComment(comment)),
	deleteComment: (commentId) => dispatch(deleteComment(commentId)),
	fetchAllSteps: (articleId) => dispatch(fetchAllSteps(articleId)),
	updateComment: (comment) => dispatch(updateComment(comment))
});

export default connect(
	mapStateToProps,
	mapDispatchToprops
)(ArticleShow);