json.steps @steps.each do |step|
	json.title step.title
	json.body step.body
	json.ord step.ord
	json.articleId step.article_id
end