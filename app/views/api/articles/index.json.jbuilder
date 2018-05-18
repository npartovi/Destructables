@articles.each do |article|
	json.set! article.id do
		json.extract! article, :id, :title, :img_url, :user_id
		json.user_name article.user.username
	end
end

