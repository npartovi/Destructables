export const fetchSteps =(articleId) => (
	$.ajax({
		url: `api/articles/${articleId}/steps`,
		method: "GET",
	});

);


export const fetchStep = id => (
  $.ajax({
    method: "GET",
    url: `/api/steps/${id}`,
  })
);


export const createStep = step => (
  $.ajax({
    method: "POST",
    url: "/api/steps",
    data: {step}
  })
);