const fetchArticles = () => (
	$.ajax({
		url: 'api/articles',
		method: 'GET',
	})
);

const fetchArticle = (id) => (
	$.ajax({
		url: `api/articles/${id}`,
		method: 'GET'
	})
);

const createArticle = (article) => (
	$.ajax({
		url: 'api/articles/new',
		method: "POST",
		data: { article }
	})
);








