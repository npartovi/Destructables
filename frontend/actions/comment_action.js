import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT  = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const fetchComments = (articleId) => dispatch => (
	CommentApiUtil.fetchComments(articleId)
		.then(comments => dispatch(receiveAllComments(comments)))
);

export const createComment = (comment) => dispatch => (
	CommentApiUtil.createComment(comment.body, comment.articleId)
	.then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch =>(
	CommentApiUtil.deleteComment(commentId)
	.then(comment => dispatch(removeComment(comment)))
);


const receiveAllComments = (comments) => ({
	type: RECEIVE_ALL_COMMENTS,
	comments
});

const receiveComment = (comment) => ({
	type: RECEIVE_COMMENT,
	comment
});


const removeComment = (commentId) => ({
	type: REMOVE_COMMENT,
	commentId
});