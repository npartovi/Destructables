export const fetchComments = (articleId) => (
	$.ajax({
		url: `api/articles/${articleId}/comments`,
		method: 'GET',
	})

);

export const createComment = (comment, articleId) => (
	$.ajax({
		url: `api/articles/${articleId}/comments`,
		method: 'POST',
		data: {comment: {body: comment}}
	})
);

export const deleteComment = (commentId) => (
	$.ajax({
		url: `api/comments/${commentId}`,
		method: 'DELETE',
	})
);


export const updateComment = (comment) => (
	$.ajax({
		url: `api/comments/${comment.id}`,
		method: 'PATCH',
		data: { comment }
	})
);