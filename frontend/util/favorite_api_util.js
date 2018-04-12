export const createFavorite = (articleId) => (
	$.ajax({
		url: `/api/articles/${articleId}/favorites`,
		method: "POST",
	})
);

export const deleteFavorite = (articleId) => (

	$.ajax({
		url: `/api/articles/${articleId}/favorite`,
		method: "DELETE",
	})
);