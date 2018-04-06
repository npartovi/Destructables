@articles.each do |article|
	json.set! article.id do
		json.extract! article, :id, :title, :img_url
	end
end

