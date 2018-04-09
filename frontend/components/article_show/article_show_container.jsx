import { connect } from 'react-redux';
import ArticleShow from './article_show_page';
import { fetchArticle } from '../../actions/article_actions';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_action';


const mapStateToProps = (state,ownProps) => ({
	article: state.entities.articles[ownProps.match.params.articleId],
	currentUser: state.sessions.currentUser,
	comments: state.entities.comments,
});

const mapDispatchToprops = (dispatch) => ({
	fetchArticle: (id) => dispatch(fetchArticle(id)),
	fetchComments: (articleId) => dispatch(fetchComments(articleId)),
	createComment: (comment) => dispatch(createComment(comment)),
	deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default connect (
	mapStateToProps,
	mapDispatchToprops
)(ArticleShow);