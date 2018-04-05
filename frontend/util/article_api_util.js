const createArticle = (article) => (
	$.ajax({
		url: '/articles/new',
		method: "Post",
		data: { article }
	})
);



