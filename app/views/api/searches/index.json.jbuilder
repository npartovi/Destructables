@articles.each do |project|
  json.set! article.id do
    json.partial! 'api/articles/article', article: article
  end
end