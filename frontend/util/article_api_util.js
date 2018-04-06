export const fetchArticles = () => (
	$.ajax({
		url: 'api/articles',
		method: 'GET',
	})
);

export const fetchArticle = (id) => (
	$.ajax({
		url: `api/articles/${id}`,
		method: 'GET'
	})
);

export const createArticle = (article) => (
	$.ajax({
		url: 'api/articles/new',
		method: "POST",
		data: { article }
	})
);








