import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";


export const fetchComments = (articleId) => dispatch => (
	CommentApiUtil.fetchComments(articleId)
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


