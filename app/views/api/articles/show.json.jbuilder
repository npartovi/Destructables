# json.id @article.id
# json.body @article.body
# json.title @article.title
# json.imgUrl asset_path(@article.img_url.url)
# json.comments @article.comments


json.set! :article do 
	json.id @article.id
	json.body @article.body
	json.title @article.title
	json.imgUrl asset_path(@article.img_url.url)
end

json.set! :comments do 
	@article.comments.each do |comment|
		json.set! comment.id, comment
	end
end