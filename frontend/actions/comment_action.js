import * as CommentApiUtil from '../util/comment_api_util';

export default RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";


export const fetchComments = () => dispatch => (
	CommentApiUtil.fetchComments()
		.then(comments => dispatch(receiveAllComments(comments)))
);

export const createComment = (comment) => dispatch => (
	CommentApiUtil.createComment(comment.body, comment.articleId)
);

export const deleteComment = (commentId) => dispatch =>(
	CommentApiUtil.deleteComment(commentId)
);


const receiveAllComments = (comments) => ({
	RECEIVE_ALL_COMMENTS,
	comments
});


