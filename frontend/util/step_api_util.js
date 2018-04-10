export const fetchSteps =(articleId) => (
	$.ajax({
		url: `api/articles/${articleId}/steps`,
		method: "GET",
	});

);

export const createSteps = (step, articleId) => (
	$.ajax({
		url: `api/articles/${articleId}/steps`,
		method: "POST",
		data: { step }
	});
);